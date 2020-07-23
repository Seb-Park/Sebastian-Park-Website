var isMobile;

var footer = document.getElementsByClassName("page-footer")[0];

fadeOutFader();
scrollFunction();
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var navigatorTopBar = document.getElementById("top").style;
    var slightlyMoving = document.getElementsByClassName("slightly-moving");
    // console.log(document.documentElement.scrollTop+"/"+document.body.clientHeight);
    if (document.body.scrollTop / document.body.clientHeight > 280 / 790
        || document.documentElement.scrollTop / document.body.clientHeight > 280 / 790) {
        navigatorTopBar.padding = "0px 20px";
        navigatorTopBar.backgroundColor = "rgba(255, 105, 180, 0.89)";
        navigatorTopBar.boxShadow = "0px 0px 10px rgb(51, 51, 51)";
    } else {
        navigatorTopBar.padding = "20px 20px";
        navigatorTopBar.backgroundColor = "rgba(255, 105, 180, 0)";
        navigatorTopBar.boxShadow = "none";
    }
    for (var i = 0; i < slightlyMoving.length; i++) {
        // slightlyMoving[i].style.backgroundPositionY = (document.documentElement.scrollTop*-.7) + "px";//if background-position is fixed
        slightlyMoving[i].style.backgroundPositionY = (document.documentElement.scrollTop * (-.3 / 900) * document.body.clientHeight) + "px";//if background-position is local//the image moves like that so that it changes depending on screen height moves less or more
    }
    if (document.body.scrollTop < 2 && document.documentElement.scrollTop < 2
        || document.documentElement.scrollTop > 1200 || document.body.scrollTop > 1200) {
        footer.style.opacity = "1";
        footer.style.pointerEvents = "all";
    }
    else {
        footer.style.opacity = "0";
        footer.style.pointerEvents = "none";
    }
    console.log(`\r ${document.documentElement.scrollTop}`)
}