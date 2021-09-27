var photos = [];
var fileNames = [];
var image;
var imageList = [];
var openList ="<li class='photo'>";
var closeList ="</li>";
const captionList = ["Elsa", "Tara", "Coco", "Kimchi & Yaki", "Doris", "Ice", "Momo", "Bubble", "Sakura", "Alpha", "Mont", "Huno"];
var openCaption = "<div class='caption'>";
var closeCaption = "</div>";
var openDescTag = "<p class='description'>";
var closeDescTag = "</p>";
const descList = [
    "I am a dreamer.",
    "I love rabbit nuggets",
    "I am 8 years old.",
    "We are twins!",
    "I love running.",
    "I love playing balls.",
    "I am 2 months old.",
    "I am a cute boy!",
    "I love chicken.",
    "I love milk.",
    "I love treats.",
    "I wanna play."
];
const infoBoxText = [
    "Elsa’s about 3 years old, weights 55 pounds. She is the sweetest, best natured girl! She adjusted super quick to her new foster home.",
    "Tara's about 2 years old. She is at such a great age to be a wonderful adventure partner and then come home and chill with her family.",
    "Coco’s about 8 years old. She wants to explore and play after lunch. We are working on crate training. She seems super smart!",
    "Both of them are boys. They currently weighs 7 lbs at 2-3 months old. They will be small to medium sized dogs once grown.",
    "Doris is a 1-2 year old female, currently weighs around 17 lbs. She is such a fun and loving girl! She gets along with other dogs and kids.",
    "Ice’s about 2 years old. He is smart and gets along with other cats great. He loves batting around jingle balls.",
    "Momo’s only about 2 months old. He likes good company and would love to sleep in your bed and greet you with a meow in the morning.",
    "Bubble’s about 3 years old. He is a very sweet and affectionate boy. He is high energy and needs lots of exercise activity.",
    "Sakura is a sweet girl. Her favorite things include Inaba Churu treats, sparkle balls, and ball track toys.",
    "Alpha likes to spend his time exploring his surroundings. He also enjoys trying to steal your food.",
    "Mont is very playful. His favorite toy so far is the wand. While he's not cuddling or chasing toys, you might find him perched up on the cat tree enjoying the sights of the city.",
    "Huno seems to be the leader of the pack. While he has bursts of energy, He is pretty much laid back most of the time. He loves to nap throughout the day."
];

function showAlbum() {
    for(var i = 0; i < 12; i++){
        fileNames.push("pet" + (i + 1));
        photos.push("<img src='images/" + fileNames[i] + ".jpg'>");
        image = openList + photos[i] + openCaption + captionList[i] + openDescTag + descList[i] + closeDescTag + closeCaption + closeList;
        imageList.push(image);
    }
    document.getElementById("album").innerHTML = imageList.join('');
};

/* info box */

// var desc = document.querySelectorAll(".description");
// function infoBox(i) {
//     document.getElementById("infobox").style.visibility="visible";
//     document.getElementById("infobox-heading").innerHTML = captionList[i];
//     document.getElementById("infobox-text").innerHTML = infoBoxText[i];
//     document.getElementById("closebox").innerHTML = "Click Here to Close";
//     document.getElementById("closebox").addEventListener("click", closeInfoBox);
// }

function showInfoBox() {
    var desc = document.querySelectorAll(".description");
    for (let i = 0; i < desc.length; i++) {
        desc[i].addEventListener("click", function() {
            document.getElementById("infobox").style.visibility="visible";
            document.getElementById("infobox-heading").innerHTML = captionList[i];
            document.getElementById("infobox-text").innerHTML = infoBoxText[i];
            document.getElementById("closebox").innerHTML = "Click Here to Close";
            document.getElementById("closebox").addEventListener("click", closeInfoBox);
        });
    }
};

function closeInfoBox() {
    document.getElementById("infobox").style.visibility = "hidden";
}

showAlbum();
showInfoBox();