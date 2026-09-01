

//navber

var visibility
var DD = document.getElementById("dd");
var ni = document.getElementById("nav-items");

DD.addEventListener("click", function()
{
    visibility = ni.getAttribute("data-visible");

    if (visibility == "false"){
        ni.setAttribute("data-visible", "true")
    }
    else if (visibility == "true"){
        ni.setAttribute("data-visible", "false")
    }
});


//Meals

var breakfast = document.getElementById("breakfast");
var lunch = document.getElementById("lunch");
var dinner = document.getElementById("dinner");


function nav_breakfast(){
    visibility = breakfast.getAttribute("data-visible");
    if (visibility == "false"){
        breakfast.setAttribute("data-visible", "true")
        lunch.setAttribute("data-visible", "false")
        dinner.setAttribute("data-visible", "false")
    }
}

function nav_lunch(){
    visibility = lunch.getAttribute("data-visible");
    if (visibility == "false"){
        breakfast.setAttribute("data-visible", "false")
        lunch.setAttribute("data-visible", "true")
        dinner.setAttribute("data-visible", "false")
    }
}

function nav_dinner(){
    visibility = dinner.getAttribute("data-visible");
    if (visibility == "false"){
        breakfast.setAttribute("data-visible", "false")
        lunch.setAttribute("data-visible", "false")
        dinner.setAttribute("data-visible", "true")
    }
}


//Drinks

var cold =  document.getElementById("cold");
var hot =  document.getElementById("hot");

function nav_cold(){
    visibility = cold.getAttribute("data-visible");
    if (visibility == "false"){
        cold.setAttribute("data-visible", "true")
        hot.setAttribute("data-visible", "false")
    }
}

function nav_hot(){
    visibility = hot.getAttribute("data-visible");
    if (visibility == "false"){
        cold.setAttribute("data-visible", "false")
        hot.setAttribute("data-visible", "true")
    }
}
