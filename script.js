const sub = document.getElementsByName("submit")[0];

sub.onclick = () => 
{

    document.getElementById("all_tasks").innerHTML += 
    `
    <div class="task">
        <button onclick="done(this)">Done</button>
        ${document.getElementsByName("task")[0].value}
    </div>
    `
}

const done = (c) =>
{
    c.parentNode.remove();
}   