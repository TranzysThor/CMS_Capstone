function swap_to_photo() {
    let mtkh = document.getElementById("adani");
    mtkh.outerHTML = '<img id="adani_img" src="images/adani.jpg" alt="гамма-радиометр РУГ-91 «АДАНИ»" height="150" width="100" onclick="swap_to_text()">';
}

function swap_to_text() {
    let mtkh_img = document.getElementById("adani_img");
    mtkh_img.outerHTML = '<span id="adani" onclick="swap_to_photo()">гамма-радиометр РУГ-91 «АДАНИ»</span>';
}