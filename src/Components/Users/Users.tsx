import { useEffect, useState } from "react";

const Users = () => {
  const [userData, setUserData] = useState([]);
  const API = "https://randomuser.me/api/?results=20";
  const fetchUserData = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUserData(res);
      });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  console.log({ userData });
  return <div>Users</div>;
};

export default Users;
