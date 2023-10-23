// coding implementation
// end coding implementation

var user_email = document.querySelector('#email')
var content = document.querySelector('#com')
var rate = document.querySelector('#rate')

const checkEmpty = (listInput) => {
  let isEmptyError = false;

  listInput.forEach((input) => {
    input.value = input.value.trim();

    if (!input.value) {
      isEmptyError = true;
      alert(`${input.name} Cannot be blank`);
    } else {
      console.log(input.value)
    }
  });

  return isEmptyError;
};

const checkEmail = (input) =>{
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        input.value = input.value.trim();
      
        let isEmailError = !emailRegex.test(input.value);
      
        if (emailRegex.test(input.value)) {
          console.log(input)
        } else {
          alert(`Email Invalid`);
        }
      
        return isEmailError;
      };

const checkRate = (input) =>{
    if(isNaN(input.value)){
        alert('Rate must be a number')
    }
}
var formm = document.querySelector('#submit')
formm.addEventListener('click',(e)=>{
    e.preventDefault()
    
  const isEmptyError = checkEmpty([user_email,content,rate]);
  const isEmailError = checkEmail(user_email);
  const isRateError = checkRate(rate)

  if(!isEmailError && !isEmptyError && !isRateError){
    user_email.value=``
    content.value=``
    rate.value=``
  }
})
