import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import SocialNav from "./SocialNav";

const HeaderContainer = styled.header`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  /* Assuming 12 column grid. */
  padding-left: calc(100% / 12);
  padding-right: calc(100% / 12);

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 24px;
  }

  /* @media only screen and (max-width: 900px) {
  }

  @media only screen and (max-width: 600px) {
  } */
`;

const OrkoHunter = styled(Link)`
  font-weight: 600;
  font-size: 32px;
  color: black;
  text-decoration: none;
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 2em;

  a {
    text-decoration: none;
    color: black;
    font-size: 24px;
    font-weight: 400;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <OrkoHunter to="/">@OrkoHunter</OrkoHunter>

    <NavContainer>
      <Link to="/blog">Blog</Link>
      <Link to="/blog/introducing-discord">Discord</Link>
      {/* <Link to="/podcast">Podcast</Link> */}
      <Link to="/letters">Letters</Link>
      {/* <Link to="/notes">Notes</Link> */}
      {/* <Link to="/files/cv.pdf">CV</Link> */}
    </NavContainer>

    <SocialNav />
  </HeaderContainer>
);

export default Header;
