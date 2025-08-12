//Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded',function(){
    //Select DOM Elements:
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList  = document.getElementById('task-list');
    //Create the addTask Function:
    function addTask(){
        //Task Creation and Removal:
      let taskText = taskInput.value.trim();
      if(taskText === ""){
        alert('enter a task');
        return;
      }
        let li = document.createElement('li');
        li.textContent = taskText;
      
       let removeButton = document.createElement('button');
       removeButton.textContent = "Remove";
       removeButton.className = 'remove-btn';
       removeButton.onclick = function (){
         taskList.removeChild(li);
       }
       li.appendChild(removeButton);
       taskList.appendChild(li);
       taskInput.value = "";
    }
    //Attach Event Listeners:

    //Add click event to addButton
 addButton.addEventListener('click',addTask);
 //Add keypress event to taskInput for Enter key
 taskInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        addTask();
    }
 });
 
});
