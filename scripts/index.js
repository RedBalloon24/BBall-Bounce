window.onload = function() {
    var game = new Game(1);     
    game.start();


    document.getElementById("one-player-button").onclick = function () {
        game.moveOne();
    };
    
    document.getElementById("two-players-button").onclick = function () {
        game.moveTwo();

    };

};
