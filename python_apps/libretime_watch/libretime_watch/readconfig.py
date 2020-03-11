#!/usr/bin/python

import configparser
import logging
import os
# import libretime_watch as libretime_watch

CONFIGFILE="/etc/airtime/airtime.conf"

def read_config():
  """Read airtime configfile"""
  config = {}
  try: 
    Config = configparser.ConfigParser()
    Config.read(CONFIGFILE)
    config["db_host"]=Config.get('database','host')
    config["db_name"]=Config.get('database','dbname')
    config["db_user"]=Config.get('database','dbuser')
    config["db_pass"]=Config.get('database','dbpass')
    config["rm_host"]=Config.get('rabbitmq','host')
    config["rm_vhost"]=Config.get('rabbitmq','vhost')
    config["rm_port"]=Config.get('rabbitmq','port')
    config["rm_user"]=Config.get('rabbitmq','user')
    config["rm_pass"]=Config.get('rabbitmq','password')
    return config
  except:
    logging.error ("can't open the configfile")
    return None
