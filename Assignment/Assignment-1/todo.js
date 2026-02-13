module.exports = {
addtodo,
listtodo,
markdone,
deletetodo
}= require("./todo.json");



addtodo("learn node.js fs");
addtodo("build mini backend");
listtodo();

markDone(1737263812);
deleteTodo(1737263812);