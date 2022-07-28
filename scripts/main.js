let importantIconClass = "fa-regular fa-star";

let nonImportantIconClass = "fa-solid fa-star";


let isImportant = false;


function Important(){

    if(!isImportant){
        console.log("Important!");
        $("#icon-important").removeClass(importantIconClass).addClass(nonImportantIconClass);

        isImportant = true;
    }else{
        console.log("Not important.");
        $("#icon-important").removeClass(nonImportantIconClass).addClass(importantIconClass);

        isImportant = false; 
    }
    
}

let Hide = true;

function hideForm(){
    if(!Hide){
        console.log("Hiding...");
        $("#hide-button").hide();
        $("#task-form").hide(100);
        $("#add-button").show();
        Hide = true
    }else{
        console.log("Showing...");
        $("#hide-button").show();
        $("#task-form").show(100);
        $("#add-button").hide();

        Hide = false;
    }
}


function init(){

    $("#icon-important").click(Important);
    $("#icon-nonImportant").click(Important);


    $("#hide-button").hide();
    $("#task-form").hide();

    $("#add-button").click(hideForm);
    $("#hide-button").click(hideForm);



    $("#btnSave").click(saveTask);


    fetchTasks();

    

}

window.onload = init;