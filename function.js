const hamburger = document.getElementById('hamburger');
const topNav = document.getElementById('topnav');

hamburger.addEventListener('click',() => {
  topNav.classList.toggle('show');
});

function validateForm() {
  let x = document.forms["myForm"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
