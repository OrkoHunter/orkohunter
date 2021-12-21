import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Montserrat, serif;
`;

const Title = styled.div`
  font-size: 32px;
  margin-bottom: 32px;
`;

const SubTitle = styled.div`
  font-size: 24px;
  margin-top: 32px;
`;

const About = () => (
  <Container>
    <Title>Hello! My name is Himanshu Mishra</Title>
    <StaticImage
      src="../images/profile_pic.png"
      width={240}
      quality={100}
      alt="Himanshu Mishra"
      style={{
        marginTop: "32px",
        borderRadius: "120px",
      }}
    />

    <SubTitle>
      Open Source | Software Engineer | Developer Advocate | Writer
    </SubTitle>
  </Container>
);

export default About;
