const sub = document.getElementsByName("submit")[0];
let Tasks = []; 

//if you want to clear localstorage uncomment line below
//localStorage.clear();


if (localStorage.getItem("Tasks") !== null)
{    
    Tasks = JSON.parse(localStorage.getItem("Tasks"))
}

const add_task = (value) =>{
    return document.getElementById("all_tasks").innerHTML += 
        `
        <div class="task">
            <button onclick="done(this)">Done</button>
            <span>${value}</span>
        </div>
        `
}

const print = () =>
{
    Tasks.forEach(element => {
        add_task(element);
    });
}
print();

sub.onclick = () => 
{
    let value = document.getElementsByName("task")[0].value;
    if(Tasks.includes(value) == true){alert("Dont repeat yourself!");}
    else{
        Tasks.push(value); 
        add_task(value)
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

