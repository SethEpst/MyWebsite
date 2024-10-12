$(init);

var cardsInDeck = new Array();
var numberOfCardsInDeck;
$('#deal').click(function () {
    dealCard(randomCard());
});

function init() {
    $('.drop').droppable({
        drop: handleDropEvent
    });
}



numberOfCardsInDeck = 52;
cardsInDeck[0] = "ace_of_clubs";
cardsInDeck[1] = "2_of_clubs";
cardsInDeck[2] = "3_of_clubs";
cardsInDeck[3] = "4_of_clubs";
cardsInDeck[4] = "5_of_clubs";
cardsInDeck[5] = "6_of_clubs";
cardsInDeck[6] = "7_of_clubs";
cardsInDeck[7] = "8_of_clubs";
cardsInDeck[8] = "9_of_clubs";
cardsInDeck[9] = "10_of_clubs";
cardsInDeck[10] = "jack_of_clubs2";
cardsInDeck[11] = "queen_of_clubs2";
cardsInDeck[12] = "king_of_clubs2";
cardsInDeck[13] = "ace_of_diamonds";
cardsInDeck[14] = "2_of_diamonds";
cardsInDeck[15] = "3_of_diamonds";
cardsInDeck[16] = "4_of_diamonds";
cardsInDeck[17] = "5_of_diamonds";
cardsInDeck[18] = "6_of_diamonds";
cardsInDeck[19] = "7_of_diamonds";
cardsInDeck[20] = "8_of_diamonds";
cardsInDeck[21] = "9_of_diamonds";
cardsInDeck[22] = "10_of_diamonds";
cardsInDeck[23] = "jack_of_diamonds2";
cardsInDeck[24] = "queen_of_diamonds2";
cardsInDeck[25] = "king_of_diamonds2";
cardsInDeck[26] = "ace_of_hearts";
cardsInDeck[27] = "2_of_hearts";
cardsInDeck[28] = "3_of_hearts";
cardsInDeck[29] = "4_of_hearts";
cardsInDeck[30] = "5_of_hearts";
cardsInDeck[31] = "6_of_hearts";
cardsInDeck[32] = "7_of_hearts";
cardsInDeck[33] = "8_of_hearts";
cardsInDeck[34] = "9_of_hearts";
cardsInDeck[35] = "10_of_hearts";
cardsInDeck[36] = "jack_of_hearts2";
cardsInDeck[37] = "queen_of_hearts2";
cardsInDeck[38] = "king_of_hearts2";
cardsInDeck[39] = "ace_of_spades";
cardsInDeck[40] = "2_of_spades";
cardsInDeck[41] = "3_of_spades";
cardsInDeck[42] = "4_of_spades";
cardsInDeck[43] = "5_of_spades";
cardsInDeck[44] = "6_of_spades";
cardsInDeck[45] = "7_of_spades";
cardsInDeck[46] = "8_of_spades";
cardsInDeck[47] = "9_of_spades";
cardsInDeck[48] = "10_of_spades";
cardsInDeck[49] = "jack_of_spades2";
cardsInDeck[50] = "queen_of_spades2";
cardsInDeck[51] = "king_of_spades2";

function dealCard(i) {
    if (numberOfCardsInDeck == 0) {
        alert("You have all 52 cards!");
        return false;
    }

    var img = document.createElement("img");
    img.src = "images/cards/" + cardsInDeck[i]
        + ".png";
    img.width = 100;
    img.height = 150;
    img.id = cardsInDeck[i];


    $('#cardsDiv').append(img);
    $('#' + cardsInDeck[i]).draggable();
    removeCard(i);
}
function randomCard() {
    return Math.floor(Math.random() * numberOfCardsInDeck);
}
function removeCard(c) {
    for (j = c; j <= numberOfCardsInDeck - 2; j++) {
        cardsInDeck[j] = cardsInDeck[j + 1];
    }
    numberOfCardsInDeck--;
}
function handleDropEvent(event, ui) {
    var draggable = ui.draggable;
    $('#drop').html('The card with ID "' + draggable.attr('id') + '" was discarded here!');
    $('#' + draggable.attr('id')).remove();
}