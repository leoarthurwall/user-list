import { useEffect, useState } from "react";
import styled from "styled-components";
import { IUsers } from "../../IUsers";
import Headers from "./Headers/Headers";
import UserRow from "./UserRow/UserRow";

const Container = styled.section`
  width: 90%;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-row-gap: 15px;
`;

const Users = () => {
  const [userData, setUserData] = useState<IUsers[]>([]); //STORES USER DATA FROM API

  //API FETCH FOR USER DATA
  const API = "https://randomuser.me/api/?results=10";
  const fetchUserData = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
        setUserData(res.results);
      });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <Container>
        <Headers />
        {userData &&
          userData.map((user: any) => (
            <UserRow userData={userData} key={user.id.value} user={user}></UserRow>
          ))}
      </Container>
    </>
  );
};

export default Users;
