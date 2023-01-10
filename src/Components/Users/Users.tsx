import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.section`
display: flex;
width: 90%;
justify-content: space-evenly;
align-items: center;
flex-direction: row;
`;
const Name = styled.div`
`
const NameData = styled.p``
const Email = styled.div``
const EmailData = styled.p``
const Phone = styled.div``
const PhoneData = styled.p``
const Photo = styled.div``
const PhotoData = styled.div``
const Show = styled.div``
const ShowData = styled.button``
const Heading = styled.h4``

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
  return <Container>
   <Name>
    <Heading>Name</Heading>
    <NameData></NameData>
   </Name>
   <Email>
    <Heading>Email</Heading>
    <EmailData></EmailData>
   </Email>
   <Phone>
    <Heading>Phone</Heading>
    <PhoneData></PhoneData>
   </Phone>
   <Photo>
    <Heading>Photo</Heading>
    <PhotoData></PhotoData>
   </Photo>
   <Show>
    <Heading>Show</Heading>
    <ShowData></ShowData>
   </Show>
  </Container>;
};

export default Users;
