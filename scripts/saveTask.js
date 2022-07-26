function saveTask(){
    let txtTitle = $("#txtTitle").val();

    let txtDescription = $("#txtDescription").val();

    let selDate = $("#selDate").val();

    let selColor = $("#selColor").val();

    let selEmoji = $("#selEmoji").val();

    let txtLocation = $("#txtLocation").val();

    let selStatus = $("#selStatus").val();

    let chkNotification = $("#chkNotification").prop("checked");


    class Task{
        constructor(important,title, desc, date, color, emoji, location, status){
            this.important = important;
            this.title = title;
            this.desc = desc;
            this.date = date;
            this.color = color;
            this.emoji = emoji;
            this.location = location;
            this.status = status;
        }
    }


    let newTask = new Task(isImportant, txtTitle,txtDescription,selDate,selColor,selEmoji,txtLocation,selStatus,chkNotification);

    if(validTask(newTask)){


        console.log(newTask);





        console.log("Saved!");

        displayTask(newTask);
        // clearForm();
    }else{
        alert("You must add all the information that is needed.");
    }
    
}



function validTask(Task){
    let valid = true;

    if(Task.title.length == 0 ||Task.desc.length== 0 || Task.location.length == 0 ){
        valid = false;
    }

    return valid;
}




function displayTask(task){
    let systax = `
    <div class="important-tasks">

    </div>

    <div class="normal-tasks">
        <div class="task-section">
            <h4>${task.title}</h4>
            <p>${task.desc}</p>
        </div>

        <div class="task-section">
            <p>${task.date}</p>
            <p>${task.location}</p>
        </div>

        <div class="task-section">
            <p id="task-color">${task.color}</p>
            <p>${task.emoji}</p>
        </div>

    </div>
    `;

    

    $("#pendingTasks").append(systax);
}

function clearForm(){
    $("#txtTitle").val("");

    $("#txtDescription").val("");

    $("#selDate").val("");

    $("#selColor").val("");

    $("#selEmoji").val("");

    $("#txtLocation").val("");

    $("#selStatus").val("");

    $("#chkNotification").prop("checked",false);
}