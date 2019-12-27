
// document.body.style.backgroundColor = "lightblue";
scrollFunction();
window.onscroll = function() {scrollFunction()};

// alert(document.getElementById("top").style.fontSize.toString());

// alert("why is going on!?!");
// alert(document.getElementById("top").style.color);
function scrollFunction() {
    var navigatorTopBar = document.getElementById("top").style;
  if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
    navigatorTopBar.padding = "0px 20px";
    navigatorTopBar.backgroundColor = "rgba(255, 105, 180, 0.89)";
    navigatorTopBar.boxShadow = "0px 0px 15px rgb(51, 51, 51)";
    // document.getElementById("logo").style.fontSize = "25px";
  } else {
    navigatorTopBar.padding = "20px 20px";
    navigatorTopBar.backgroundColor = "rgba(255, 105, 180, 0)";
    navigatorTopBar.boxShadow = "none";
    // document.getElementById("logo").style.fontSize = "35px";
  }
  console.log("Scrolled");
  
}