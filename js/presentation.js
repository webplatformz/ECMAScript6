var zuehlkeParralaxOffset = 200;

Reveal.addEventListener('ready', function (event) {
    if (isPrintingMode()) {
        drawCharts();
        drawZuehlkeBgForPrinting();
        drawHeaderForPrinting();
    }
});

var isPrintingMode = function () {
    return window.location.search.match(/print-pdf/gi);
};

var drawZuehlkeBgForPrinting = function () {
    var zuehlkeBgSlides = document.querySelectorAll('[data-state]');
    for (var i = 0; i < zuehlkeBgSlides.length; i++) {
        zuehlkeBgSlides[i].className = zuehlkeBgSlides[i].className + " " + zuehlkeBgSlides[i].getAttribute("data-state");
    }
};

var drawHeaderForPrinting = function () {

    var zuehlkeSlidesWithTitle = document.querySelectorAll('[data-title]');
    for (var i = 0; i < zuehlkeSlidesWithTitle.length; i++) {
        console.log('print header...' + zuehlkeSlidesWithTitle.length);
        var slideTitle = zuehlkeSlidesWithTitle[i].getAttribute("data-title");
        var printHeader = document.getElementById("zuehlke-header").cloneNode(true);
        printHeader.setAttribute('id', '');
        printHeader.setAttribute('class', 'zuehlke-header print');
        printHeader.innerHTML = zuehlkeSlidesWithTitle[i].getAttribute("data-title");
        zuehlkeSlidesWithTitle[i].insertBefore(printHeader, zuehlkeSlidesWithTitle[i].firstChild);
    }
};