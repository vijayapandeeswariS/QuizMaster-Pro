    let quizStarted = true;
    let warningShown = false;

    // Countdown timer
    let timer = setInterval(() => {
      timeLeft--;
      document.getElementById("timer").textContent = "Time left: " + timeLeft + " seconds";
      if (timeLeft <= 0) {
        clearInterval(timer);
        alert("Time's up! Submitting quiz.");
        submitQuiz();

      }
    }, 1000);

    // Submit function
    function submitQuiz() {
      quizStarted = false;
      alert("Quiz submitted!");
      hide=document.getElementById("hide")
      hide.style="display:none"
      // You can add form submission logic here
      document.getElementById("quizForm").submit();
      

    }

    // Detect tab switch or window blur
    window.onblur = function () {
      if (quizStarted && !warningShown) {
        alert("Don't switch tabs! Quiz will now be submitted.");
        warningShown = true;
        submitQuiz();
      }
    };

    // Block right-click
    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });

    // Block keyboard shortcuts
    document.addEventListener("keydown", function (e) {
      if (
        (e.ctrlKey && ["t", "n", "w"].includes(e.key.toLowerCase())) ||
        (e.metaKey && ["t", "n", "w"].includes(e.key.toLowerCase())) ||
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i")
      ) {
        e.preventDefault();
        alert("This action is disabled during the quiz.");
      }
    });

    // Block F5, Ctrl+R, Cmd+R
   document.addEventListener("keydown", function (e) {
  if (
    e.key === "F5" ||
    (e.ctrlKey && e.key.toLowerCase() === "r") ||
    (e.metaKey && e.key.toLowerCase() === "r")
  ) {
    e.preventDefault();
    alert("Page refresh is disabled during the quiz.");
  }
});

// Optional: Block right-click to prevent reload via context menu
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Detect if the page was refreshed
window.addEventListener("load", function () {
  const navType = performance.getEntriesByType("navigation")[0].type;

  if (navType === "reload") {
    // Hide the quiz
    const quizForm = document.getElementById("quizForm");
    if (quizForm) {
      quizForm.style.display = "none";
    }

    // Show alert
    alert("Page refresh detected! Quiz is now hidden.");
  }
});





let count = 0;
let intervalId;
let timeoutId;

  if (!intervalId) {
    // Update timer display every second
    intervalId = setInterval(() => {
      count++;
      document.getElementById('timer').textContent = count;
    }, 1000);

    // Alert after 30 seconds
    timeoutId = setTimeout(() => {
      alert("Time is up: 2 Minutes reached!");
      stopTimer(); // Stop timer after alert
    }, 200000); 
  }


function stopTimer() {
  clearInterval(intervalId);
  clearTimeout(timeoutId);
  intervalId = null;
  timeoutId = null;
  hide=document.getElementById("hide")
  hide.style="display:none"

}
window.open=function()
{
    alert("no")
    return null;
}
 

 score=0

 function work()

 {
 name=document.getElementById("name").value   
 a=document.getElementById("a")
 b=document.getElementById("b")
 c=document.getElementById("c")
 d=document.getElementById("d")
 e=document.getElementById("e")
 f=document.getElementById("f")
 g=document.getElementById("g")
 h=document.getElementById("h")
 i=document.getElementById("i")
 j=document.getElementById("j")
 if(a.checked)
 {
    score=score+1
 }

 if(b.checked)
 {
    score=score+1
 }
 if(c.checked)
 {
    score=score+1
 }
 if(d.checked)
 {
    score=score+1
 }
 if(e.checked)
 {
    score=score+1
 }
 if(f.checked)
 {
    score=score+1
 }
 if(g.checked)
 {
    score=score+1
 }
 if(h.checked)
 {
    score=score+1
 }
 if(i.checked)
 {
    score=score+1
 }
 if(j.checked)
 {
    score=score+1
 }

 alert("your name is"+ "   "+ name+" "+ "your score is"+"  "+score)

if(a.checked)
{


a=document.getElementById("one")
a.style="background-color:green"
}
else
{
    {


a=document.getElementById("one")
a.style="background-color:red"
}
}
if(b.checked)
{


b=document.getElementById("two")
b.style="background-color:green"
}
else
{
    {


b=document.getElementById("two")
b.style="background-color:red"


 }
}
if(c.checked)
{


c=document.getElementById("three")
c.style="background-color:green"


}
else
{
    {


c=document.getElementById("three")
c.style="background-color:red"
 }
}
if(d.checked)
{


d=document.getElementById("four")
d.style="background-color:green"


}
else
{
    {


d=document.getElementById("four")
d.style="background-color:red"
    }
}
if(e.checked)
{


e=document.getElementById("five")
e.style="background-color:green"


}
else
{
    {


e=document.getElementById("five")
e.style="background-color:red"
    }
}

if(f.checked)
{


f=document.getElementById("six")
f.style="background-color:green"
}
else
{
    {


f=document.getElementById("six")
f.style="background-color:red"
}
}

if(g.checked)
{


g=document.getElementById("seven")
g.style="background-color:green"
}
else
{
    {


g=document.getElementById("seven")
g.style="background-color:red"
}
}

if(h.checked)
{


h=document.getElementById("eight")
h.style="background-color:green"
}
else
{
    {


h=document.getElementById("eight")
h.style="background-color:red"
}
}

if(i.checked)
{


i=document.getElementById("nine")
i.style="background-color:green"
}
else
{
    {


i=document.getElementById("nine")
i.style="background-color:red"
}
}

if(j.checked)
{


j=document.getElementById("ten")
j.style="background-color:green"
}
else
{
    {


j=document.getElementById("ten")
j.style="background-color:red"
}
}

display=document.getElementById("display")
display.style="display:block"

vj=document.getElementById("vj")
vj.style="display:block"

if (score>8)
{
    score="A Grade"
}
else if((score==8)||(score==7)||(score==6)||(score==5)||(score==4)||(score==3)||(score==2)||(score==1))
{
    score="B Grade"
}

else
{
    score="zero"
}

a=document.getElementById("score"); //h1
a.innerHTML=score

a=document.getElementById("name").value
b=document.getElementById("certifyName");
b.innerHTML=a;


const today = new Date();
    const date = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const formattedDate = `${date}-${month}-${year}`;

    document.getElementById("dateDisplay").textContent = formattedDate;


}

function want(){
    
     hide=document.getElementById("hide")
     hide.style="display:none"


    vj=document.getElementById("vj")
    vj.style="display:none"
    window.print()
}

