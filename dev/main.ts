/// <reference path="car.ts"/>
/// <reference path="rock.ts"/>

class Game {

    private car: Car;
    private rock: Rock;
    private gamerunning: boolean = true;

    constructor() {
        this.car = new Car(this);
        this.rock = new Rock(this);

        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop() {
        if (this.gamerunning == true) {
            this.car.move(this.rock);
            requestAnimationFrame(() => this.gameLoop());
        }

    }

    public endGame() {
        this.gamerunning = false;
        document.getElementById("score").innerHTML = "Score : 0";
    }
    public showScore() {
        this.gamerunning = false;

    }
}


// load
window.addEventListener("load", function () {
    new Game();
});