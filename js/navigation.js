function fadeOutFader() {
    fader = document.getElementById("fader");
    fader.style.opacity = "0";
}

function fadeInFader(url) {
    fader = document.getElementById("fader");
    fader.style.opacity = "1";
    setTimeout(function () { window.location.replace(url) }, 500)
}