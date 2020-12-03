var readlinesync=require("readline-sync");
const chalk=require("chalk");
var score=0;
name=readlinesync.question("Hello Muggle, What is your name dear");
console.log(chalk.bold.red("WELCOME TO THE WIZARD QUIZ "+name))
questions=[
  {
    question:"What is Harry Potter's mom's name?",
    answer:"Lily Potter"
  },
  {
    question:"How many Weasley siblings are there?",
    answer:"7"
  },
  {
    question:"Which house was Luna Lovegood in? ",
    answer:"Hufflepuff"
  },
  {
    question:"How do you summon a Patronus?",
    answer:"Expecto Patronum"
  },
  {
    question:"Which term refers to wizards and witches who have both magic and Muggle ancestors?",
    answer:"Half Blood"
  }

];

function Quiz(ques,answer)
{
  useranswer=readlinesync.question(ques);
  if (useranswer === answer)
  {
    console.log(chalk.bgRed.white("CORRECT!!!"));
    score=score+1;
  }
  else 
  {
    console.log(chalk.bgWhite.red("WRONG"));
    score=score-1;
  }
}

for(var i=0;i<5;i++)
{
  Quiz(questions[i].question,questions[i].answer);
}
console.log(chalk.yellow("YOUR FINAL SCORE IS "+score+"\n thanks for playing ^_^"))