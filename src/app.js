console.log("App.js is working");

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle ? <p>{app.subtitle}</p> : undefined}
      <p>This is some info</p>
      {getOptions(app.options)}
      <button disabled={app.options.length === 0} onClick={clearOptions}>
        Clear Options
      </button>
      <button disabled={app.options.length === 0} onClick={pickOption}>
        What should I do?
      </button>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  const appRoot = document.getElementById("app");
  ReactDOM.render(template, appRoot);
};

const app = {
  title: "title",
  subtitle: "subtitle",
  options: [],
};

function getOptions(options) {
  if (options && options.length > 0) {
    return (
      <div>
        <p>Here are your options</p>

        <p>{app.options.length}</p>
        <ol>
          {app.options.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ol>
      </div>
    );
  }
  return <p>No Options</p>;
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderApp();
  }
};

const clearOptions = () => {
  app.options = [];
  renderApp();
};

const pickOption = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNumber];
  alert(option);
};

renderApp();
