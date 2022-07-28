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

            this.name = "Eduardo";
        }
    }


    let newTask = new Task(isImportant, txtTitle,txtDescription,selDate,selColor,selEmoji,txtLocation,selStatus,chkNotification);

    if(validTask(newTask)){


        console.log(newTask);

        $.ajax({
            type: "POST",
            url: "https://fsdiapi.azurewebsites.net/api/tasks",
            data: JSON.stringify(newTask),
            contentType: "application/json",

            success: function(res){
                console.log("Server says: ", res);
                displayTask(newTask);
                clearForm();
            },
            error: function(errorDetails){
                console.log("Error saving tasks: ", errorDetails);
            }

        });



        console.log("Saved!");


    }
    
}



function validTask(Task){
    let valid = true;

    if(Task.title.length == 0 ||Task.desc.length== 0 || Task.location.length == 0 ){
        valid = false;
        alert("You must add all the information that is needed.");
    }
    else if(Task.desc.length > 100){
        valid = false;
        alert("Description can't exceed 60 caracters.");
    }

    return valid;
}

function fetchTasks(){
    $.ajax({
        type: "GET",
        url: "https://fsdiapi.azurewebsites.net/api/tasks",

        success: function(res){
            let tasks = JSON.parse(res);

            
            for (let i = 0; i < tasks.length; i++) {
                if(tasks[i].name == "Eduardo"){
                    displayTask(tasks[i]);
                }
                
            }
            console.log("Server says: ", res);
            
        },
        error: function(errorDetails){
            console.log("Error saving tasks: ", errorDetails);
        }

    });
}




function displayTask(task){
    
    let systax1 = `

    <div class="tasks" id="tasks" style="border:3px solid ${task.color};">
        <div class="task-title">
            <h4>${task.title}</h4>
        </div>

        <div class="task-section">
            <div class="desc" id="border-left">
                <p><b>Description:</b></p>
                <p>${task.desc}</p>
            </div>
            <div class="location">
                <p><b>Date: </b>${task.date}</p>
                <p><b>Location: </b>${task.location}</p>
            </div>

            <div class="status" id="border-right">
                <p>${task.emoji}</p>
                <p><b>Status: </b>${task.status}</p>
            </div>
        </div>
    </div>
    `;


    let systax2 = `

    <div class="tasks" style="border:3px solid ${task.color};">
        <div class="task-title">
            <h4><i class="fa-solid fa-star" id="important-task"></i> ${task.title}</h4>
        </div>

        <div class="task-section">
            <div class="desc" id="border-left">
                <p><b>Description:</b></p>
                <p>${task.desc}</p>
            </div>
            <div class="location">
                <p><b>Date: </b>${task.date}</p>
                <p><b>Location: </b>${task.location}</p>
            </div>

            <div class="status" id="border-right">
                <p>${task.emoji}</p>
                <p><b>Status: </b>${task.status}</p>
            </div>
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

    $("#txtLocation").val("");


    $("#chkNotification").prop("checked",false);
}