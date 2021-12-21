import * as React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import About from "../components/About";

const Divider = styled.hr`
  margin-top: 40px;
`;

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <About />
    <Divider />
  </Layout>
);

export default IndexPage;
