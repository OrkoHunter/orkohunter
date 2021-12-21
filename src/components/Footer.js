import React from "react";
import SocialNav from "./SocialNav";
import styled from "styled-components";

const FooterHtml = styled.footer`
  margin-top: 24px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = () => (
  <FooterHtml>
    <SocialNav />
  </FooterHtml>
);

export default Footer;
