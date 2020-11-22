var readLineSync=require("readline-sync");

//Welcome user
var userName= readLineSync.question("Please enter your name: ");
console.log("Welcome "+userName+" to DO YOU KNOW "+ "\""+"\u001b[31mPreethi\u001b[0m"+"\"" +" quiz!");

//High Score data structure
var topScorers=[{
  name: "Sasikala",
  score: 4
},
{
  name: "Pradhyun",
  score: 4
}];

//Q&A array
var questions=[
  {
    question: "Name the hospital where Preethi was born: ",
    answer: "Ganga"
  },
  {
    question: "Name Preethi's maternal grandmother: ",
    answer: "Jayalakshmi"
  },
  {
    question: "What is Preethi's favourite colour? ",
    answer: "Blue"
  },
  {
    question: "What is Preethi's favourite movie? ",
    answer: "Inimey Ippadithan"
  },
  {
    question: "Who is Preethi's \"Udhirathin Vidhai\" ? ",
    answer: "Pradhyun"
  }

]

//Leaderboard
var textBlock=[];
function leaderBoard(array){
  for (var j=0; j<array.length; j++){
    textBlock.push(`${j+1}. ${array[j].name}: ${array[j].score}`);
    //console.log(textBlock);
  }
  return textBlock.join("\n");
}

//Quiz
var score=0;
for (var i=0; i<questions.length; i++){
var answer=readLineSync.question(questions[i].question);
  if (answer.toUpperCase()===questions[i].answer.toUpperCase()){
    console.log("You are right!");
    console.log("-----------------------");
    score=score+1;
  }else{
    console.log("Better luck next time!");
    console.log("-----------------------");
  }  
}
console.log("Your total score is: ",score);

//Update topScorers
if (score===topScorers[0].score){
  topScorers.push({
    name: userName,
    score: score
  });
} else if (score > topScorers[0].score){
  topScorers =[];
  topScorers.push({
    name: userName,
    score: score
  });
}
console.log(`The top scorer/s is/are:
${leaderBoard(topScorers)}
Please share a screenshot of your score to update our database.`);