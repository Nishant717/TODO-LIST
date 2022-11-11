window.addEventListener('load',() =>{
        const form = document.querySelector("#new-task-form");
        const input =document.querySelector("#new-task-input");
        const list_el=document.querySelector("task");

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const task = input.value;
        if(!task){
            alert("Fill out the task");
            return;
        } 
        const task_el=document.createElement("div");
        task_el.classList.add("task"); 
    })
})