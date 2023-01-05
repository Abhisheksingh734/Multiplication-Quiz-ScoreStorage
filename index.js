const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);
const formEl=document.getElementById("form");
const qstEl=document.getElementById("question");
const inputEl=document.getElementById("input");
const scoreEl=document.getElementById("score");


let score =JSON.parse(localStorage.getItem("score"));

if(!score){
    score=0;
}

scoreEl.innerText=`Score: ${score}`

qstEl.innerText= `What is ${num1} multiply by ${num2}?`;

const correctAns=num1*num2;

formEl.addEventListener("submit",()=>{
    const userAns = +inputEl.value;  //added + to convert to int
    if(userAns==correctAns){
        score++;
        updateLocalstorage()
    }else{
        score--;
        updateLocalstorage()
    }
});

function updateLocalstorage(){
    localStorage.setItem("score",JSON.stringify(score))
}
