// eslint-disable-next-line
function greet() {
    // console.log('greet function called');
    //get the inputs by id (first, last)
    var firstName = document.getElementById('first-name');
    var lastName = document.getElementById('last-name');
    // console.log(firstName.value, lastName.value);
    //get values out of inputs
    var fullName = firstName.value + ' ' + lastName.value;
    //make the greeting 
    var greeting = 'Why hello there ' + fullName + '!';
    //display the greeting
    var greeter = document.getElementById('greeting');
    console.log(greeter);
    greeter.textContent = greeting; //this is taking the content of that p element and replacing it with the new variable value


}

//TODO: validate name inputs
//TODO: clear inputs after greet?