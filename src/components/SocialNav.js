import React from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagramSquare,
  FaYoutube,
  FaEnvelope,
  FaRssSquare,
} from "react-icons/fa";

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const Link = styled.a`
  color: black;
  width: 32px;
  height: 32px;
`;

const SocialNav = () => (
  <Container>
    <Link target="_blank" href="https://github.com/OrkoHunter">
      <FaGithub size={32} />
    </Link>
    <Link target="_blank" href="https://linkedin.com/in/OrkoHunter">
      <FaLinkedin size={32} />
    </Link>
    <Link target="_blank" href="https://twitter.com/OrkoHunter">
      <FaTwitter size={32} />
    </Link>
    <Link target="_blank" href="https://instagram.com/OrkoHunter">
      <FaInstagramSquare size={32} />
    </Link>
    <Link
      target="_blank"
      href="https://www.youtube.com/channel/UCNNoxHSxAYZYPw7AwuuoIrQ"
    >
      <FaYoutube size={32} />
    </Link>
    {/* Or maybe copy email to clipboard */}
    <Link target="_blank" href="mailto:himanshu@orkohunter.net">
      <FaEnvelope size={32} />
    </Link>
    <Link target="_blank" href="https://orkohunter.net/blog/index.xml">
      <FaRssSquare size={32} />
    </Link>
  </Container>
);

export default SocialNav;
