var SWITCH_DELAY = 10000;

var PAGES = [
    "barchart.html?track=Front",
    "barchart.html?track=Divers",
    "barchart.html?track=Craft",
    "barchart.html?track=Data",
    "barchart.html?track=Agile",
    "topspeaker.html"
];

function getCurrentPageIndex() {
    var currentLocation = window.location.toString();
    currentLocation = currentLocation.substring(currentLocation.lastIndexOf('/') + 1);
    var currentPageIndex = PAGES.indexOf(currentLocation);
    return currentPageIndex;
}

if (getCurrentPageIndex() == -1) {
    window.location.href = 'html/' + PAGES[0];
}

setTimeout(function () {
    window.location.href = PAGES[(getCurrentPageIndex() + 1) % PAGES.length];
}, SWITCH_DELAY);
