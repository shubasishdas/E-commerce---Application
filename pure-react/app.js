const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { className: "title" }, "React is rendered"),
    React.createElement(
      Person,
      { name: "minju", occupation: "sleeping" },
      null
    ),
    React.createElement(
      Person,
      { name: "yoongi", occupation: "barking" },
      null
    ),
  ]);
};

const AppElement = React.createElement(App);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(AppElement);
