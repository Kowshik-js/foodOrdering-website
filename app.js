const parent=React.createElement("div", {id:"parent"},[
    React.createElement("div", {id: "child"},[
        React.createElement("h1", {}, "kowshik"),
        React.createElement("h2", {}, "kowshik"),
    ]),
    React.createElement("div", {id: "child2"},[
        React.createElement("h1", {}, "kowshik"),
        React.createElement("h2", {}, "kowshik"),
    ]),
]);



console.log(parent);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);