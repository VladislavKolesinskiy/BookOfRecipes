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
    el.parentNode.parentNode.parentNode.remove()
}
window.onload = setChangeListener(listeneringr);