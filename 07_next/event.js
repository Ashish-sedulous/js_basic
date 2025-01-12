//attachEvent()
//jQuery-on
//type,timestamp,default prevented
//target,toElement, srcElement, currentTarget,
//clientX, clientY,screenX, screenY
//altkey, ctrlkey, shiftkey,keyCode

// document.getElementById('owl').onclick=function(){
//     alert("owl clicked again")
// }

// document.getElementById('owl').addEventListener('click',function(){
//     alert("owl clicked again")
// })

// document.getElementById('owl').addEventListener('click',function(e){
//     console.log(e);
// },false)

// document.getElementById('owl').addEventListener('click',function(e){
//     console.log("owl clicked");
//     e.stopPropagation()
// },false)

// document.getElementById('owl').addEventListener('click',function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("google clicked");
// },false)

//  document.querySelector('images').addEventListener('click',function(e){
//     console.log(e.target.parentNode);
//     let removeit=e.target.parentNode
//     removeit.remove()
//  })

document.querySelector('images').addEventListener('click',function(e){
    console.log(e.target.tagName);
    if(e.target.tagName==='IMG'){
    console.log(e.target.id);
    let removeit=e.target.parentNode
    removeit.remove()
    }
 })