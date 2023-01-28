import inquirer from "inquirer";
const todos = [];
var loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "string",
            name: "todo",
            message: "what you want to add in your todo?"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "do you want to add more in todo list?",
            default: false
        }
    ]);
    const { todo, addmore } = answers;
    console.log(answers);
    loop = addmore;
    if (todo) {
        todos.push(todo);
    }
    else {
        console.log("kindly enter valid input");
    }
}
if (todos.length > 0) {
    console.log("your todo list is ");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("no todos found");
}
