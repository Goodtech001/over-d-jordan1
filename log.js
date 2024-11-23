const wrapping = document.querySelector('.wrapping');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const logicon = document.querySelector('.log');
const timesicon = document.querySelector('.times');
const good = document.querySelector('.good'); 


registerLink.onclick = () => {
  wrapping.classList.toggle('active');
}

loginLink.onclick = () => {
    wrapping.classList.remove('active');
}

logicon.onclick = () => {
    good.classList.add('act');
}
timesicon.onclick = () => {
    good.classList.remove('act');
}



