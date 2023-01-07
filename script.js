function changeTheme() {
    if(document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
    }
    else {
        document.body.classList.add('dark');
    }
}
function recipesList() {
    let recipesList = document.querySelector('#recipesList');
    recipesList.innerHTML = '';
    recipes.forEach((el, ind) => {
        let divRecipe = document.createElement('div');
        divRecipe.className = "recipe-item";
        divRecipe.innerHTML = '<div class="info"><div class="recipeImage"><img src="'+el.image+'" alt=""></div><h2>'+el.title+'</h2><div class="info-buttons"><a href="recipe.html?id='+ind+'" class="moreInfo">Подробнее</a><a href="" class="delete"><img src="img/delete.png" alt=""></a></div></div>';
        recipesList.append(divRecipe);
    })
7}
function recipeInfo(id) {
    let divRecipe = document.createElement('div');
    divRecipe.innerHTML = '<h1>'+recipes[id].title+'</h1><div class="flex recipe"><div class="recipeImg"><img src="'+recipes[id].image+'" ></div><div class="ingredients">    <h3>Ингредиенты</h3>'+recipes[id].ingredients+'</div></div><h3>Приготовление</h3><div class="cooking">'+recipes[id].cooking+'</div>';
        let recipeItem = document.querySelector('#recipeContent');
        recipeItem.append(divRecipe);
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
document.addEventListener('keyup', search);