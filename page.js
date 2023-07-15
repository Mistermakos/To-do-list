document.body.innerHTML=
`
    <div class="main" >
        <header>
            <h1>To do list</h1>
        </header>
            <div id="form">
                <input type="text" placeholder="Write your task here!" name="task" onkeypress="confirm(event)"/>
                <button onclick = "add_task()">CONFIRM</button>
            </div>
            <div id="all_tasks">
            </div>
    </div>


`
const confirm = (e) => 
{
    // enter = 13
    let key = e.keyCode;
    if (key == 13) 
    {
        add_task();
    }
}
