var projectPanel;

$.getJSON("projects.json", function (json) {
    projectPanel = json;
    projectPanel['row1'].forEach(element => fillProjectRow(element, "1"));
    projectPanel['row2'].forEach(element => fillProjectRow(element, "2"));
});

function fillProjectRow(item, rowNo) {
    document.getElementById("proj-row-" + rowNo).innerHTML +=
        '<a class="pc-container" href="' + item['url'] + '" target="_blank">' +
        `<div class = "project-card"  style="background-image: url(${item['image']});">` +
        `<img src="${item['image']}" alt="" style="visibility:hidden; height: 170px";>` +
        `</div>` +
        '</a>';
}