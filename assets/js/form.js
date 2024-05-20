const url = 'https://script.google.com/macros/s/AKfycbxacV1SeoYO0f8e-tZqaBPxmDDIcmvW60P6vor5BokNtupyzETLkQyA2qa2BoX8VaID/exec';
const contactForm = document.querySelector("#contact-form");

//Form Fields

var dataName = document.querySelector("#name");
var dataEmail = document.querySelector("#email");
var dataPhone = document.querySelector("#phone");
var dataSubject = document.querySelector("#subject");
var dataMessage = document.querySelector("#message");

contactForm.addEventListener('submit', function submitter(e){
  e.preventDefault();

  var message = '';

  // Check if form fields are empty
  if (dataName.value.trim() === '') {
    message += '\n** Please enter your name!';
  }

  if (dataEmail.value.trim() === '') {
    message += '\n** Please enter your email address!';
  }

  if (dataPhone.value.trim() === '') {
    message += '\n** Please enter your phone number!';
  } else if (dataPhone.value.length < 7 || dataPhone.value.length > 12) {
    message += '\n** Phone number cannot be less than 7 and more than 12 characters!';
  }

  if (dataSubject.value.trim() === '') {
    message += '\n** Please enter your subject!';
  }

  if (dataMessage.value.trim() === '') {
    message += '\n** Please enter your message!';
  }

  if (message !== '') {
    const div = alert(message);
    contactForm.prepend();
  } else {
    alert("Message Successfully Sent!");
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);

    const myItem = {
      name: dataName.value,
      email: dataEmail.value,
      phone: dataPhone.value,
      subject: dataSubject.value,
      message: dataMessage.value
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
