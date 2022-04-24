// alert("Hello World!") //TO see the alert on the window
console.log("Hello") //To see the output in console
console.error("Error") //To show error 

// asigning values to a constant
//We can declare a varibale by 'let' or 'const'. 
// const is used when we want to keep the value of that variable constant through out the program
// let is used when the variable value can be changed in later steps

const name = "Jhon"
const age = 20
const rating = 3.9
const isCool = true
const x = null

console.log(typeof x)

//string methods

const s = 'Hello World'

console.log(s.toUpperCase()) // to change the string to upper case
console.log(s.toLowerCase()) //to change the string to lower case
console.log(s.substring(0, 5)) //to divide the string based on the position
console.log(s.split('')) //to split the string by letter
console.log(s.split(', ')) //to split the string by space and comma
console.log(s.substring(0, 5).toUpperCase()) //to divide the string based on the position and change it to upper case


//Arrays - varibales that hold multiple values

const fruits = ['apples', 'oranges', 'pears'] //array with list of fruits

fruits[3] = 'grapes' //to add grapes to list at 3rd position

fruits.unshift['starwberries'] //to add at the first position

fruits.push['mangoes'] //to add at the last position

fruits.pop() //to remove from the list

console.log(Array.isArray('hello')) //to check if its array

console.log(fruits.indexOf('oranges')) //to check index of oranges

console.log(fruits) //to print whole lit of fruits


/* multi
line
comment */

//Object Literals : Key value pair

const person = {
    firsName: 'Jhon',
    lastName: 'Doe',
    age: 40,
    hobbies: ['music', 'movies', 'books'],
    address: {
        street: '59 main st',
        city: 'Boston',
        state: 'MA'
    }

}

console.log(person) //to print whole person details
console.log(person.hobbies) //to print hobbies in person list
console.log(person.firsName, person.lastName) //to print first name and last name of person
console.log(person.hobbies[1]) //to print movies in hobbies
console.log(person.address.city) //to print city in address


const { firstName, lastName, address:{city}} = person //to create varibales and pull out from the list
console.log(firstName)

person.email = 'jhon@gmail.com' //to add email to person

console.log(person.email)

//creating objects of arrays
const todos = [
    {
        id:1,
        text: 'Take out Trash',
        isCompleted: true
    },
    {
        id:2,
        text: 'Going to Office',
        isCompleted: true
    },
    {
        id:3,
        text: 'Take out Trash',
        isCompleted: false
    }
]

console.log(todos[1].text) //to print text in id 1






