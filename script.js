let susenky = 0;
let zaKlik = 1;
let zaSekundu = 0;
let cenaBabicky = 10;
let cenaTovarny = 50;

const skore = document.getElementById("skore");
const hlaska = document.getElementById("hlaska");
const zaSekInfo = document.getElementById("zaSekundu");
const zaKlikInfo = document.getElementById("zaKlikInfo");
const cenaBabickyEl = document.getElementById("cenaBabicky");
const cenaTovarnyEl = document.getElementById("cenaTovarny");
const susenkaBtn = document.getElementById("susenka");

function vykresli() {
    skore.textContent = susenky;
    zaSekInfo.textContent = zaSekundu;
    zaKlikInfo.textContent = zaKlik;
    cenaBabickyEl.textContent = cenaBabicky;
    cenaTovarnyEl.textContent = cenaTovarny;
    document.title = susenky + " 🍪";
}

function zprava(text) {
    hlaska.textContent = text;
    setTimeout(() => { hlaska.textContent = ""; }, 2000);
}

susenkaBtn.onclick = function(e) {
    susenky += zaKlik;
    vykresli();

    const plus = document.createElement("span");
    plus.className = "plusJedna";
    plus.textContent = "+" + zaKlik;
    plus.style.left = (Math.random() * 150 + 25) + "px";
    plus.style.top = (Math.random() * 50 + 50) + "px";
    susenkaBtn.parentElement.appendChild(plus);
    setTimeout(() => plus.remove(), 1000);
};

document.getElementById("babicka").onclick = function() {
    if (susenky >= cenaBabicky) {
        susenky -= cenaBabicky;
        zaKlik++;
        cenaBabicky = Math.floor(cenaBabicky * 1.5);
        zprava("Babička přijata! 👵");
        vykresli();
    } else {
        zprava("Nemáš dost sušenek.");
    }
};

document.getElementById("tovarna").onclick = function() {
    if (susenky >= cenaTovarny) {
        susenky -= cenaTovarny;
        zaSekundu++;
        cenaTovarny = Math.floor(cenaTovarny * 1.5);
        zprava("Továrna postavena! 🏭");
        vykresli();
    } else {
        zprava("Na továrnu nemáš.");
    }
};

document.getElementById("zlata").onclick = function() {
    if (Math.random() < 0.5) {
        susenky += 100;
        zprava("✨ Štěstí! +100 sušenek");
    } else {
        susenky = Math.max(0, susenky - 100);
        zprava("💀 Smůla! -50 sušenek");
    }
    vykresli();
};

setInterval(() => {
    if (zaSekundu > 0) {
        susenky += zaSekundu;
        vykresli();
    }
}, 1000);

vykresli();


