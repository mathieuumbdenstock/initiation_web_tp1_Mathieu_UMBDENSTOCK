

function OnOffAmpoule(){
    let img = document.getElementById("ampoule");
    let text = img.src;

    if (text.search("pic_bulboff.gif") !== -1) {
        img.src = "images/pic_bulbon.gif";
    } else {
        img.src = "images/pic_bulboff.gif";
    }
}