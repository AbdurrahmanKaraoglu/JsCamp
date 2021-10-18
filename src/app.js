console.log("Merhaba Kodlama.io");

let dolarDun = 9.20
// dolarDun = "Ankara"
let dolarBugun = 9.30

{
    let dolarDun = 9.10
}

console.log(dolarDun);

let konutKredileri = [
    "Konut Kredisi",
    "Emlak Konut Kredisi",
    "Kamu Konut Kredisi",[
        "a","b",3,4,5
    ]
]

console.log(konutKredileri);

// let users = getUsersFromApi()
console.log("<ul>");
for (let i = 0; i < konutKredileri.length; i++) {
    const element = konutKredileri[i];
    console.log(element);
}

console.log("</ul>");


