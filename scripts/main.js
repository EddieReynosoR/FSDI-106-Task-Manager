let importantIconClass = "fa-regular fa-star";

let nonImportantIconClass = "fa-solid fa-star";


let isImportant = false;

function Important(){

    if(!isImportant){
        console.log("Important!");
        $("#icon-important").removeClass(importantIconClass);
        $("#icon-important").addClass(nonImportantIconClass);

        isImportant = true;
    }else{
        console.log("Not important.");
        $("#icon-important").removeClass(nonImportantIconClass);
        $("#icon-important").addClass(importantIconClass);

        isImportant = false; 
    }
    
}


function init(){

    $("#icon-important").click(Important);
    $("#icon-nonImportant").click(Important);

}

window.onload = init;