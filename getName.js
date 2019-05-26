var firstName = document.querySelector('.vm-PlayerProfileCardComponent-firstName').innerText.toLowerCase();
var lastName = document.querySelector('.vm-PlayerProfileCardComponent-lastName').innerText.toLowerCase();
var rawClub = document.querySelector('.vm-PlayerProfileCardComponent-team').innerText.toLowerCase();

var club = "raw";

if (rawClub === "Adelaide"){
    club = "adelaide-crows";
}

if (rawClub === "Brisbane"){
    club = "brisbane-lions";
}

if (rawClub === "Carlton"){
    club = "carlton-blues";
}

if (rawClub === "Collingwood"){
    club = "collingwood-magpies";
}

if (rawClub === "Essendon"){
    club = "essendon-bombers";
}

if (rawClub === "Fremantle"){
    club = "fremantle-dockers";
}

if (rawClub === "Geelong"){
    club = "geelong-cats";
}

if (rawClub === "Gold Coast"){
    club = "gold-coast-suns";
}

if (rawClub === "GWS Giants"){
    club = "greater-western-sydney-giants";
}

if (rawClub === "Hawthorn"){
    club = "hawthorn-hawks";
}

if (rawClub === "Melbourne"){
    club = "melbourne-demons";
}

if (rawClub === "North Melbourne"){
    club = "kangaroos";
}

if (rawClub === "Port Adelaide"){
    club = "port-adelaide-power";
}

if (rawClub === "Richmond"){
    club = "richmond-tigers";
}

if (rawClub === "St Kilda"){
    club = "st-kilda-saints";
}

if (rawClub === "Sydney"){
    club = "sydney-swans";
}

if (rawClub === "West Coast"){
    club = "west-coast-eagles";
}

if (rawClub === "Western Bulldogs"){
    club = "western-bulldogs";
}

[firstName, lastName, club, rawClub];

