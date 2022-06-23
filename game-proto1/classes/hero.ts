import * as PIXI from 'pixi.js'

export class Hero extends PIXI.Sprite {
        xspeed = 0
        yspeed = 0



        constructor(texture:PIXI.Texture) {
            super(texture);
            this.scale.set(1)
            // this.interactive = true

            window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
            window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
            this.x = 0
            this.y = 0
        }

        walk() {
            this.x += this.xspeed
            this.y += this.yspeed
            if (this.x < -56) {
                this.x = 800
            }
            if (this.x > 800) {
                this.x = -56
            }
            if (this.y < -88) {
                this.y = 448
            }
            if (this.y > 448) {
                this.y = -88
            }
        }



        onKeyDown(e: KeyboardEvent): void {
            switch (e.key.toUpperCase()) {
        case "A":
        case "ARROWLEFT":
            this.xspeed = -4
            break
        case "D":
        case "ARROWRIGHT":
            this.xspeed = 4
            break
        case "W":
        case "ARROWUP":
            this.yspeed = -4
            break
        case "S":
        case "ARROWDOWN":
            this.yspeed = 4
            break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
            switch(e.key.toUpperCase()
    )
        {
        case
            "A"
        :
        case
            "D"
        :
        case
            "ARROWLEFT"
        :
        case
            "ARROWRIGHT"
        :
            this.xspeed = 0
            break
        case
            "W"
        :
        case
            "S"
        :
        case
            "ARROWUP"
        :
        case
            "ARROWDOWN"
        :
            this.yspeed = 0
            break
        }


    }
    }