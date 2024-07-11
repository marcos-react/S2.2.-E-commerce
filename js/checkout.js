
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");
	

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");

	// conditions regex

	let minimumCharacter = 3;

	const regex_character = /^[a-zA-Z]+$/;
	const regex_number = /^\d+$/;
	const regex_character_number = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/;
	const regex_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == "" || fName.value.lenght < minimumCharacter || regex_character.test(fName.value) == false){

		
		fName.classList.add("is-invalid");
		errorName.textContent = "The name is not valid"; // one type of error not valid
		errorName.style.color = "red";
		error++;

	} else{
		
		fName.classList.remove("is-invalid");
		errorName.textContent = "The name is valid";
		errorName.style.color = "green";
	}

	if(fEmail.value == "" || fEmail.value.lenght < minimumCharacter || regex_email.test(fEmail.value) == false){
		
		fEmail.classList.add("is-invalid"); // is-invalid is bootstrap class for validation
		errorEmail.style.color = "red";
		error++;
	} else{

		fEmail.classList.remove("is-invalid");
		errorEmail.style.color = "green";
	}

	if(fAddress.value == "" || fAddress.value.lenght < minimumCharacter){
		
		fAddress.classList.add("is-invalid");
		errorAddress.style.color = "red";
		error++;
	} else{

		fAddress.classList.remove("is-invalid");
		errorAddress.style.color = "green";
	}

	if(fLastN.value == "" || fLastN.value.lenght < minimumCharacter || regex_character.test(fLastN.value) == false){
		
		fLastN.classList.add("is-invalid");
		errorLastN.style.color = "red";
		error++;
	} else{

		fLastN.classList.remove("is-invalid");
		errorLastN.style.color = "green";
	}

	if(fPassword.value == "" || fPassword.value.lenght < minimumCharacter || regex_character_number.test(fPassword.value) == false){
		
		fPassword.classList.add("is-invalid");
		errorPassword.style.color = "red";
		error++;
	} else{

		fPassword.classList.remove("is-invalid");
		errorPassword.style.color = "green";
	}

	if(fPhone.value == "" || fPhone.value.lenght < minimumCharacter || regex_number.test(fPhone) == false){
		
		fPhone.classList.add("is-invalid");
		errorPhone.style.color = "red";
		error++;
	} else{

		fPhone.classList.remove("is-invalid");
		errorPhone.style.color = "green";
	}
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
