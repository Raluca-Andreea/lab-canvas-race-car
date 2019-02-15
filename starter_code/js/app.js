function GameBoard () {

  this.name = "Race car"
  this.canvasDom = undefined
  this.ctx = undefined
  this.w = undefined
  this.h = undefined
  this.posX = 172.5
  this.dashedLineY = 800
  
}

GameBoard.prototype.init = function(id) {

  this.canvasDom = document.getElementById(id)
  this.ctx = this.canvasDom.getContext("2d")

  this.canvasDom.setAttribute("width", 400)
  this.canvasDom.setAttribute("height", 800)

  this.w = this.canvasDom.getAttribute("width")
  this.h = this.canvasDom.getAttribute("height")

  
  this._setListeners()
  this.highwayStyle()
  this.addCarImage("./images/car.png")
  this._update()
  this.Obstacles = [new Obstacle(this)]

}

GameBoard.prototype.highwayStyle = function () { 

  this.ctx.fillStyle = "#1a8c77"
  this.ctx.fillRect(0, 0, this.w, this.h)

  this.ctx.fillStyle = "#b0b2b2"
  this.ctx.fillRect(25, 0, 350, 800)

  this.ctx.fillStyle = "#f2f2f2"
  this.ctx.fillRect(35, 0, 10, 800)

  this.ctx.fillStyle = "#f2f2f2"
  this.ctx.fillRect(355, 0, 10, 800)

  this.ctx.fillStyle = "#f2f2f2"
  this.ctx.fillRect(355, 0, 10, 800)

  this.ctx.beginPath()
  this.ctx.lineWidth = 4
  this.ctx.strokeStyle = "#f2f2f2"
  this.ctx.setLineDash([50, 10])
  this.ctx.moveTo(this.w / 2 , this.dashedLineY)
  this.dashedLineY ++
  this.ctx.lineTo(this.w / 2, 0)
  this.ctx.stroke()
 
}


GameBoard.prototype._setListeners = function () {

  window.onkeydown = function(e){

    switch(e.keyCode) {
        case 39:
            if(this.posX + 55 <= this.w - 35)
            this._moveRight()
            break;
        case 37:
            if(this.posX  >= 35)
            this._moveLeft()
            break;
    }
}.bind(this)

}



GameBoard.prototype.addCarImage = function (url) {

  var img = new Image(); 
  img.src = url; 
  img.onload = function () {
    this.ctx.drawImage(img, this.posX,  this.h - 100, 55, 90)
  }.bind(this)
 

}

GameBoard.prototype._moveRight = function (){

  this.posX += 10;
  this._update()

}

GameBoard.prototype._moveLeft = function (){

  this.posX -= 10;
  this._update()

}



GameBoard.prototype._update = function () {

  
  setInterval(function() {

    this.ctx.clearRect(0, 0, this.w, this.h)
    this.highwayStyle()
    this.addCarImage("./images/car.png")

  }.bind(this), 300)
  
}




function Obstacle(game){
  this.game = game;
}








