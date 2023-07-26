import { createContext, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginService } from "../services/authService/loginService";
import { signUpService } from "../services/authService/signUpService";
import { toast } from "react-hot-toast";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const localStorageToken = JSON.parse(localStorage.getItem("user"));
  const [token, setToken] = useState(localStorageToken?.token);
  const [loggedUser, setLoggedUser] = useState(localStorageToken?.user);

  // useEffect(() => {
  //   const loggedInUser = JSON.parse(localStorage.getItem("user"));
  //   if (loggedInUser) {
  //     setLoggedUser(loggedInUser?.user);
  //     setToken(loggedInUser.token);
  //     navigate("/");
  //   }
  // }, []);

  const loginHandler = async (userDetails) => {
    try {
      const {
        status,
        data: { foundUser, encodedToken },
      } = await loginService({ ...userDetails });

      if (status === 200 || status === 201) {
        localStorage.setItem(
          "user",
          JSON.stringify({ token: encodedToken, user: foundUser })
        );
        setToken(encodedToken);
        setLoggedUser(foundUser);
        navigate(location?.state?.from?.pathname || "/products", {
          replace: true,
        });
        toast.success("Succesfully Logged In !!!");
      } else {
        toast.error("Something went wrong !!!");
      }
    } catch (error) {
      const {
        response: { status },
      } = error;
      if (status === 422) {
        toast.error("Username Already Exists. Please choose another one.");
      } else {
        toast.error("Something went wrong");
      }
      console.error(error);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("user");
    setToken(null);
    setLoggedUser(null);
    navigate("/");
    // dispatch({ type: ACTION_TYPE.CLEAR_FILTER });
    // notifyToast("success", "Succesfully Logged Out!");
  };

  const signUpHandler = async (userDetails) => {
    try {
      const {
        status,
        data: { encodedToken, createdUser },
      } = await signUpService({ ...userDetails });
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "user",
          JSON.stringify({ token: encodedToken, user: createdUser })
        );
        setToken(encodedToken);
        setLoggedUser(createdUser);
        navigate(location?.state?.from?.pathname || "/products", {
          replace: true,
        });
        toast.success("Successfully Signed Up !!!");
      } else {
        toast.error("Something Went Wrong !!!");
      }
    } catch (error) {
      const {
        response: { status },
      } = error;
      if (status === 422) {
        toast.error("Username Already Exists. Please choose another one.");
      } else {
        toast.error("Something went wrong");
      }
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loginHandler,
        logoutHandler,
        signUpHandler,
        token,
        loggedUser,
        setLoggedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
