DropBox = OZ.Class();

DropBox.prototype.init = function() {

    console.log("Building wui ...");

    //dropbox area

    dropbox_area = document.createElement('div');
    dropbox_area.id = 'dropbox_area';

    dropbox_button = document.createElement('input');
    dropbox_button.id='dropbox_button';
    dropbox_button.value='DropBox DataStorage';
    dropbox_button.type='button';

    dropbox_wui_wrapper = document.createElement('div');
    dropbox_wui_wrapper.id = "dropbox_wui_wrapper";

    //login form
    var form = document.createElement('form');
    form.id = "dropbox_login_form";

    //login
    login_user_label = document.createElement('label');
    login_user_label.text = "username";
    login_user_label.for = "login_user";

    login_user = document.createElement('input');
    login_user.id="login_user";
    login_user.value="";

    //password
    login_password_label = document.createElement('label');
    login_password_label.text = "password";
    login_password_label.for = "login_password";

    login_password = document.createElement('input');
    login_password.id="login_password";
    login_password.value="";

    form_elements = [
        login_user_label,
        login_user,
        login_password_label,
        login_password
    ];

    for (index=0;index<form_elements.length;index++) {
        form.appendChild(form_elements[index]);
    };

    dropbox_area.appendChild(form);

    $(document).ready(function(){
        var bar = document.getElementById("bar");
        bar.appendChild(dropbox_button);
        document.body.appendChild(dropbox_area);
        document.body.appendChild(dropbox_wui_wrapper);
        $("dropbox_wui_wrapper").modalPopLite({ openButton: '#dropbox_button', closeButton: '#close-btn' });
    });

    console.log("Ended building wui ...");
};

DropBox.prototype.auth = function() {
    //
};

DropBox.prototype.get_list = function() {
    //
};

DropBox.prototype.save_as = function() {
    //
};

DropBox.prototype.open = function() {
    //
};

(function(){
    console.log("My plugin is active...");
    window.dropbox_space = DropBox();
}) ( );
