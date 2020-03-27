var btn, mysvg;
var circle, circles;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function SetCaption(caption) {
    if (!btn) {
        btn = document.createElement("input");
        btn.type = "Button";
        document.getElementById("controlAddIn").appendChild(btn);
        btn.onclick = function () {
            Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('OnButtonClick', []);
        };
    };
    btn.value = caption;
}

function CreateSVG() {
    var svgContainer = document.getElementById("controlAddIn");

    var xmlns = "http://www.w3.org/2000/svg";
    var boxWidth = '100%';
    var boxHeight = '100%';

    var svgElem = document.createElementNS(xmlns, "svg");
    svgElem.setAttributeNS(null, "viewBox", "0 0 " + boxWidth + " " + boxHeight);
    svgElem.setAttributeNS(null, "width", boxWidth);
    svgElem.setAttributeNS(null, "height", boxHeight);
    svgElem.style.display = "block";

    var circle1 = document.createElementNS(xmlns, "circle");
    circle1.setAttributeNS(null, 'cx', 40);
    circle1.setAttributeNS(null, 'cy', 30);
    circle1.setAttributeNS(null, 'r', 10);
    svgElem.appendChild(circle1);

    var circle2 = document.createElementNS(xmlns, "circle");
    circle2.setAttributeNS(null, 'cx', 80);
    circle2.setAttributeNS(null, 'cy', 30);
    circle2.setAttributeNS(null, 'r', 10);
    svgElem.appendChild(circle2);

    var circle3 = document.createElementNS(xmlns, "circle");
    circle3.setAttributeNS(null, 'cx', 120);
    circle3.setAttributeNS(null, 'cy', 30);
    circle3.setAttributeNS(null, 'r', 10);
    svgElem.appendChild(circle3);


    svgContainer.appendChild(svgElem);

    circles = d3.selectAll("circle");
    circles.style("fill", getRandomColor());


    var mysvg = d3.select("svg");

    circle = mysvg.selectAll("circle").data([32, 57, 293, 10, 4, 63], function (d) { return d; });

    circle.enter().append("circle")
        .attr("cy", 60)
        .attr("cx", function (d, i) { return i * 100 + 30; })
        .attr("fill", getRandomColor())
        .attr("r", function (d) { return Math.sqrt(d); });
}


function DancingDots() {
    var svgContainer = document.getElementById("controlAddIn");
    circles = d3.selectAll("circle");
    circles.attr("cx", function () { return Math.random() * svgContainer.offsetWidth; });
    circles.attr("fill", function () { return getRandomColor(); })
}