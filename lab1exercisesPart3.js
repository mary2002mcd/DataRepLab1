//create array
myTasksArray = [];
//arrow function that takes a task as an argument
let addTask = (task) => {
    let length = myTasksArray.push(task);//add task to array
    console.log(task + " has been inserted into myTasksArray");//print out message to say it has been added
    return length;//return current length of array after it has been added
}

//function to iterate over all tasks in the array and print out each array item
let listAllTasks = () => {
    myTasksArray.forEach((item) => {
        console.log(item);
    })
}

//function to take in a parameter and remove it from the array
let deleteTask = (task) => {
    let index = myTasksArray.indexOf(task);
    if (index > -1) {
        //delete at index, number of elements to be deleted is 1
        myTasksArray.splice(index, 1);
        console.log(task + " was deleted from the array");
    } else {//the passed parameter doesnt exist in the array
        console.log("Task: " + task + " not found in the array");
    }

    return myTasksArray.length;
}

//call function and pass in the parameter
addTask("Learn JS");
addTask("Learn React");
//print out elements
listAllTasks();
//call the delete function and rerun the lastAllTasks
deleteTask("Learn JS");
listAllTasks();



