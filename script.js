'use strict';


////////////////////////////////////////////////////////////////////
// Coding chalenge 1

const poll = {
    question: "What is your favourite programming language?", 
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section! 
    answers: new Array(4).fill(0),
    registerNewAnswer(){
       const {question, options} = poll;
       const ans = Number(prompt(`${question}\n${options.join('\n')}\n(Write option number)`));
        console.log(typeof(ans) === 'number' && ans < this.options.length && this.answers[ans]++);
        //console.log(this.answers);

        this.displayResults();
        this.displayResults('string');
        
    },
    displayResults(type = 'array'){
        if(type === 'array'){
            console.log(this.answers);
        }else if(type === 'string'){
            console.log(`Poll results are ${this,this.answers.join(', ')}`);
        }
    }

};

   poll.displayResults.call({answers: [5,2,3]}, 'string');
   
    
    let pollAns = document.querySelector('.poll');
    pollAns.addEventListener('click', poll.registerNewAnswer.bind(poll));
  
     
   

 /*   1. Create a method called'registerNewAnswer'on the'poll'object.The method does 2 things:
        1.1. Display a prompt window for the user to input the number of the
        selected option. The prompt should look like this: What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)

     1.2. Based on the input number, update the 'answers' array property. For example, if the option is 3, increase the value at position 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?)

     3. Create a method'displayResults'which displays the poll results.The
        method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
     4. Run the'displayResults'method at the end of each 'registerNewAnswer' method call.

    5. Bonus: Use the'displayResults'method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation?
    Test data for bonus:
        § Data1:[5,2,3]
        § Data2:[1,5,3,9,6,1]
     */

 

/*const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    },
};

lufthansa.book(239, 'Jonas Schedtmann');
lufthansa.book(635, 'John Smith');
//console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],

}
const swiss = {
    airline: 'Swiss',
    iataCode: 'SW',
    bookings: [],

}



const book = lufthansa.book;
book.call(eurowings, 587, 'Cao Diem');
//console.log(eurowings);

const arr = [287, 'Cao Diem']
book.apply(swiss, arr);
//console.log(swiss);

const bookLH = book.bind(swiss);
bookLH(431, 'Steven Cooper');


lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);

    this.planes++;
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


const addTax = (rate, value) => console.log(value + value * rate);
addTax(0.1, 100);

const addVAT = addTax.bind(null, 0.23);
addVAT(120);
addVAT(20);

const highAddVAT = function(rate){
    
    return function(value){
        return rate * value + value
    };
}

const addVAT2 = highAddVAT(0.1);
console.log(addVAT2(100));
console.log(addVAT2(130));*/



