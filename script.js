let Tasks = []; 

//if you want to clear localstorage uncomment line below (for reseting)
//localStorage.clear();

//Adding tasks to list of tasks
const print_task = (value) =>{
    return document.getElementById("all_tasks").innerHTML += 
        `
        <div class="task">
            <img src="images/unchecked.png" onclick="done(this)"/>
            <div ondblclick="change(this)" class="clickable">${value}</div>
        </div>
        `
}

//If there are any tasks in localstorage, it takes them to array, and prints them
if (localStorage.getItem("Tasks") !== null)
{    
    Tasks = JSON.parse(localStorage.getItem("Tasks"))
    Tasks.forEach(element => {
        print_task(element);
    });
}

//Submiting form (adding tasks to list)
const add_task = () => 
{
    let value = document.getElementsByName("task")[0].value;
    if(value == ""){alert("You have to name your tasks!");}
    else
    {
        if(Tasks.includes(value) == true){alert("Dont repeat yourself!");}
        else{
            Tasks.push(value); 
            print_task(value)
        }
    }
    document.getElementsByName("task")[0].value = ""
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

const replace = (c) => 
{
    let new_task = c.value;
    let nodes = c.parentNode.children;
    Tasks[Tasks.indexOf(nodes[1].textContent)] = new_task
    nodes[1].textContent = new_task;
    nodes[1].style.display = "block";
    nodes[2].blur(); // it deletes annying bug that occured sometimes
    c.remove();
}

const check_key = (c,key) => 
{
    // enter = 13
    if(key.keyCode == 13)
    {
        replace(c);
        return 0;
    }
}
 
const input_focus = (c) => 
{
    c.focus();
}

const change = (c) => 
{
    c.style.display = "none";
    c.parentNode.innerHTML+= `<input value="${c.textContent}" onfocusout="replace(this)" onmouseover="input_focus(this)" onkeypress="check_key(this, event)"/>`
}