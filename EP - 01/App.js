const rootRef = document.getElementById("root");
const headingReact = React.createElement("h1", {}, "'Hello World', from React!!");
const rootReact = ReactDOM.createRoot(rootRef);

rootReact.render(headingReact);

// console.log(headingReact);
console.log(typeof headingReact);



//Creating nested elements in React
/*
example-1:
<div id = 'parent'>
    <div id = 'child'>
        <h1 id = 'heading'> Helloo </h1>
    </div>
</div>
    */

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "chile" },
        React.createElement("h1", { id: "heading" }, "Helloo")
    )
);

rootReact.render(parent);
console.log(parent);     //=> object


/*
example-2: sibling children

<div id = 'parent2'>
    <div id = 'child'>
        <h1 id = 'heading1'> Helloo </h1>
        <h2 id = 'heading2'> Helloo 2 </h2>
    </div>
</div>
    */

const parent2 = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "chile" },
        [React.createElement("h1", { id: "heading1" }, "Helloo"),
        React.createElement("h2", { id: "heading2" }, "Helloo")]
    )
);

rootReact.render(parent2);

