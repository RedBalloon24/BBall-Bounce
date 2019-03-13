window.onload = function() {
    var game = new Game(1);     
    game.start();


    document.getElementById("one-player-button").onclick = function () {
        game.drawOne(1);   
    };
    
    document.getElementById("two-players-button").onclick = function () {
        game.drawTwo(1);
        game.drawOne(0);
    };

};
