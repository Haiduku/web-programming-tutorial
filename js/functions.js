// show/hide more info
document.getElementById('show-info').onclick = function () {
    document.getElementById('more-info').style.display='inline';
    document.getElementById('show-info').style.display='none';
};

document.getElementById('hide-info').onclick = function () {
    document.getElementById('more-info').style.display='none';
    document.getElementById('show-info').style.display='inline';
};

// collapse/expand news widget
var newsWidget = document.getElementById("news-widget");
newsWidget.getElementsByClassName("header")[0].onclick = function () {
    if (newsWidget.className == "widget") {
        newsWidget.className = "widget collapsed";
    } else {
        newsWidget.className = "widget";
    }
};

var linksHelp = document.getElementById("help-widget");
linksHelp.getElementsByClassName("header")[0].onclick = function() {
    if (linksHelp.className == "widget") {
        linksHelp.className = "widget collapsed";
    } else {
        linksHelp.className = "widget";
    }
};
var google = document.getElementById("google-search");
google.getElementsByClassName("header")[0].onclick = function() {
    if (google.className == "widget") {
        google.className = "widget collapsed";
    } else {
        google.className = "widget";
    }
};

// actions for top links
var links = document.getElementById("top-menu").getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById("breadcrumb").innerHTML = this.innerHTML + " : " + this.title;
    }
}
