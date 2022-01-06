class Game 
{

  constructor(){


    this.resetButton = createButton("reset");








  }

  
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }
  
 start(){
   console.log("we are in the start function ")
   player = new Player();
   playerCount = player.getCount();
   form =new Form ();
   form.display();


   
    player1 = createSprite(116,346,10,10);
    player1.addImage("player1",player1_img );
    player1.scale=0.3;
    
    player2 = createSprite(1072,346,10,10);
    player2.addImage("player2", player2_img);
    player2.scale=0.5;


    
   
    players[player1,player2];

    obstacleGroup = new Group();

    var obstaclesPositions = [
      { x: 188, y: 165 , image:obstacleImg },
      { x: 784, y: 324, image: obstacleImg },
    ]
 
    this.addSprites(
      obstacle,
      obstaclesPosition.length,
      obstacleImg,
      0.04,
      
    );
 
 
 
 
 
 
  }

  



    
    
 
    
    
    
    
    
 
  
 

 handleElements(){

form.hide();
this.resetButton.position(586,51);

 }
    
 
play()
{
  console.log("we are in the play function ");

  this.handleElements();
  
  Player.getPlayersInfo();
  if(allPlayers !==undefined ){

   
    var index=0;

    if(keyWentDown("space")){
      bullet = createSprite(displayWidth-1150,player.y-30,20,10)
      bullet.velocityX = 20
      bullet.addImage(bulletImg);
      
      bulletGroup.add(bullet)
      player.depth = bullet.depth
      player.depth = player.depth+2
    
      bullets = bullets-1
     
    }
    bulletGroup = new Group();

    for(var plr in allPlayers){

      index=index+1;
      var x = allPlayers[plr].positionX;
      var y = height - allPlayers[plr].positionY;
        
        
      players[index - 1].position.x = x;
      players[index - 1].position.y = y;
       
    }
    this.handlePlayerControls();
    this.handleResetButton();
    drawSprites();
  }
}

handlePlayerControls(){

  if (keyIsDown(UP_ARROW)) {
    //this.playerMoving = true;
    player.positionY += 10;
    player.update();
  }

  if (keyIsDown(DOWN_ARROW)) {
    //this.playerMoving = true;
    player.positionY -= 10;
    player.update();
  }
}
handleResetButton(){

  this.resetButton.mousePressed(() => {
    database.ref("/").set({
      playerCount: 0,
      gameState: 0,
      players: {}
      
    });
    window.location.reload();
  });
}












}
  