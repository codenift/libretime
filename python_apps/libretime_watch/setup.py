from setuptools import setup
from subprocess import call
import sys
import os
import stat

# Change directory since setuptools uses relative paths
script_path = os.path.dirname(os.path.realpath(__file__))
print(script_path)
os.chdir(script_path)

# Allows us to avoid installing the upstart init script when deploying airtime_analyzer
# on Airtime Pro:
if '--no-init-script' in sys.argv:
    data_files = []
    sys.argv.remove('--no-init-script') # super hax
else:
    data_files = [('/etc/init.d', ['install/sysvinit/libretime-watch']),
                  ('/etc/init',['install/upstart/libretime-watch.conf']),
                  ('/etc/cron.d', ['install/cron/libretime-watch'])]
    print(data_files)


# https://stackoverflow.com/questions/5932804/set-file-permissions-in-setup-py-file


setup(name='libretime-watch',
      version='0.1.1',
      description='Libretime Watch existing directory',
      url='http://github.com/libretime/libretime',
      author='HaJoHe',
      author_email='rni@chef.net',
      license='MIT',
#      py_modules=['libretime_watch/libretime_watch', 'libretime_watch/readconfig.py'],
      packages=['libretime_watch'],
      scripts=['bin/libretime-watch'],
      entry_points={
        "console_scripts": [
          # Console script to trigger a scan of the watch directories
          "libretime-watch-trigger = libretime_watch.start_watching:main",
          "libretime-watch-purge-queue = libretime_watch.purge_queue:main"
        ]
      },
      install_requires=[
          'mutagen~=1.43.0',
          'pika',
          'psycopg2-binary', # database
          'jason',
          'setuptools',
          'python-magic',
          'pilkit',
          'pillow',
      ],
      zip_safe=False,
      data_files=data_files)

# Remind users to reload the initctl config so that "service start libretime-watch" works
if data_files:
    print("Remember to reload the initctl configuration")
    # Set proper permissions for cron file to run
    os.chmod('/etc/cron.d/libretime-watch', stat.S_IRUSR | stat.S_IWUSR | stat.S_IRGRP | stat.S_IROTH)
