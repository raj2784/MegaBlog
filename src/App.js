import "./App.css";

function App() {
  console.log("j", process.env.REACT_APP_APPWRITE_URL);

  return (
    <h1 className="text-3xl font-bold underline text-white text-center">
      Hello world!
    </h1>
  );
}

export default App;
