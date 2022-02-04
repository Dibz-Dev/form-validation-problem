Approach:

- Create state for each input value that I will need to store to validate, this creates a controlled component

- Attach onChange() events to each input to update the state for each specific value

- As the animals input requires multiple items I need to create an array which pushes new animals onto the array rather than overwriting the state all together. 

- Create a validate function which contains all my conditionals for validating every input

- Setup an error message depending on which input has the error

- Call the validate() inside the submitHandler() only if all conditionals evaluate to true


Enhancements:

- Currently the animal input does not remove items from the array when the input is unchecked, this needs to be updated.

- Add a custom hook to contain state and validate function to clean the component up.

- Further work on CSS and styling errors

Debugging:

-Console.log()
-Chrome dev tools

Supported on Chrome, Firefox, Microsoft Edge