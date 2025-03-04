function validateform(event){
    event.preventDefault();
    var x = document.forms['myname'].elements['fname'].value;
    const msg = document.getElementById('message');
    if(x ==''){
        alert('Username or Email must be filled')
        msg.style.color = 'red';
        msg.style.fontWeight = 'bolder';
        msg.innerHTML = 'Please enter a valid username or email';
        return false;
    } else{
        msg.style.color = 'lime';
        msg.style.fontWeight = 'bolder';
        msg.innerHTML = 'Successful';
        return true;
    }
}

function checker(){
    const msg = document.getElementById('message');
    var ageinput = document.getElementById('age');
    if(!ageinput.checkValidity()){
        alert('Age must be filled')
        msg.innerHTML = ageinput.validationMessage;
        msg.style.color = 'red';
        msg.style.fontWeight = 'bolder';
    } else {
        msg.style.color = 'lime';
        msg.style.fontWeight = 'bolder';
        msg.innerHTML = 'Successful';
    }
}

window.addEventListener('keydown',my_keydown);
    function my_keydown(e){
        var keypressed = e.keyCode;
        console.log(keypressed);
        if(e.key === 'Enter'){
            console.log('Enter pressed')
            validatefor(new Event('submit'));
            checker();
        }
    }
