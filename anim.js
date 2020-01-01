fadeOutFader();
// document.body.style.backgroundColor = "lightblue";
scrollFunction();
window.onscroll = function () { scrollFunction() };

// alert("working!");


// alert(document.getElementById("top").style.fontSize.toString());

// alert("why is going on!?!");
// alert(document.getElementById("top").style.color);
function scrollFunction() {
    var navigatorTopBar = document.getElementById("top").style;
    var slightlyMoving = document.getElementsByClassName("slightly-moving");
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
    for (var i = 0; i < slightlyMoving.length; i++) {
        //   console.log(document.documentElement.scrollTop);
        // console.log(document.documentElement.scrollTop + "px");
        // slightlyMoving[i].style.backgroundPositionY = (document.documentElement.scrollTop*-.7) + "px";//if background-position is fixed
        slightlyMoving[i].style.backgroundPositionY = (document.documentElement.scrollTop * -.3) + "px";//if background-position is local
    }
    //   console.log("Scrolled");

}

// alert("working!");


document.getElementById("home-button").addEventListener("click", function () { setScene(0) });
document.getElementById("programming-button").addEventListener("click", function () { fadeInFader("../../programming") });
document.getElementById("music-button").addEventListener("click", function () { fadeInFader("../../music") });
document.getElementById("contact-button").addEventListener("click", function () { fadeInFader("../../contact") });

function fadeOutFader() {
    // alert("fading in fader!");
    fader = document.getElementById("fader");
    fader.style.opacity = "0";
}

function fadeInFader(url) {
    // alert("fading in fader!");
    fader = document.getElementById("fader");
    fader.style.opacity = "1";
    setTimeout(function () { window.location.replace(url) }, 500)
}

function setScene(sceneNumber){
    if(sceneNumber == 0){
        document.documentElement.innerHTML = readTextFile("index.html");
        console.log(readTextFile("index.html"));
    }
    if(sceneNumber == 1){
        document.documentElement.innerHTML = readTextFile("../programming/index.html");
    }
    if(sceneNumber == 2){
        document.documentElement.innerHTML = readTextFile("../music/index.html");
    }
    if(sceneNumber == 3){
        document.documentElement.innerHTML = readTextFile("contact/index.html");
        console.log(readTextFile("contact/index.html"));
    }
}

function readTextFile(file) {
    fetch(file)
        .then(response => response.text())
        .then((data) => {
            console.log(""+data + "");
            return data;
        })
}