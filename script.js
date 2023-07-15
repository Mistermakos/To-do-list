let Tasks = []; 

//if you want to clear localstorage uncomment line below (for reseting)
//localStorage.clear();

//when closing this will put every not done task into localstorage
window.addEventListener("beforeunload", function(e){
    localStorage.setItem("Tasks",JSON.stringify(Tasks));
},false);

const add_task = () => 
{
    let value = document.getElementsByName("task")[0].value;
    if(!(check_value(value))){modify(value);Tasks.push(value);document.getElementsByName("task")[0].value = "";}
}

const check_value = (value) =>
{
    if (value == ""){return true}
    return Tasks.includes(value)
}

const modify = (value) => 
{
    return document.getElementById("all_tasks").innerHTML += `
    <div class="task">
        <img src="images/unchecked.png" onclick="done(this)"/>
        <div ondblclick="change(this)" class="clickable">${value}</div>
    </div>
    `
}

// //If there are any tasks in localstorage, it takes them to array, and prints them
if (localStorage.getItem("Tasks") !== null)
{    
    Tasks = JSON.parse(localStorage.getItem("Tasks"))
    Tasks.forEach(element => {
        modify(element);
    });
}

const done = (c) =>
{
    let text_next_to_button = c.parentNode.children[1].textContent
    Tasks.splice( Tasks.indexOf(text_next_to_button), 1)
    c.parentNode.remove();
}  

const replace = (c) => 
{
    if(!(check_value(c.value)))
    {
        Tasks[Tasks.indexOf(c.parentNode.children[1].textContent)] = c.value;
        let val = c.value;
        c.parentNode.remove();
        modify(val);
    }
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

const change = (c) => 
{c.parentNode.innerHTML+= `<input value="${c.textContent}" onfocusout="replace(this)" onmouseover="this.focus()" onkeypress="check_key(this, event)"/>`}