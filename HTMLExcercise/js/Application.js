function getFormattedDateTime() {
    var months = ["January",
        "Feburary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"]
    var dt = new Date();
    var da = dt.getDate();
    var mth = dt.getMonth();
    var yr = dt.getFullYear();
    var hr = dt.getHours();
    var mi = dt.getMinutes();
    var se = dt.getSeconds();
    return da + " " + months[mth] + "," + yr + " " + hr + ":" + mi + ":" + se;
}
function getDateTime() {
    return new Date();
}
var myVar = setInterval(updateTime, 1000);
function updateTime() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("id1").innerHTML = t;
}
function myStopFunction() {
    clearInterval(myVar);
}

function replaceContentOfId(id, content) {
    document.getElementById(id).innerHTML = content;
}

function replaceContent(id, content) {
    document.getElementById(id).innerHTML = content;
}

function writeAllValues() {
    document.write(getDateTime());
    document.write(getFormattedDateTime());
    replaceContentOfId("photoId", "new content");
}

function getSimpleIntrest(){
    var amt = prompt("enter amount");
    var yr = prompt("enter n of years");
    var rate = prompt("enter rate");
    var si = (amt * rate * yr) / 100 ;
    document.getElementById("id1").innerHTML = si;
}


function setColor(){
    document.getElementById("divid").style.backgroundColor="red";

}

function resetDefault(){
    document.getElementById("divid").style.backgroundColor="white";
}
