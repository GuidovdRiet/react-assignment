import Head from "next/head";
import styled from "styled-components";

const PageTemplate = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>{children}</Main>
    </>
  );
};

export default PageTemplate;

const Main = styled.main`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 0;
`;
