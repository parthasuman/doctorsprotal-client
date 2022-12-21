import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {}, [email]);
  if (email) {
    fetch(`https://doctors-protal-server-omega.vercel.app/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
          setToken(data.accessToken);
        }
      });
  }
  return [token];
};

export default useToken;
