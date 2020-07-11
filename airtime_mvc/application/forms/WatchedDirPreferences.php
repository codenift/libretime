<?php

class Application_Form_WatchedDirPreferences extends Zend_Form_SubForm
{

    public function init()
    {
        $this->setDecorators(array(
            array('ViewScript', array('viewScript' => 'form/preferences_watched_dirs.phtml'))
        ));

        $this->addElement('text', 'storageFolder', array(
            'class'      => 'input_text',
            'label'      => _('Import Folder:'),
            'required'   => false,
            'filters'    => array('StringTrim'),
            'value' => '',
            'decorators' => array(
                'ViewHelper'
            )
        ));

        $this->addElement('text', 'watchedFolder', array(
            'class'      => 'input_text',
            'label'      => _('Watched Folders:'),
            'required'   => false,
            'filters'    => array('StringTrim'),
            'value' => '',
            'decorators' => array(
                'ViewHelper'
            )
        ));

        // Add track type dropdown
        $track_type_options = array();
        $track_types = Application_Model_Tracktype::getTracktypes();
        $track_type_options[""] = _('Select a Type');
        foreach ($track_types as $key => $tt) {
            $track_type_options[$tt['code']] = $tt['type_name'];
        }

        $track_type = new Zend_Form_Element_Select('track_type');
        $track_type->class = 'input_text';
        $track_type->setLabel(_('Track Type:'));
        $track_type->setMultiOptions($track_type_options);
        $this->addElement($track_type);
    }

    public function verifyChosenFolder($p_form_element_id)
    {
        $element = $this->getElement($p_form_element_id);

        if (!is_dir($element->getValue())) {
            $element->setErrors(array(_('Not a valid Directory')));

            return false;
        } else {
            $element->setValue("");

            return true;
        }

    }

}
