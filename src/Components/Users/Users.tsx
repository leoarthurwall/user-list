import { useEffect, useState } from "react";
import styled from "styled-components";
import { IUsers } from "../../IUsers";
import PopUp from "../PopUp/PopUp";
import Headers from "./Headers/Headers";
import UserRow from "./UserRow/UserRow";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const GridContainer = styled.section`
  width: 90%;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-row-gap: 15px;
`;

const Users = () => {
  const [userData, setUserData] = useState<IUsers[]>([]); //STORES USER DATA FROM API
  const [selectedUser, setSelectedUser] = useState<IUsers[]>([]); // STORES THE USER DATA OF THE SLECTED USER - WHEN SHOW BUTTON IS PRESSED

  console.log({ selectedUser });

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
    <Container>
      {selectedUser.length === 1 ? <PopUp /> : null}
      <GridContainer>
        <Headers />
        {userData &&
          userData.map((user: any) => (
            <UserRow
              userData={userData}
              setSelectedUser={setSelectedUser}
              key={user.login.uuid}
              user={user}
            ></UserRow>
          ))}
      </GridContainer>
    </Container>
  );
};

export default Users;
