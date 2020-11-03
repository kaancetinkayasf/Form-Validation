import{startConfetti,stopConfetti} from './confetti.js';

const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("password2");
const span = document.getElementById('data');
const dataContainer = document.getElementById('show-data');

let audio = new Audio('1556.mp3');

let bookmarks = [];

function storeData() {

  let name_ = name.value;
  let email_ = email.value;
  let phoneNumber_ = phoneNumber.value;

    let bookmark = {
        name:name_,
        email:email_,
        phoneNumber:phoneNumber_
    }
    
  bookmarks.push(bookmark);

  window.localStorage.setItem("data",JSON.stringify(bookmarks));
  
  setTimeout(()=>{stopConfetti();},4000)
  buildInfo();
  form.reset();
}

function validatePassword() {
  if (password.value === confirmPassword.value) {
    let password_ = password.value;
    
    
    audio.play();
    startConfetti();
    
  } else {
    return false;
  }

  storeData();
}

// On Submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validatePassword();
});

function fetchLocalStorage(){
  if(localStorage.getItem('data')){
    bookmarks=JSON.parse(localStorage.getItem('data'));
    buildInfo();
  }
}

function buildInfo(){  
    bookmarks.forEach((bookmark)=>{
        const {name,email,phoneNumber} = bookmark;
        span.innerText=` Your Name : ${name}

         Your Email : ${email}

          Your Phone Number : ${phoneNumber}`;
    });
}



localStorage.clear();