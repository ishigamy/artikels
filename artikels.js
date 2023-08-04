"use strict";

// Verzamel de artikels
const artikels = verzamelArtikels(
    "Voer de naam van het artikel in (type stop om te eindigen):",
    "Voer de aankoopprijs in:",
    "Voer de verkoopprijs in:"
);
// Vraag de gebruiker om een woord
const woord = prompt("Voer een woord in:");
// Filter de artikels op naam en print ze
filterArtikelsOpNaam(artikels, woord);
// Vraag de gebruiker om twee getallen
const getal1 = Number(prompt("Voer het eerste getal in:"));
const getal2 = Number(prompt("Voer het tweede getal in:"));
// Filter de artikels op prijs en print ze
filterArtikelsOpPrijs(artikels, getal1, getal2);
// Bereken en print de gemiddelde verkoopprijs
berekenGemiddeldePrijs(artikels);





// Functie om artikels te verzamelen
function verzamelArtikels(naamPrompt, aankoopprijsPrompt, verkoopprijsPrompt) {
    const artikels = [];
    let naam = prompt(naamPrompt);
    while (naam !== 'stop') {
        artikels.push({
            naam,
            aankoopprijs: Number(prompt(aankoopprijsPrompt)),
            verkoopprijs: Number(prompt(verkoopprijsPrompt))
        });
        naam = prompt(naamPrompt);
    }
    return artikels;
}

// Functie om artikels te filteren op naam
function filterArtikelsOpNaam(artikels, woord) {
        .filter(artikel => artikel.naam.includes(woord))
        .forEach(artikel => console.log(artikel.naam));
}

// Functie om artikels te filteren op prijs
function filterArtikelsOpPrijs(artikels, getal1, getal2) {
    getal2 < getal1 ?
        console.log("Het tweede getal is kleiner dan het eerste getal") :
        artikels
            .filter(artikel => artikel.verkoopprijs >= getal1 && artikel.verkoopprijs <= getal2)
            .forEach(artikel => console.log(`Artikel ${artikel.naam} kost ${artikel.verkoopprijs}`));
}

// Functie om de gemiddelde verkoopprijs te berekenen
function berekenGemiddeldePrijs(artikels) {
    console.log(`De gemiddelde verkoopprijs is ${artikels.reduce((sum, artikel) => sum + artikel.verkoopprijs, 0) / artikels.length}`);
}
