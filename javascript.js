function validate(event){
    event.preventDefault();

	if(document.myForm.Name.value == '')
	{
		document.myForm.Email.focus();
		var Email = document.getElementById("Email");
        console.log(Email);
		Email.style.backgroundColor = "aqua";
		Email.style.border = 'thick solid red';
		var label = document.createElement('label');
		label.textContent = "Please provide a valid Email";
		var div = document.getElementById("showmessage");
		div.appendChild(label)

		return false;

	} else {
        var youname = document.getElementById('Email').value;
        console.log(Email);
	}
}