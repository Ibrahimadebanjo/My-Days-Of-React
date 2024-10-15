## Exercises: Level 1

1. What is the difference between a regular function and an arrow function?

ANSWER:
Arrow function is declared using const keyword while regular function is defined using function keyword
2. What is a React Component?
ANSWER:
React Component are small pieces of code that are reusable in building functional web applications
3. How do you make a React functional component?
ANSWER:
Start the name of the function with capital letter and it must have the return function and the Jsx must return a single element example like wrapping it in the codes in a single element
4. What is the difference between a pure JavaScript function and a functional component?
ANSWER:
pure javascript function cannot take function in form of HTML format 
5. How small is a React component?
6. Can we make a button or input field component?
const Button = () => {
    return (
        <button> Click me!</button>
    )
}
export default Button;
7. Make a reusable Button component.
<Button/>
8. Make a reusable InputField component.
const Input = () => {
    return (
        <input> Click me!</input>
    )
}
export default Button;
9. Make a reusable alert box component with one div parent element and one p child element of the div(warning alert box, success alert box).


