let passInput = document.getElementById("passInput");
let uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
let lowercase = "qwertyuiopasdfghjklzxcvbnm";
let number = "123456789";
let symbol = "!@#$%^&*<(>)\\ |_+{}:";

let all = uppercase + lowercase + number + symbol;

function generatePassword() {
  let password = "";
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (password.length < 12) {
    password += all[Math.floor(Math.random() * all.length)];
  }
  passInput.value = password;
}

function show() {
  let imgg = document.getElementById("first-img");
  if (passInput.type === "password") {
    passInput.type = "text";
    imgg.src = "./imgs/show.png";
  }else{
    passInput.type = "password";
    imgg.src = "./imgs/close-eye.png";
  }
}
function copiepass() {
  passInput.select();
  let textToCopy = passInput.value;

  navigator.clipboard.writeText(textToCopy);
}
