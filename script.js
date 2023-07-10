let Tasks = []; 

//if you want to clear localstorage uncomment line below (for reseting)
//localStorage.clear();

//Adding tasks to list of tasks
const add_task = (value) =>{
    return document.getElementById("all_tasks").innerHTML += 
        `
        <div class="task">
            <img src="images/unchecked.png" onclick="done(this)"/>
            <div">${value}</div>
        </div>
        `
}

//If there are any tasks in localstorage, it takes them to array, and prints them
if (localStorage.getItem("Tasks") !== null)
{    
    Tasks = JSON.parse(localStorage.getItem("Tasks"))
    Tasks.forEach(element => {
        add_task(element);
    });
}

//Submiting form (adding tasks to list)
const sub = document.getElementsByName("submit")[0];
sub.onclick = () => 
{
    let value = document.getElementsByName("task")[0].value;
    if(value == ""){alert("You have to name your tasks!");}
    else
    {
        if(Tasks.includes(value) == true){alert("Dont repeat yourself!");}
        else{
            Tasks.push(value); 
            add_task(value)
        }
    }
}
 
//when closing this will put every not done task into localstorage
window.addEventListener("beforeunload", function(e){
    localStorage.setItem("Tasks",JSON.stringify(Tasks));
},false);

const done = (c) =>
{
    let text_next_to_button = c.parentNode.children[1].textContent
    Tasks.splice( Tasks.indexOf(text_next_to_button), 1)
    c.parentNode.remove();
}  

