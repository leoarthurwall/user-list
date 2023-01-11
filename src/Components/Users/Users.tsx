import { useEffect, useState } from "react";
import styled from "styled-components";
import { IUsers } from "../../IUsers";
import Headers from "./Headers/Headers";
import UserRow from "./UserRow/UserRow";

const Container = styled.section`
  width: 90%;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  border: 2px solid blue;
`;

const Users = () => {
  const [userData, setUserData] = useState<IUsers[]>([]); //STORES USER DATA FROM API

  //API FETCH FOR USER DATA
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

  // console.log("userOne:", userData.results);
  return (
    <>
      <Container>
        <Headers />
        <UserRow userData={userData}/>
      </Container>
    </>
  );
};

export default Users;
