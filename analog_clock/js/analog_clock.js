// JavaScript source code
// setInterval function with "0" in delay makes 
// the clock works instantly without waiting for offset 

// this function takes care of the seconds by assigning 6 degrees per 1 second => 60 seconds = 1 min = 360 degrees
window.onload = setInterval(function () {
    var seconds = new Date().getSeconds();
    var sdegree = seconds * 6;
    var srotate = "rotate(" + sdegree + "deg)"; //using css "rotate" attribute to make the rotating animation

    document.getElementById("sec").style.transform = srotate; // original
    document.getElementById("sec").style.webkitTranform = srotate; // chrome
    document.getElementById("sec").style.mozTransform = srotate; // mozilla
    document.getElementById("sec").style.msTransform = srotate; // IE9+
    document.getElementById("sec").style.oTransform = srotate; // opera and safari

}, 0);

// this function takes care of the hour using math to come up with the degree angle to rotate
window.onload = setInterval(function () {
    var hours = new Date().getHours();
    var mins = new Date().getMinutes();
    var hdegree = hours * 30 + (mins / 2);
    var hrotate = "rotate(" + hdegree + "deg)";

    document.getElementById("hour").style.transform = hrotate;
    document.getElementById("hour").style.webkitTranform = hrotate;
    document.getElementById("hour").style.mozTransform = hrotate;
    document.getElementById("hour").style.msTransform = hrotate;
    document.getElementById("hour").style.oTransform = hrotate;

}, 0);

// this function takes care of the minute in the same way as the second function, with 60 mins = 1 hour = 360 degrees
window.onload = setInterval(function () {
    var mins = new Date().getMinutes();
    var mdegree = mins * 6;
    var mrotate = "rotate(" + mdegree + "deg)";

    document.getElementById("min").style.transform = mrotate;
    document.getElementById("min").style.webkitTranform = mrotate;
    document.getElementById("min").style.mozTransform = mrotate;
    document.getElementById("min").style.msTransform = mrotate;
    document.getElementById("min").style.oTransform = mrotate;

}, 0);