var projectPanel;

$.getJSON("projects.json", function (json) {
    projectPanel = json;
    projectPanel['row1'].forEach(fillRow1);
    projectPanel['row2'].forEach(fillRow2);
});

function fillRow1(item) {
    document.getElementById("proj-row-1").innerHTML +=
        '<a class="pc-container" href="' + item['url'] + '" target="_blank">' +
        '<img class="project-card"src="' + item['image'] + '"alt="">' +
        '</a>';
}
function fillRow2(item) {
    document.getElementById("proj-row-2").innerHTML +=
        '<a class="pc-container" href="' + item['url'] + '" target="_blank">' +
        '<img class="project-card"src="' + item['image'] + '"alt="">' +
        '</a>';
}