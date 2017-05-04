class Rock extends gameobject {

    private speedX: number;
    private speedY: number;
    private ismoving:Boolean = false;
    private game:Game;

    constructor(supergame:Game) {
        super(document.getElementById("container"), "rock", 508, 208);
        this.speedX = 0;
        this.speedY = 0;
        this.game = supergame;
    }


    public move(): void {

        if (this.ismoving ==false) {
            this.ismoving = true;
            this.speedX = 1;
            this.speedY = 3;
            console.log("speed rock on");
            this.x = this.x + 20;
            this.div.style.transform = "translate(" + this.x  + "px," + this.y + "px)";
        }

        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;
       
       if(this.y == 538){
         this.end();
       }
        // speed optellen zo lang we niet de bodem raken
        // speed wordt hoger dan 0 zodra de auto de rots raakt

        //teken de div op de juiste positie
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    }

    public end():void{
           this.speedX = 0
           this.speedY = 0
           this.game.endGame();
    }
}