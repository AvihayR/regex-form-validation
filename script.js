const patterns = {
    username:/^\w{5,12}$/,
    email: /^[\w\.]{0,}@\w{0,15}\.[\w-]+\.*\w{0,15}$/,
    password:/^[\w@-]{8,20}$/i,
    fullname: /^[a-zA-z]{2,17}\s[a-zA-z]{1,17}\s*[a-zA-Z]*$/,
};


let inputs = document.querySelectorAll('input');


//validation function:
function validate(field,regex){
    if(regex.test(field.value)){
        field.className = 'valid';
    }else{
        field.className = 'invalid';
    };
}


inputs.forEach((input)=> {
    input.addEventListener('keyup', (e)=>{
        validate(e.target, patterns[e.target.attributes.id.value])
    } )
});

