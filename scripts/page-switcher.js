var SWITCH_DELAY = 4000;
var SWITCHER_ENABLED = false;

var PAGES = [
    "barchart.html?track=Agile",
    "barchart.html?track=Front",
    "barchart.html?track=Divers",
    "barchart.html?track=Craft",
    "barchart.html?track=Data",
    "topspeaker.html"
];

function getCurrentPageIndex() {
    var currentLocation = window.location.toString();
    currentLocation = currentLocation.substring(currentLocation.lastIndexOf('/') + 1);
    return PAGES.indexOf(currentLocation);
}

if (getCurrentPageIndex() == -1) {
    window.location.href = 'html/' + PAGES[0];
}

if (SWITCHER_ENABLED) {
    setTimeout(function () {
        window.location.href = PAGES[(getCurrentPageIndex() + 1) % PAGES.length];
    }, SWITCH_DELAY);
}
