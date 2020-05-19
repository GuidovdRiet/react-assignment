import styled from "styled-components";

// Components
import PageTemplate from "../components/templates/PageTemplate";
import HTML from "../components/helpers/HTML";

function Home({ data }) {
  // data prop contains english news messages, display these messages
  return (
    <PageTemplate>
      {data &&
        data.map(({ id, title, content }) => (
          <Card key={id}>
            <HTML component="h1" className="title">
              {title.rendered}
            </HTML>
            <HTML component="div" className="content">
              {content.rendered}
            </HTML>
          </Card>
        ))}
    </PageTemplate>
  );
}

export async function getServerSideProps(context) {
  console.log({ context });
  const response = await fetch(
    "https://demo.chainelscms.com/wp-json/wp/v2/news?lang=en"
  );
  const data = await response.json();

  return {
    props: { data }, // will be passed to the page component as prop
  };
}

export default Home;

const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 20px;
  background-color: rgb(255, 255, 255);
  margin-bottom: 40px;
  padding: 20px 30px;
`;
