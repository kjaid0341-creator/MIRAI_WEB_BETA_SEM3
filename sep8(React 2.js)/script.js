const heading  = document.getElementById("Heading");

React.createElement("h1", {id: "heading"}, "Hello React");
console.log(heading);

const root=ReactDOM.createRoot(document.getElementById("root"));

ReactDOM.render(heading);