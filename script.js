window.onload = changeTheme2();
let data = JSON.parse(localStorage.getItem('data11'));
console.log(data);
function changeTheme() {
    if(localStorage.getItem('style') !== null) {
        document.body.classList.remove('dark');
        localStorage.removeItem('style');
    }
    else {
        document.body.classList.add('dark');
        localStorage.setItem('style','dark');
    }
}
function changeTheme2() {
    if(localStorage.getItem('style') !== null) {
        document.body.classList.add('dark');
    }
}
function recipesList() {
    let recipesList = document.querySelector('#recipesList');
    recipesList.innerHTML = '';
    recipes.forEach((el, ind) => {
        let divRecipe = document.createElement('div');
        divRecipe.className = "recipe-item";
        divRecipe.innerHTML = '<div class="info"><div class="recipeImage"><img src="'+el.image+'" alt=""></div><h2>'+el.title+'</h2><div class="info-buttons"><a href="recipe.html?id='+ind+'" class="moreInfo">Подробнее</a><button href="" class="delete" onclick="delRecipe(this)"><img src="img/delete.png" alt=""></button></div></div>';

        divRecipe.innerHTML = '<div class="info"><div class="recipeImage"><img src="'+el.image+'" alt=""></div><h2>'+el.title+'</h2><div class="info-buttons"><a href="recipe.html?id='+ind+'" class="moreInfo">Подробнее</a><button href="" class="delete" onclick="delRecipe(this)"><img src="img/delete.png" alt=""></button></div></div>';
        divRecipe.innerHTML = '<div class="info"><div class="recipeImage"><img src="'+el.image+'" alt=""></div><h2>'+el.title+'</h2><div class="info-buttons"><a href="recipe.html?id='+ind+'" class="moreInfo">Подробнее</a><a href="" class="delete"><img src="img/delete.png" alt=""></a></div></div>';

        recipesList.append(divRecipe);
    })
7}
function recipeInfo(id) {
    let divRecipe = document.createElement('div');
    divRecipe.innerHTML = '<h1>'+data[id].title+'</h1><div class="flex recipe"><div class="recipeImg"><img src="'+data[id].image+'" ></div><div class="ingredients" contenteditable="true">    <h3 contenteditable="false">Ингредиенты</h3>'+data[id].ingredients+'</div></div><h3>Приготовление</h3><div class="cooking" contenteditable="true">'+data[id].cooking+'</div>';
    let recipeItem = document.querySelector('#recipeContent');
    recipeItem.append(divRecipe);
	let enflag = document.querySelector('#enflag');
	enflag.setAttribute("href", "english/recipe-eng.html?id="+id);
	let ruflag = document.querySelector('#ruflag');
	ruflag.setAttribute("href", "recipe.html?id="+id);
}
function getParam(key) {
    var p = window.location.search;
    p = p.match(new RegExp(key + '=([^&=]+)'));
    return p ? p[1] : false;
}
function search() {
    let input = document.getElementById("inputSearch");
    let filter = input.value.toUpperCase();
    let ul = document.getElementById("recipesList");
    let li = ul.getElementsByClassName("recipe-item");
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName("h2")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
function setChangeListener (listener) {
    window.addEventListener("keyup", listener);
    window.addEventListener("blur", listener);
    window.addEventListener("paste", listener);
    window.addEventListener("copy", listener);
    window.addEventListener("cut", listener);
    window.addEventListener("delete", listener);
    window.addEventListener("mouseup", listener);
    window.addEventListener("click", listener);
}
function listeneringr (){
    let name = document.querySelector('h1').innerText;
    let r = -1;
    data.forEach((el,i,arr) => {
        if (el.title == name){r = i}
    })
    setTimeout(()=>{
        data[r].ingredients = '<ul>'+document.querySelector('.ingredients ul').innerHTML+'</ul>';
        data[r].cooking = document.querySelector('.cooking').innerHTML;
        localStorage.setItem('data11', JSON.stringify(data));
    },1000)   
}
document.addEventListener('keyup', search);

function delRecipe(el){  
    el.parentNode.parentNode.parentNode.remove();
}
window.onload = setChangeListener(listeneringr);


var snowCount = 100;
var snowColor = new Array("#b9dff4", "#b9dff5", "#b9dff6", "#b9dff7", "#b9dff8");
var snowType = new Array("Times");
var snowletter = "*"
var sinkSpeed = 0.5;
var snowSizeMin = 10;
var snowSizeMax = 40;
var snowLocation = 1; 
var snow = new Array();
var marginbottom;
var marginright;
var timer;
var i_snow = 0;
var x_mv = new Array();
var crds = new Array();
var lftrght = new Array();
var browserinfos = navigator.userAgent;
var ie5 = document.all && document.getElementById && !browserinfos.match(/Opera/);
var ns6 = document.getElementById && !document.all;
var opera = browserinfos.match(/Opera/);
var browserok = ie5 || ns6 || opera;

function RandomMaker(range){
  return Math.floor(range * Math.random());
}


function InitSnow(){
  if (ie5 || opera){
     marginbottom = document.body.scrollHeight;
     marginright = document.body.clientWidth - 15;
  }else if (ns6){
     marginbottom = document.body.scrollHeight;
     marginright = window.innerWidth - 15;
  }
  var snowsizerange = snowSizeMax - snowSizeMin;
  for (i = 0; i <= snowCount; i++){
     crds[i] = 0;
     lftrght[i] = Math.random() * 15;
     x_mv[i] = 0.03 + Math.random() / 10;
     snow[i] = document.getElementById("s" + i);
     snow[i].style.fontFamily = snowType[RandomMaker(snowType.length)];
     snow[i].size = RandomMaker(snowsizerange) + snowSizeMin;
     snow[i].style.fontSize = snow[i].size + "px";
     snow[i].style.color = snowColor[RandomMaker(snowColor.length)];
     snow[i].style.zIndex = 1000;
     snow[i].sink=sinkSpeed * snow[i].size / 5;
     if (snowLocation == 1){
         snow[i].posx = RandomMaker(marginright - snow[i].size);
     }
     if (snowLocation == 2){
     snow[i].posx = RandomMaker(marginright / 2 - snow[i].size);
     }
     if (snowLocation == 3){
     snow[i].posx = RandomMaker(marginright / 2 - snow[i].size) + marginright / 4
     }
     if (snowLocation == 4){
     snow[i].posx = RandomMaker(marginright / 2 - snow[i].size) + marginright / 2
     }
     snow[i].posy = RandomMaker(2 * marginbottom - marginbottom - 2 * snow[i].size);
     snow[i].style.left = snow[i].posx + "px";
     snow[i].style.top = snow[i].posy + "px";
  }
  MoveSnow();
}

function MoveSnow(){
  for (i = 0; i <= snowCount; i++){
     crds[i] += x_mv[i];
     snow[i].posy += snow[i].sink;
     snow[i].style.left = snow[i].posx + lftrght[i] * Math.sin(crds[i]) + "px";
     snow[i].style.top = snow[i].posy + "px";
     if (snow[i].posy >= marginbottom - 2 * snow[i].size ||
         parseInt(snow[i].style.left) > (marginright - 3 * lftrght[i])){
         if (snowLocation == 1){
             snow[i].posx = RandomMaker(marginright - snow[i].size)
         }
         if (snowLocation == 2){
             snow[i].posx = RandomMaker(marginright / 2 - snow[i].size)
         }
         if (snowLocation == 3){
             snow[i].posx = RandomMaker(marginright / 2 - snow[i].size) + marginright / 4
         }
         if (snowLocation == 4){
             snow[i].posx = RandomMaker(marginright / 2 - snow[i].size) + marginright / 2
         }
         snow[i].posy = 0;
       }
    }
    var timer = setTimeout("MoveSnow()", 50);
}

for (i = 0; i <= snowCount; i++){
   document.write("<span id='s" + i + "' style='position:absolute;top:-" + snowSizeMax +
       "'>" + snowletter + "</span>");
}

if (browserok){
   window.onload = InitSnow;
}

window.onload = setChangeListener(listeneringr);

function delRecipe(el){
    el.parentNode.parentNode.parentNode.remove()
}
window.onload = setChangeListener(listeneringr);
