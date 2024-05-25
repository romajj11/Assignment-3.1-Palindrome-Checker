// J.J. Romano

// Function to check if the input string is a palindrome
function checkPalindrome() {

    // Get value from the input feild
    var inputString = document.getElementById('inputString').value;

    // Remove non-alphanumeirc characters and convert them to lowercase
    var cleanedString = inputString.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Get length of cleaned string
    var length = cleanedString.length;

    // Initialize a flag to true, assuming the string is a palindrome
    var isPalindrome = true;

    // Loop through half of the string to check palindrome
    for (var i = 0; i < Math.floor(length / 2); i++) {
        // Compare characters from the start and end moving towards the center
        if (cleanedString[i] !== cleanedString[length - 1 - i]) {
            //If any character doesnt match set the flag to false and break the loop
            isPalindrome = false;
            break;
        }
    }

    // Get the result div to display the outcome
    var resultDiv = document.getElementById('result');

    // Display the result based on the flag
    if (isPalindrome) {

        // If flag is true the string is a palindrome
        resultDiv.textContent = `"${inputString}" is a palindrome!`;
        resultDiv.style.color = 'green'; // set text color to green
    } else {

        // If the flag is false the string is not a palindrome
        resultDiv.textContent = `"${inputString}" is not a palindrome.`;
        resultDiv.style.color = 'red'; // set text color to red
    }
}
