const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "h1 tag child"),
    React.createElement("h2", {}, "h2 tag child"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "h1 tag child"),
    React.createElement("h2", {}, "h2 tag child"),
  ]),
  "this is parent"
);

console.log(parent); //React.createElement is an object and it becomes HTML which our browser understands, while rendering into the dom it converts itself into HTML

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
