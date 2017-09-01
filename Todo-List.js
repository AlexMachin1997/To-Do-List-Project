//Variables Used Throughout
var todos = ["Buy New Turtle"];

var input = prompt("Enter 'LIST' to List All The Todo. Enter 'NEW' to add a new Todo, or enter 'QUIT' to close application").toLocaleLowerCase();

//Core Programme Code

while (input !== "quit") { //Whilst Its Not Equal To Quit The Following Code Happens
    
    //handle input 
    if (input === "list") { //Lists All Todo In The Console
        ListToDos(); //Calls The List Function     
    } else if (input === "new") { //However If New Then Prompts The User To Enter A New To Do    
    addToDo(); //Add Function
        
    } else if (input === "delete") { // When The Input Equals Delete Option
    deleteToDo(); //Delete Function
        
    }
    //ask again for new input
    input = prompt("What Would You Like To Do").toLocaleLowerCase(); // Reprompts The User Again
}







//If The User Types In Quit It Stops The While Loop
console.log("OK, QUIT APPLICATION"); //Closes Application


// CORE FUNCTIONS FOR APPLICATION - DO NOT TOUCH

function ListToDos() { //Lists Each Todo In The Console
  	console.log("All Your Tasks Which Need Doing ")
    console.log("**********");
    //Array Itteration - ForEach Used - Repeats For Each Item
	todos.forEach(function(todo, index){ //Annoymus Function For This Particualr Part
		console.log(index + ": " + todo);
	});
	console.log("**********");
}

function addToDo() {
    var newTodo = prompt ("Enter New Todo");
    todos.push(newTodo); // Adds New Todo To Array Using push method 
    console.log( "TASK: " + newTodo + " Has Successfully Been Added "); //A Message Appears In The Console    
}

function deleteToDo() {
    var index = prompt("Enter Index Of Todo"); //Ask The User For The Index Of The To Do
    todos.splice(index,1); //Uses The Index Variable + how many we want to delete - Splice() method has been used
    console.log("Task Has Been Deleted"); //A Message Appears In The Console    
}