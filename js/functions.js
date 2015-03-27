// show/hide more info
document.getElementById('show-info').onclick = function () {
    document.getElementById('more-info').style.display = 'inline';
    document.getElementById('show-info').style.display = 'none';
};

document.getElementById('hide-info').onclick = function () {
    document.getElementById('more-info').style.display = 'none';
    document.getElementById('show-info').style.display = 'inline';
};

function initAllWidgets() {

    function initWidget(widget) {
        widget.getElementsByClassName("header")[0].onclick = function () {
            if (widget.className == "widget") {
                widget.className = "widget collapsed";
            } else {
                widget.className = "widget";
            }
        }
    }

    var widgets = document.getElementsByClassName('widget');


    for (var i = 0; i < widgets.length; i++) {

        initWidget(widgets[i]);

    }
}
initAllWidgets();


//actions for top links
var links = document.getElementById("top-menu").getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById("breadcrumb").innerHTML = this.innerHTML + " : " + this.title;
    }
}

var days = document.getElementById("calendar-widget").getElementsByTagName("td");
var today = new Date().getDate();
for (var i = 0; i < days.length; i++) {
    if (days[i].innerHTML == today) {
        days[i].className = "today";
    }
}

var selectedTds = document.getElementById("calendar-widget").getElementsByTagName("td");
for (var i = 0; i < selectedTds.length; i++) {
    selectedTds[i].onclick = function () {
        //selectedTds[i].className = "today";
        this.className = "today";
    }

}

var parametri = {
    name: 'eu',
    phone: '0727898463'
    //married: 'false',
    //skills: ['none', 'zero']
};
$.ajax({
    url: 'index.html',
    data: parametri
});