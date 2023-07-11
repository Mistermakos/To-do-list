document.body.innerHTML=
`
    <div class="main" >
        <header>
            <h1 class="clickable">To do list</h1>
        </header>
            <div id="form">
                <input type="text" placeholder="Write your task here!" name="task" onkeypress="confirm(event)"/>
                <button name="submit" onclick = "add_task()">CONFIRM</button>
            </div>
            <div id="all_tasks">
            </div>
    </div>


`
/* div id="add">
        <img src="images/add.png"/>
    </div>*/
const confirm = (e) => 
{
    // enter = 13
    let key = e.keyCode;
    if (key == 13) 
    {
        add_task();
    }
}
