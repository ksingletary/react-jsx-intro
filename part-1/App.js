
const App = () => {
  return (
    <div className="App">
      <FirstComponent />
      <NamedComponent name="Keith" />
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById("root"))