

document.getElementById("guessCheck").onclick = function() {
    
    // Generate a random number between 0 and 10
    var randomNumber = Math.random() * 11;
    randomNumber = Math.floor(randomNumber);

    // Function to validate and check the user's guess
    function validateInput() {
        const inputElement = document.getElementById("guess");
        const inputValue = inputElement.value;
        const intValue = parseInt(inputValue, 10);

        if (isNaN(intValue) || intValue < 0 || intValue > 10) {
            alert("Please enter a number between 0 to 10.");
            inputElement.value = "";
        } else if (intValue === randomNumber) {
            alert("You Win..!");
        } else {
            alert("Try Again!! The Number is " + randomNumber);
        }
    }

    // Call the validation function
    validateInput();
};
