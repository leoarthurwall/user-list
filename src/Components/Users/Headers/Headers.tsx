import styled from "styled-components";

const Heading = styled.h4`
  border: 2px solid red;
  text-align: center;
`;

const Headers = () => {
  return (
    <>
      <Heading>Name</Heading>
      <Heading>Email</Heading>
      <Heading>Phone</Heading>
      <Heading>Photo</Heading>
      <Heading>Show</Heading>
    </>
  );
};

export default Headers;
