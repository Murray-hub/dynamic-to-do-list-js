//Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded',function(){
    //Select DOM Elements:
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList  = document.getElementById('task-list');
    let tasks = [];
    const savedTasks = localStorage.getItem("tasks");
    tasks = JSON.parse(savedTasks);
    tasks.forEach(task => loadTask(task));
    //Create the addTask Function:
    function addTask(){
        //Task Creation and Removal:
      let taskText = taskInput.value.trim();
      if(taskText === ""){
        alert('enter a task');
        return;
      }
      loadTask(taskText);
      tasks.push(taskText);
      localStorage.setItem("tasks",JSON.stringify(tasks));
      taskInput.value = "";
       }
      function loadTask(taskText){
         let li = document.createElement('li');
         li.textContent = taskText;
      
          let removeButton = document.createElement('button');
         removeButton.textContent = "Remove";
         removeButton.classList.add ('remove-btn');
         removeButton.onclick = function (){
                taskList.removeChild(li);
               tasks = tasks.filter(task => task !== taskText);
             localStorage.setItem('tasks',JSON.stringify(tasks));
           };
           li.appendChild(removeButton);
           taskList.appendChild(li); 
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