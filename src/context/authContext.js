import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../services/authService/loginService";
import { signUpService } from "../services/authService/signUpService";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const localStorageToken = JSON.parse(localStorage.getItem("authItems"));
  const [token, setToken] = useState(localStorageToken?.token);
  const [loggedUser, setLoggedUser] = useState(localStorageToken?.user);

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
        navigate("/products");
      } else {
        // notifyToast("error", "Something is Wrong!");
      }
    } catch (error) {
      const {
        response: { status },
      } = error;
      if (status === 422) {
        // toast.error("Username Already Exists. Please choose another one.");
      } else {
        // toast.error("Something went wrong");
      }
      console.error(error);
    } finally {
      // setIsLoading(false);
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
        navigate("/products");
        // notifyToast("success", "Succesfully Signed Up!");
      } else {
        // notifyToast("error", "Something is Wrong!");
      }
    } catch (error) {
      const {
        response: { status },
      } = error;
      if (status === 422) {
        // toast.error("Username Already Exists. Please choose another one.");
      } else {
        // toast.error("Something went wrong");
      }
      console.error(error);
    } finally {
      // setIsLoading(false);
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

// const signUpHandler = async (userdetails) => {
//   setIsLoading(true);
//   try {
//     const {
//       status,
//       data: { encodedToken, createdUser },
//     } = await signUpService({ ...userdetails });

//     if (status === 201) {
//       localStorage.setItem("token", encodedToken);
//       const { username, name, profileImg, _id } = createdUser;

//       const currentUser = { username, name, profileImg, _id };
//       setIsUserLoggedIn(true);
//       localStorage.setItem("userData", JSON.stringify(currentUser));
//       setToken(encodedToken);
//       setCurrentUser(currentUser);
//       toast.success(`Hi, ${createdUser.firstName}!`, {
//         icon: "👋",
//       });
//       console.log({ createdUser });
//       navigate("/", { replace: true });
//     }
//   } catch (error) {
//     const {
//       response: { status },
//     } = error;
//     if (status === 422) {
//       toast.error("Username Already Exists. Please choose another one.");
//     } else {
//       toast.error("Something went wrong");
//     }
//     console.error(error);
//   } finally {
//     setIsLoading(false);
//   }
// };

// const loginHandler = async (userDetails) => {
//   setIsLoading(true);
//   try {
//     const {
//       status,
//       data: { foundUser, encodedToken },
//     } = await loginService({ ...userDetails });

//     if (status === 200) {
//       localStorage.setItem("token", encodedToken);
//       const { username, name, profileImg, _id } = foundUser;

//       const currentUser = { username, name, profileImg, _id };

//       localStorage.setItem("userData", JSON.stringify(currentUser));
//       setCurrentUser(currentUser);
//       setToken(encodedToken);
//       setIsUserLoggedIn(true);
//       toast.success(`Welcome back, ${currentUser.name}!`, { icon: "👋" });
//       navigate(location?.state?.from?.pathname || "/", { replace: true });
//     }
//   } catch (error) {
//     const {
//       response: { status },
//     } = error;
//     if (status === 404) {
//       toast.error("The username you entered is not registered.");
//     } else if (status === 401) {
//       toast.error("The credentials you entered are invalid. Please try again.");
//     } else {
//       toast.error("Something went wrong");
//     }
//     console.error(error);
//   } finally {
//     setIsLoading(false);
//   }
// };
