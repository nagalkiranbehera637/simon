
$(document).ready(function(){
    var buttonsColor=["red","blue","green","yellow"];
    var patternSequnce=[];
    var userColorPattern=[];
    var started=false;
    var level=0;
    $(document).keydown(function(){
       if(!started){
        level=0;
        patternSequnce=[];
        nextSequence();
        started=true;
       }
    });
   function nextSequence(){
        userColorPattern = [];
        $("h1").text("Level "+(++level));
        let randomNumber=Math.floor(Math.random()*4);
        animation(buttonsColor[randomNumber]);
        patternSequnce.push(buttonsColor[randomNumber]);
    
        makeSound(buttonsColor[randomNumber]);
        console.log(patternSequnce);
   }
   $(".btn").click(function(){
    makeSound(this["id"]);
    animation(this["id"]);
    userColorPattern.push(this["id"]);
    console.log(userColorPattern);
    checkAnswer(userColorPattern.length-1);
    // check(this["id"]);
   });
   function checkAnswer(currentLevel){
    if (patternSequnce[currentLevel] === userColorPattern[currentLevel]) {

      console.log("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userColorPattern.length === patternSequnce.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {
         $(".container").addClass("game-over");
            setTimeout(function(){
                 $(".container").removeClass("game-over");
            },100)
            started=false;
            $("h1").text("Press A Key to Start");
      console.log("wrong");

    }
   }
  
//    for(var i=0;i<parttenSequnce.length;i++){
//     function check(id){
//         if(id!==parttenSequnce[i]){
//             $(".container").addClass("game-over");
//             setTimeout(function(){
//                  $(".container").removeClass("game-over");
//             },100)
//         }
//     }
//    }
   
 function animation(id){
    $("#"+id).addClass("pressed");
    setTimeout(function(){
         $("#"+id).removeClass("pressed");
    },100);
   }
   function makeSound(className){
     switch (className){
            case "red":
                var red=new Audio("sounds/red.mp3");
                red.play();
                break;
            case "blue":
                var blue=new Audio("sounds/blue.mp3");
                blue.play();
                break;
            case "green":
                var green=new Audio("sounds/green.mp3");
                green.play();
                break;
            case "yellow":
                var yellow=new Audio("sounds/yellow.mp3");
                yellow.play();
                break;
        }
   }
});