require([
    'main/game'
], function(Game) {
    console.log("Ready");
    new Game("demo").start();
});

