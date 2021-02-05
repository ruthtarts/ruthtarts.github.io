let todayBanner = new Date();

window.onload = function bannerLoad() { 

if (todayBanner.getDay() == 5 ) {
  document.getElementById("my_banner").style.display = "block";
  
}

else {
  document.getElementById("my_banner").style.display = "none";
}
 }