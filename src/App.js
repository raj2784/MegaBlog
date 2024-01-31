import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";

function App() {
  const [loading, setLoading] = useState();
  const dispatch = useDispatch();
  //console.log(process.env.REACT_APP_APPWRITE_URL);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {})
      .catch(() => {});
  }, []);

  return (
    <h1 className="text-3xl font-bold underline text-white text-center">
      Mega Blog!
    </h1>
  );
}

export default App;
