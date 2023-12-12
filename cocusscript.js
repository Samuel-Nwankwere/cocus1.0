let menu= document.querySelector('#menu-btn');
let navbar =document.querySelector('.header .flex .navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}


window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}



function checklength() {
  var input=getElementById('number');
  if (this.value.length <= 3) {
    document.getElementById('contact us');
    return false;
  }
}


function checklength() {
  var input=getElementById('number');
  if (this.value.length >= 2 ) {
    document.getElementById('contact us');
    return false;
  }
}
