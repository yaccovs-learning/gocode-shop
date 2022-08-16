import logo from "./logo.svg";
import "./App.css";
import ExampleFragment from "./components/ExampleFragment";
import ExamplePropsButton from "./components/ExamplePropsButton";

function App() {
  return (
    <div className="App">
      <ExamplePropsButton
        text="Hello button!"
        onClickHandler={() => {
          console.log("hello!");
        }}
      />
      <ExamplePropsButton
        text="prompt button!"
        onClickHandler={() => {
          prompt("hello!");
        }}
        stylingObject={{backgroundColor: "red"}}
      />
      <ExampleFragment />
    </div>
  );
}

export default App;
