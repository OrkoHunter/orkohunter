import * as React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const MainContainer = styled.div`
  max-width: calc((10 * 100%) / 12);
  margin-left: auto;
  margin-right: auto;
`;

const Layout = ({ children }) => (
  <>
    <Header />
    <MainContainer>
      <main>{children}</main>
    </MainContainer>
    <Footer />
  </>
);

export default Layout;
