var header = 
'<header>'+
'<div class="page-header" id="top">'+
    '<h1 class="logo">'+
        '<img src="/images/logo.png" alt="" class="logo-icon">    Sebastian Park.</h1>'+
    '<input type="checkbox" class="nav-toggle" id="nav-toggle">'+
    '<nav>'+
        '<ul>'+
            '<li><a id="home-button">Home</a></li>'+
            '<li><a id="programming-button">Programming</a></li>'+
            '<li><a href="https://cambridge.nuvustudio.com/sebastian-park" target="_blank">Design</a></li>'+
            '<li><a id="music-button">Music</a></li>'+
            '<li><a id="contact-button">Contact</a></li>'+
            // '<li></li>'+
        '</ul>'+
    '</nav>'+
    '<label for="nav-toggle" class="nav-toggle-label">'+
    '<span></span>'+
    '</label>'+
    '</div>'+
    '</header>';
var footer = 
    '<div class="page-footer">'+
    '<div class="flex">'+
        '<a href="https://github.com/Seb-Park" target="_blank">'+
            '<i class="fab fa-github"></i>'+
        '</a>'+
    '</div>'+
    '<div class="flex">'+
        '<a href="https://play.google.com/store/apps/developer?id=Sebastian+Park" target="_blank">'+
            '<i class="fab fa-google-play"></i>'+
        '</a>'+
    '</div>'+
    '<div class="flex">'+
        '<a href="http://sebastian-park.netlify.com/images/resume.pdf" target="_blank">'+
            '<i class="far fa-file-pdf"></i>'+
            '<!--far fa-file-alt or fa-file-pdf-->'+
        '</a>'+
    '</div>'+
    '<div class="flex">'+
        '<a href="https://devpost.com/Seb-park" target="_blank">'+
            '<i class="fab fa-dev"></i>'+
            '</div>';
document.getElementById("insert-header").innerHTML=header;
document.getElementById("insert-footer").innerHTML=footer;

document.getElementById("home-button").addEventListener("click", function () { fadeInFader("/") });
document.getElementById("programming-button").addEventListener("click", function () { fadeInFader("/programming") });
document.getElementById("music-button").addEventListener("click", function () { fadeInFader("/music") });
document.getElementById("contact-button").addEventListener("click", function () { fadeInFader("/contact") });
document.getElementsByClassName("logo")[0].addEventListener("click", ()=>{fadeInFader("/")});