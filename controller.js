const fs = require("fs");

const loadData = () => {
    let todoList = fs.readFileSync("data.json").toString();
    todoList = JSON.parse(todoList);

    return todoList;
}

const saveData = (todoList) => {
    // save todoList into json file
    const todoJSON = JSON.stringify(todoList);
    // save into file
    fs.writeFileSync("data.json", todoJSON);
}

const createTodo = (todo, status) => {
    const todoList = loadData();

    if (todoList.length == 0) {
        id = 0;
    } else {
        id = todoList[todoList.length - 1].id + 1;
    }

    todoList.push({id: id, todo: todo, status: status});
    
    saveData(todoList);
    return data;
}

function deleteTodo(id) {
    const data = loadData();

    const index = data.findIndex((item) => item.id === id);
    console.log("index ", index);
    console.log("data[id].status ",data[index].status);
    // data[ID].status = !data[ID].status;

    data.splice(index,1);

    saveData(data);
    return data;
}

function toggleTodo(id) {
    const data = loadData();
    
    const index = data.findIndex((item) => item.id === id);
    
    data[index].status = !data[index].status;


    saveData(data);
    return data;
}

module.exports={ 
    loadData: loadData,
    saveData: saveData,
    createTodo: createTodo,
    deleteTodo: deleteTodo,
    toggleTodo: toggleTodo,
}
