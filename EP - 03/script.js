import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', {id: "H1"}, "This is REACT!");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

console.log(typeof heading);

// react elements using jsx

const jsxHeading = <h1> Namaste React using JSX. </h1>
root.render(jsxHeading);
console.log(typeof jsxHeading);

const JsxHeading = () => {
    return <h1> Namaste React using JSX. </h1> ;          //same as above but in component form
};

//using react element inside component
const name = <h1> Mansi </h1>;

//react component 
//component inside componet ==> component composition

const HeadingComponent = () => {
    return <div>  
        <JsxHeading />    
        {name}
        <h1> Namaste React functional component</h1>
    </div>
};

root.render(<HeadingComponent />);
