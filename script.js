var body = document.getElementsByTagName("body")[0];
//var gen = document.getElementById("gen");
var gen = document.getElementById("gen");
gen.addEventListener("click", genererHaiku, false);

var v1 = document.getElementById("1");
var v2 = document.getElementById("2");
var v3 = document.getElementById("3");

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");

function genererHaiku() {
    let vers1 = Math.floor(Math.random() * haikus.length);
    let vers2 = Math.floor(Math.random() * haikus.length);
    let vers3 = Math.floor(Math.random() * haikus.length);
    v1.textContent = haikus[vers1]["1"];
    v2.textContent = haikus[vers2]["2"];
    v3.textContent = haikus[vers3]["3"];
    img1.setAttribute("src", "img/" + (vers1 + 1) + "-1.png");
    img2.setAttribute("src", "img/" + (vers2 + 1) + "-2.png");
    img3.setAttribute("src", "img/" + (vers3 + 1) + "-3.png");
    /*v1.appendChild(document.createTextNode(haikus[vers1-1]["1"]));
    v2.appendChild(document.createTextNode(haikus[vers2-1]["2"]));
    v3.appendChild(document.createTextNode(haikus[vers3-1]["3"]));*/
}

/*function telechargerImage() {
    if (img1.getAttribute('src') != "" && img2.getAttribute('src') != "" && img3.getAttribute('src') != "") {
        var in1 = new SimpleImage(img1.getAttribute('src'));
        var in2 = new SimpleImage(img2.getAttribute('src'));
        var in3 = new SimpleImage(img3.getAttribute('src'));
        var out = new SimpleImage(in1.getWidth(), in1.getHeight());

        for (let x = 0; x < out.getWidth; x++) {
            for (y = 0; y = out.getHeight; y++) {
                out.setPixel(x, y, in1.getPixel(x, y));
                out.setPixel(x, y, in2.getPixel(x, y));
                out.setPixel(x, y, in3.getPixel(x, y));
            }
        }
    }
}*/