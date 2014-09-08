DropBox = OZ.Class();

DropBox.prototype.init = function() {

    console.log("Building wui ...");

    //dropbox area

    dropbox_area = document.createElement('div');
    dropbox_area.id = 'dropbox_area';

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
        document.body.appendChild(dropbox_area);
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
