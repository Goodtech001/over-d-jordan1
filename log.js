const wrapping = document.querySelector('.wrapping');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const logicon = document.querySelector('.log');
const timesicon = document.querySelector('.times');
const good = document.querySelector('.good'); 
const add = document.querySelectorAll('.adding');
const main = document.querySelector('.mainb');
const timess = document.querySelector('.timess');
const gid = document.querySelector('.gid')


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
// add.onclick = () => {
//     gid.classList.toggle('main');
// }

add.forEach((button) => {
    button.addEventListener('click', () => {
        gid.classList.toggle('main');
    });
  });
  
timess.onclick = () => {
    gid.classList.remove('main')
}



