define([
    "text!tmpl/game.html",
], function(tmplGame) {

    var Game = function(id) {
        this.id = id;
    };

    _.extend(Game.prototype, {
        start: function() {
            console.log("Starting game", this.id);

            if (!this.initSocket()) {
                alert("No websockets!");
                return;
            }

            $("#main").html(_.template(tmplGame)({ gameID: this.id }));
            this.canvas = $("#game-" + this.id).get(0);

            if (!this.initContext()) {
                alert("No WebGL!");
                return;
            }

            this.render();
        },

        initSocket: function() {
            var socket;
            if ("WebSocket" in window) {
                socket = window.WebSocket;
            } else if ("MozWebSocket" in window) {
                socket = window.MozWebSocket;
            }

            if (!socket) {
                return false;
            }

            this.socket = new socket("ws://gambit.brendonh.org:4567");
            this.socket.onopen = _.bind(this.onConnect, this);
            
            return true;
        },


        initContext: function() {
            try {
                var gl = this.canvas.getContext("webgl")
                    || this.canvas.getContext("experimental-webgl");
            } catch(e) {
                console.log("Oh noes", e);
            }

            if (!gl) {
                return false;
            }

            gl.clearColor(0.0, 0.0, 0.0, 1.0);
            gl.enable(gl.DEPTH_TEST);
            gl.depthFunc(gl.LEQUAL);
            this.gl = gl;
            return true;
        },

        onConnect: function() {
            console.log("Connected!");
            this.socket.send("Hello");
        },

        render: function() {
            var gl = this.gl;
            gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
        }
    });

    return Game;
});
