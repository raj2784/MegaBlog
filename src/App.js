import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  //console.log(process.env.REACT_APP_APPWRITE_URL);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <div className="min-h-sc flex flex-wrap content-between bg-gray-500">
      <div className="w-full block">
        <Header />
        <main>{/* <Outlet/> */}</main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
