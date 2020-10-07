// import modules into node js
const yargs = require("yargs");
const chalk = require("chalk");
// const c = require("./node_modules/chalk");

const todoController = require("./controller");

yargs.command({
    command: "list",
    describe: "show the todo list",
    handler: function() {
        let data = todoController.loadData();
        // console.log(data);

        if(data) {
            data.map((item) => item.status ? console.log(chalk.green.bgYellow(item.todo, item.status)) : console.log(chalk.red.bgCyanBright(item.todo, item.status)));
        }
    },
});

yargs.command({
    command: "create",
    describe: "create new todo",
    
    builder: {
        todo: {
            type: "string",
            demandOption: true,
            describe: "Todo content",
        }, 
        status: {
            type: "boolean",
            demandOption: true,
            describe: "complete or not",
            default: false,
        }
    },
    handler: function(arg) {
    
        console.log("arg: ", arg)
        todoController.createTodo(arg.id, arg.todo, arg.status);
    },
});

yargs.command({
	command: "delete",
    describe: "delete a todo item",
    builder: {
        id: {
            type: "number",
            demandOption: true,
            describe: "item id",
        }, 
    },
	handler: function (arg) {
        
        let newList = todoController.deleteTodo(arg.id);
        console.log("newlist: ", newList);
	}
});

yargs.command({
	command: "toggle",
    describe: "toggle a todo item status",
    builder: {
        id: {
            type: "number",
            demandOption: true,
            describe: "item id",
        }, 
    },
	handler: function (arg) {
        
        let newList = todoController.toggleTodo(arg.id);
        console.log("newlist sau toggle: ", newList);
	}
});

yargs.parse();


