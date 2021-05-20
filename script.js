

function set_field_security() {
    if (document.getElementById('UniqueID').value.length != 0){
        document.getElementById('UniqueID').disabled = true
    }
    else {document.getElementById('UniqueID').disabled = false}
    if (document.getElementById('GroupName').value.length != 0){
        document.getElementById('GroupName').disabled = true
    }
    else {document.getElementById('GroupName').disabled = false}
}

function save_options() {
    var UniqueIDSetting = document.getElementById('UniqueID').value;
    var GroupNameSetting = document.getElementById('GroupName').value;
    localStorage.setItem('UniqueID', UniqueIDSetting);
    localStorage.setItem('GroupName', GroupNameSetting);
    set_field_security();
    document.getElementById('save').disabled = true

}

function clear_options() {
    localStorage.clear();
    document.getElementById('GroupName').value = "";
    document.getElementById('UniqueID').value = "";
    set_field_security();
    document.getElementById('save').disabled = false

}

function restore_options() {

    document.getElementById('UniqueID').value = localStorage.getItem('UniqueID');
    document.getElementById('GroupName').value = localStorage.getItem('GroupName');
    set_field_security();
    
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('clear').addEventListener('click', clear_options);
