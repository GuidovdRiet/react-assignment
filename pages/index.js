import styled from "styled-components";

// Components
import PageTemplate from "../components/templates/PageTemplate";
import HTML from "../components/helpers/HTML";

function Home({ data }) {
  return (
    <PageTemplate>
      {/* Map over news items and fill the cards with content */}
      <Card>{/* Fill the cards with data */}</Card>
    </PageTemplate>
  );
}

// export async function getServerSideProps(context) {}

export default Home;

const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 20px;
  background-color: rgb(255, 255, 255);
  margin-bottom: 40px;
  padding: 20px 30px;
`;
