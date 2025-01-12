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