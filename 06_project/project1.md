# Projects related to dom

# Solution code

## project1

```javascript
const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body")

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id==='grey'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='white'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='blue'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='yellow'){
      body.style.backgroundColor=e.target.id;
    }
  })
})
```

## Project 2

```Javascript
const form=document.querySelector('form')
const bmi=(weight/((height*height)/10000)).toFixed(2)

form.addEventListener('submit',function(e){
   e.preventDefault();

   const height=parseInt(document.querySelector('#height').value)
   const weight=parseInt(document.querySelector('#weight').value)
  const results=document.querySelector('#results')
   const bmi=(weight/((height*height)/10000)).toFixed(2)
  

   if(height===''||height<0||isNaN(height)){
     results.innerHTML=`Please give a valid height ${height}`;
   }else if(weight===''||weight<0||isNaN(weight)){
     results.innerHTML=`Please give a valid weight ${weight}`;
   }else{
     const bmi=(weight/((height*height)/10000)).toFixed(2)
     //show the result
     results.innerHTML=`<span>${bmi}</span>`
   }

   if(bmi<18.6){coment.innerHTML=`Under Weight`}
   else if(bmi>24.9){coment.innerHTML=`Over Weight`}else{coment.innerHTML=`Normal Range`}
});
```

## Project 3

```Javascript
const clock=document.getElementById('clock');

setInterval(function(){
  let date=new Date();
  clock.innerHTML=date.toLocaleTimeString();
},1000)

```

## Project 4

```Javascript
let randomnumber=parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt');
const userinput=document.querySelector('#guessField');
const guessslot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const loworhi=document.querySelector('.lowOrHi');
const startover=document.querySelector('.resultParas');

const p=document.createElement('p')

let prevguess=[]
let numguess=1
let playgame=true;

if(playgame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess=parseInt(userinput.value)
    validateguess(guess)
  })
}

function validateguess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }else if(guess<1){
    alert('Please enter a number more than 1')
  }else if(guess>100){
    alert('Please enter a number less than 100')
  }else{
    prevguess.push(guess)
    if(numguess===11){
      displayguess(guess)
      displaymessage(`Game Over. Random number is ${randomnumber}`)
      endgame()
    }else{
      displayguess(guess)
      checkguess(guess)
    }
  }
}

function checkguess(guess){
  if(guess===randomnumber){
    displaymessage('You guessed it right')
    endgame()
  }else if(guess<randomnumber){
    displaymessage('Number is too low')
  }else if(guess>randomnumber){
    displaymessage('Number is too high')
  }
}

function displayguess(guess){
  userinput.value=''
  guessslot.innerHTML+=`${guess}   `
  numguess++;
  remaining.innerHTML=`${11-numguess}`
}

function displaymessage(message){
  loworhi.innerHTML=`<h2>${message}</h2>`
}

function newgame(){
  const newgamebutton=document.querySelector('#newgame')
  newgamebutton.addEventListener('click',function(e){
    randomnumber=parseInt(Math.random()*100+1);
    prevguess=[]
    numguess=1
    guessslot.innerHTML=''
    remaining.innerHTML=`${11-numguess}  `;
    userinput.removeAttribute('disabled')
    startover.removeChild(p)
    playgame=true
  })
}

function endgame(){
  userinput.value=''
  userinput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML='<h2 id="newgame">Start new game</h2>';
  startover.appendChild(p)
  playgame=false
  newgame();
}
```

## Project 5

```Javascript
const insert=document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`
  <div class='color'>
  <table>
  <tr>
      <th>key</th>
      <th>keycode</th>
      <th>code</th>
  </tr>
  <tr>
       <td>${e.key===''?'Space':e.key}</td>
       <td>${e.keycode}</td>
       <td>${e.code}</td>
  </tr>
  </table>
  </div>  
  `
})
```

## Project 6

```Javascript
const randomcolor=function(){
  const hex='0123456789ABCDEF';
  let color='#';
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)];
  }
  return color;
};
let intervalid;
const startchangingcolor=function(){
  
    intervalid=setInterval(changebgcolor,1000);

  function changebgcolor(){
  document.body.style.backgroundColor=randomcolor();}
}

const stopchangingcolor=function(){
  clearInterval(intervalid);
  intervalid=null;
}

document.querySelector('#start').addEventListener('click',startchangingcolor)

document.querySelector('#stop').addEventListener('click',stopchangingcolor)
```