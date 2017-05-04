/// <reference path="gameobject.ts" />
/// <reference path="wheel.ts" />



class Car extends gameobject {

    private speed: number;
    private braking: boolean = false;
    private game: Game;

    wheel1: Wheel;
    wheel2: Wheel;

    constructor(supergame: Game) {
        super(document.getElementById("container"), "car", 0, 215);

        this.game = supergame;
        this.speed = 1.35;

        this.wheel1 = new Wheel(this.div, 20, 35);
        this.wheel2 = new Wheel(this.div, 105, 35);

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));

    }

    public move(rock: Rock): void {
        if (this.braking) {
            this.speed *= 0.9;
        }
        else {
            this.speed *= 1.02;
        }

        // hier kijken of de x waarde hoger is dan de x van de rots (335)
        //
        if (this.x > 363)//508 rots.- 145px car.
        {
            this.speed = 0;
            rock.move();

        }
        else if (this.speed < 1) {
            this.halted();
        }
        this.wheel1.turn(this.speed);
        this.wheel2.turn(this.speed);

        // de snelheid bij de x waarde optellen
        //
        this.x = this.x + this.speed;
        // tekenen
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    }


    private onKeyDown(event: KeyboardEvent): void {
        this.braking = true;
    }

    private halted(): void {
        let score = document.getElementById("score");
        score.innerHTML = "Score : " + this.x;
        setTimeout(() => {
            if (score.innerHTML == "Score : " + this.x) {
                this.game.showScore();
            }
        }, 100);


    }
}