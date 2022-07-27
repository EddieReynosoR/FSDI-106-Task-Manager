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
        clearForm();
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
    
        
    
    let systax1 = `

    <div class="tasks" id="tasks">
        <div class="task-title">
            <h4>${task.title}</h4>
        </div>

        <div class="task-section">
            <p id="border-left">${task.desc}</p>
            <p>${task.date}</p>
            <p>${task.location}</p>
            <p>${task.emoji}</p>
            <p id="border-right">${task.status}</p>
        </div>
    </div>
    `;


    let systax2 = `

    <div class="tasks">
        <div class="task-title">
            <h4><i class="fa-solid fa-star" id="important-task"></i> ${task.title}</h4>
        </div>

        <div class="task-section">
            <p id="border-left">${task.desc}</p>
            <p>${task.date}</p>
            <p>${task.location}</p>
            <p>${task.emoji}</p>
            <p id="border-right">${task.status}</p>
        </div>
    </div>
    `;

    
    if(!task.important){
        $("#pendingTasks").append(systax1);
        
    }
    else{
        $("#important-tasks").append(systax2);
    }

   
    
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