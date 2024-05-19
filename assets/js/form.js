const url = 'https://script.google.com/macros/s/AKfycbxacV1SeoYO0f8e-tZqaBPxmDDIcmvW60P6vor5BokNtupyzETLkQyA2qa2BoX8VaID/exec';
const contactForm = document.querySelector("#contact-form");

//Form Fields

var dataName = document.querySelector("#name");
var dataEmail = document.querySelector("#email");
var dataPhone = document.querySelector("#phone");
var dataMessage = document.querySelector("#message");

contactForm.addEventListener('submit', function submitter(e){
  setTimeout(()=>div.remove(),3000);
  alert("Form submitted successfully!");
  window.location.href = "/";
  event.preventDefault();

  var message = ''

  if (dataName.value.length < 5) {
    message += '<br>** Please enter a valid name!</br>';
  }

  if (dataEmail.value.length < 5) {
    message +='<br>** Please enter a valid email address!</br>';
  }
  if (dataPhone.value.length < 7 || dataPhone.value.length > 10) {
    message +='<br>** Phone number cannot be less than 7 and more than 10 characters!</br>';
  }

  if (message) {
    const div = document.createElement('div');
    div.innerHTML = message;
    div.style.color = 'red';
    div.className = "formAlert"
    contactForm.prepend(div);

    setTimeout(()=>div.remove(),5000);
  } else {

    const myItem = {
      name:dataName.value,
      email:dataEmail.value,
      phone:dataPhone.value,
      message:dataMessage.value
    }

    addSendMail(myItem);
  }

});

function addSendMail(data){
  console.log(data);
  fetch(url,{

    method:'POST',
    body:JSON.stringify(data)

  }).then(res => res.json()).then(json =>{
    console.log(json);
  })
}

function addSendMailGet(data){
  const url1 = url  + '?id=100';
  fetch(url1).then(res => res.json()).then(json =>{
    console.log(json);
  })
}