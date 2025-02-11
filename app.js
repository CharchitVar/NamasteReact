import React from 'react';
import ReactDOM from 'react-dom/client';

// <reference types="react" />
//<reference types="react-dom" />

// To create some thing like this 
// <div id="parent">
//     <div id="child">
//         <h1 >
//         Hello World from H1
//         </h1>
//         <h2>
//         Hello World from H2
//         </h2>
//     </div>
// </div>
// we will be using createElement("type of element", attributes, children of the element it
// it could be the text or the another element, In case if there are more then 1 element as children then we need to use the 
// array to create the sibling like h1 and h2 )

// const element = React.createElement("div", {id:"parent"},
//     React.createElement("div", {id:"child"},
//         [
//             React.createElement("h1", {id:"heading1"}, "Hello World from H1"),
//             React.createElement("h2", {id:"heading2"}, "Hello World from H2"),
//         ]
//      ))

// //const element = React.createElement("h1", {id:"heading"}, "Hello, React! from JS");

// console.log(element);
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(element);
//Now If we need this type of structure then
// <div id="parent">
//     <div id="child">
//         <h1 >
//         Hello World from H1
//         </h1>
//         <h2>
//         Hello World from H2
//         </h2>
//     </div>
//     <div id="child2">
//         <h1 >
//         Hello World from H1 child 2
//         </h1>
//         <h2>
//         Hello World from H2 child 2
//         </h2>
//     </div>
// </div>

const element = React.createElement("div", {id:"parent"},
    [React.createElement("div", {id:"child"},
        [
            React.createElement("h1", {id:"heading1"}, "Hello World from H1 child 1"),
            React.createElement("h2", {id:"heading2"}, "Hello World from H2 child 1"),
        ]
     ),
    React.createElement("div", {id:"child2"},
        [
            React.createElement("h1", {id:"heading1"}, "Hello World from H1 child 2"),
            React.createElement("h2", {id:"heading2"}, "Hello World from H2 child 2"),
        ]
     )])

//const element = React.createElement("h1", {id:"heading"}, "Hello, React! from JS");

console.log(element);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(element);