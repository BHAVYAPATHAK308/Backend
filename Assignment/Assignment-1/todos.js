const fs = require("fs");
const path = require("path");
const { json } = require("stream/consumers");

const TODO_FILE = path.join(__dirname,"todo.json");

console.log(TODO_FILE);


function readtodo(){
    const data = fs.readFileSync(TODO_FILE,"utf-8");
    return json.parse(data);
}


function writetodo(){
    fs.writeFileSync(TODO_FILE,json.stringify(todo,null,2));
}

function addtodo(task){
const todo = readtodo();

const newtodo = {
    id : date.now(),
    task:task,
    done: false
};



todo.push(newtodo);
writetodo(todo);

console.log("✅ Todo added:",task);
}

function listtodo(){
    const todo = readtodo();
    
    if(todo.length ===0){
        console.log("📭 No todos found!");
        return;
    }
    todo.foreach((todo,index)=>
    {
        const status = todo.done?"✅" :"❌";
        console.log('${index + 1}.${status}${todo.task}');
    });
}


function markdone(id){
    const todos = readtodo();

    const todo = todos.find(t=> t.id===id);

    if(!todo){
        console.log("❌ Todo not found");
        return;
    }

    todo.done=true;
    writetodo(todos);

    console.log("🎉 Todo marked as done!");

}

function deletetodo(){
    const todo = readtodo();
    const filteredtodo = todo.filter(t=>t.id!==id);

    if(todo.length === filteredtodo){
        console.log("❌ Todo not found");
        return;
    }
    writetodo(filteredtodo);
    console.log("🗑️ Todo deleted!");
}

