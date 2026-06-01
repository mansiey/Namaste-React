import React from 'react';
import ReactDOM from 'react-dom/client';

const rootRef = document.getElementById('rootRef');
const heading2 = React.createElement('h2', {id: "Root-child"}, "Hey, We're learning about igniting our app");
const rootReact = ReactDOM.createRoot(rootRef);

// rootReact.appendChild(heading2);

rootReact.render(heading2);