//Make a blank arrow function that returns "Data Rep"
const PartA = () => {
    return "Data Representation & Querying";
}
//call the function and output it to the console so the result can be seen
PartA();
console.log(PartA());

//pass in a variable into the arrow function
const PartB = (myString) => {
    return myString;
}
//call the function
PartB("Data Representation");
//pass in the variable and output to console
console.log(PartB("Data Representation"));

//an arrow function that 2 variable and adds them
const PartCAddition = (num1, num2) => {
    return num1 + num2;
}
//call and pass in variables
PartCAddition(1, 2);
console.log(PartCAddition(1, 2));

// a function that multiply each number under 70 by 2
const ages = [25, 31, 42, 77];

const PartD = ages.map((item) => {   //map is a callback function because it passes a function as an argument
    if (item < 70) {
        return item * 2;
    } else {
        return item;
    }

});

//now equals to a variable instead of a function
console.log(PartD);





