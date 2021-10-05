function swap_to_photo() {
    let mtkh = document.getElementById("mtkh");
    mtkh.outerHTML = '<img id="mtkh_img" src="images/mtkh-90.jpg" alt="Тиратрон МТХ 90" height="100" width="100" onclick="swap_to_text()">';
}

function swap_to_text() {
    let mtkh_img = document.getElementById("mtkh_img");
    mtkh_img.outerHTML = '<span id="mtkh" onclick="swap_to_photo()">(тиратрон МТХ 90)</span>';
}