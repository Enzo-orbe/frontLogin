import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../store/actions/LoginActions";

export default function Home() {
  const history = useHistory();
  const users = useSelector((state) => state.Login.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!users) {
      history.push("/");
    }
    //     history.push("/login");
    //   }
  }, [users, history]);

  const handleClick = () => {
    dispatch(logoutUser());
    history.push("/");
  };
  return (
    <div>
      <h1>Bienvenido {users.user.name}</h1>
      <button onClick={handleClick}>logout</button>
    </div>
  );
}
