var option1,option2,option3,option4;
var question, score

function setup() {
  createCanvas(windowWidth-10,windowHeight-10);
  option1= createSprite(windowWidth/2-450,windowHeight/2+92,235,20)
  option1.visible = false
  option2= createSprite(windowWidth/2-150,windowHeight/2+92,235,20)
  option2.visible = false
  option3= createSprite(windowWidth/2+150,windowHeight/2+92,235,20)
  option3.visible = false
  option4= createSprite(windowWidth/2+450,windowHeight/2+92,235,20)
  option4.visible = false

  question = "1"
  score = 0
}

function draw() {
  background("#f0ce73")
  drawSprites();



  if(question === "1"){
    createNewText("Name the device which is used to measure the hotness or coldness of an object.", "Manometer", "Barometer", "Picometer", "Thermometer")
    
    if(mousePressedOver(option4)){
      score++
      console.log(score)
      question = "2"
    }


  }
  if(question === "2"){
    createNewText("Which one is filled in the bulb of a thermometer?", "Mercury", "Lead", "Silver", "Copper")
    if(mousePressedOver(option1)){
      score++
      console.log(score)
      question = "3"
    }
  }


  if(question === "3"){
    createNewText("What is the normal temperature of a healthy person?", "37°F", "37°C", "37K", "None of these")

    if(mousePressedOver(option2)){
      score++
      console.log(score)
      question = "4"
    }

  }
  if(question === "4"){
    createNewText("Heat always flows from", "cold to hot", "in both directions", "from hot to cold", "heat never flows in either way")

    if(mousePressedOver(option3)){
      score++
      console.log(score)
      question = "5"
    }
  }
  
  if(question === "5"){
    createNewText("Conduction is the transfer of heat in?", "liquids", "solids", "gases", "All of the above")

    if(mousePressedOver(option2)){
      score++
      console.log(score)
      question = "6"
    }
  }
  if(question === "6"){
    createNewText("Heat from the sun reaches to us by", "Radiation", "Conduction", "Convection", "All of these")

    if(mousePressedOver(option1)){
      score++
      console.log(score)
      question = "7"
    }
  }
  if(question === "7"){
    createNewText("A marble tile in winter would feel colder than a wooden tile because", "It reflects more heat", "better conductor of heat", "It is polished", "It is a poor conductor of heat")

    if(mousePressedOver(option2)){
      score++
      console.log(score)
      question = "8"
    }
  }
  if(question === "8"){
    createNewText("Paheli found her’s to be 98.6°F and Boojho recorded 37°C.\nWhich of the following statement is true","Both have fever", "Paheli has higher temp.", "Both have same temp.", "None of these")

    if(mousePressedOver(option3)){
      score++
      console.log(score)
      question = "9"
    }
  }
  if(question === "9"){
    createNewText("Temperature is the measure of ………………. of an object", "hotness", "coldness", "both of the above","none of these")

    if(mousePressedOver(option1)){
      score++
      console.log(score)
      question = "10"
    }
  }
  if(question === "10"){
    createNewText("The thermometer used to measure human body temperature is called ………………. thermometer.", "Laboratory", "thermocouple", "Clinical thermometers","all of the above")

    if(mousePressedOver(option3)){
      score++
      console.log(score)
      question = "end"
    }
  }
  if(question === "end" && score === 10){
    createNewText("Conrats!! You have completed the quiz.\n You have scored an amazing 10/10\nKeep going on like this","","","","")
  }
}

function createNewText(questione,option1,option2,option3,option4){
  fill("black")
  stroke(4)
  textSize(22)
  text("Question "+question+": "+questione, windowWidth/2-450,windowHeight/2)

  fill("black")
  stroke(4)
  textSize(22)
  text("(a) "+option1, windowWidth/2-550,windowHeight/2+100)

  fill("black")
  stroke(4)
  textSize(22)
  text("(b) "+option2, windowWidth/2-250,windowHeight/2+100)

  fill("black")
  stroke(4)
  textSize(22)
  text("(c) "+option3, windowWidth/2+50,windowHeight/2+100)

  fill("black")
  stroke(4)
  textSize(22)
  text("(d) "+option4, windowWidth/2+350,windowHeight/2+100)

}