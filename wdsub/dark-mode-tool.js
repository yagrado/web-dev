let darkMd=
 document.getElementById("darkmd");
let lightmd=   document.getElementById("lightmd");
let isDark = false;




function darkOnOff (event){
  // Change background color
  if (isDark) document.body.style.backgroundColor = "white";
  else (isDark) document.body.style.backgroundColor= "#fff";
  else document.body.style.backgroundColor ="#000";
  // Change text color
   if (isDark) document.body.style.color = "#000"
  elese document.body.style.color = "#fff"
  // Change mode text
  if (isDark) lightmd.innerHTML = "<p>Dark Mode Off </p>";
  else lightmd.innerHTML = "<p>Dark Mode on</p>";
  //Toggle isDark
  isDark = !isDark;
}




