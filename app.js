import React from 'react';
import ReactDOM from 'react-dom/client';

//React.creatElemet() is one way to creat react element Now we will be using JSX which is Html like syntax in JS
// File to create the Element


// const element = React.createElement("div", {id:"parent"},
//     [React.createElement("div", {id:"child"},
//         [
//             React.createElement("h1", {id:"heading1"}, "Hello World from H1 child 1"),
//             React.createElement("h2", {id:"heading2"}, "Hello World from H2 child 1"),
//         ]
//      ),
//     React.createElement("div", {id:"child2"},
//         [
//             React.createElement("h1", {id:"heading1"}, "Hello World from H1 child 2"),
//             React.createElement("h2", {id:"heading2"}, "Hello World from H2 child 2"),
//         ]
//      )])

// //const element = React.createElement("h1", {id:"heading"}, "Hello, React! from JS");

// console.log(element);
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(element);

const jsxHeading = <h2 id="heading">Namaste React by Charchit {2+3}</h2>;

const Function1=()=>{
    return <h1>This is H1 tag</h1>;
} 

const Function2=()=>(
    <h1>
        <Function1>
        </Function1>
        {jsxHeading}
           This is H2 tag</h1>
);

// Function 1 and Function 2 are exactly same
// Above line code is convereted from JSX to JS by BABEL and at the end it will be converted to REact.CreateElement code
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Function2></Function2>);