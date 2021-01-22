import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Home() {
  const history = useHistory();
  const users = useSelector((state) => state.Login.user);

  useEffect(() => {
    if (!users) {
      history.push("/login");
    }
    //     history.push("/login");
    //   }
  }, [users, history]);
  return (
    <div>
      <h1>Bienvenidos al Home</h1>
    </div>
  );
}
