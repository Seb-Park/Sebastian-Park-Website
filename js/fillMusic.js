var updates;
var musicBG = document.getElementById("music-bg");
var yaLikeJazz = document.getElementById("music-header");
musicBG.onscroll = function () {
    if(musicBG.scrollTop>75){
        yaLikeJazz.style.opacity = 0;
    }
    else{
        yaLikeJazz.style.opacity = 1;
    }
};

//using jquery fill the updates object with the updates.json updates array.
$.getJSON("music.json", function (json) {
    //once it's done...
    updates = json['musics'];
    updates.forEach(fillUpdates); //for each of the updates, do the function "fill updates"
    document.getElementById("music-panel").innerHTML += "<br><br><br>";
});

function fillUpdates(item) {
    //Find the updates panel and add each update to it with the following format; 
    //the "format" is just a huge string that mimics HTML that we can insert into the page
    var musicItem = document.createElement("div");
    document.getElementById("music-panel").innerHTML +=
        '<div class="update-break"></div>' +
        '<div class = "update">';
    // if (item['img_url'] != null && item['img_url'] != "<br>") {
    //     document.getElementById("music-panel").innerHTML += '<img src="' + item['img_url'] + '" alt="" class="update-image">';
    // }
    if(item['audio']!=null){
        var audioClip = document.createElement("audio");
        audioClip.src = item['audio'];
        audioClip.controls = true;
        audioClip.controlsList = "nodownload";
        audioClip.className = "jazz-recording";
        musicItem.appendChild(audioClip);
    }
    else if(item['youtube']!=null){
        var youtubeClip = document.createElement("iframe");
        youtubeClip.src = item['youtube'];
        youtubeClip.frameBorder = 0;
        youtubeClip.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        youtubeClip.allowFullscreen = true;
        youtubeClip.className = "embedYT";
        youtubeClip.width = "560";
        youtubeClip.height = "315";
        musicItem.appendChild(youtubeClip);
    }
    musicItem.innerHTML +=
    '<p class="music-title">' + item['title'] + ' </p>' +
        '<p class="music-details">' + item['description'] +
        '<br>' + item['details'] + '</p>';
    document.getElementById("music-panel").appendChild(musicItem);
}