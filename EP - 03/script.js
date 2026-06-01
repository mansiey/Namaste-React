import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', {id: "H1"}, "This is REACT!");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

console.log(typeof heading);

//elements using jsx

const jsxHeading = <h1> Namaste React using JSX. </h1>
root.render(jsxHeading);
console.log(typeof jsxHeading);

