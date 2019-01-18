// eslint-disable-next-line
function greet() {
    var firstName = document.getElementById('first-name');
    var lastName = document.getElementById('last-name');
    
    var fullName = firstName.value + ' ' + lastName.value;
    
    var greeting = 'Why hello there ' + fullName + '!';
    
    var greeter = document.getElementById('greeting');
    
    greeter.textContent = greeting; //this is taking the content of that id=greeting p element and replacing it with the new variable value


}

//TODO: validate name inputs
//TODO: clear inputs after greet?