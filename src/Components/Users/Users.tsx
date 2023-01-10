import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 90%;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  border: 2px solid blue;
`;
const NameData = styled.p`
  border: 2px solid yellow;
  text-align: center;
`;
const EmailData = styled.p`
  border: 2px solid yellow;
`;
const PhoneData = styled.p`
  border: 2px solid yellow;
`;
const PhotoData = styled.div`
  height: 40px;
  width: 40px;
  background-color: grey;
  border: 2px solid yellow; 


`;
const ShowData = styled.button`
  border: 2px solid yellow;
`;

const Heading = styled.h4`
  border: 2px solid red;
  text-align: center;
`;

const DataWrapper = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;`
const Users = () => {
  const [userData, setUserData] = useState([]); //STORES USER DATA FROM API

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

  console.log({ userData });
  return (
    <Container>
      <Heading>Name</Heading>
      <Heading>Email</Heading>
      <Heading>Phone</Heading>
      <Heading>Photo</Heading>
      <Heading>Show</Heading>
      <DataWrapper>
        <NameData>Dave</NameData>
      </DataWrapper>

      <DataWrapper>
        <EmailData>dave@gmail.com</EmailData>
      </DataWrapper>

      <DataWrapper>
        <PhoneData>123456789</PhoneData>
      </DataWrapper>

      <DataWrapper>
        <PhotoData></PhotoData>
      </DataWrapper>

      <DataWrapper>
        <ShowData>Show</ShowData>
      </DataWrapper>
    </Container>
  );
};

export default Users;
