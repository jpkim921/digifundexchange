import Head from 'next/head'
import DataChart from "../../components/datachart";
import Graph from "../../components/graph";
import Articles from "../../components/articles";

const container = {
  maxWidth: "55rem",
  padding: "0 1rem",
  margin: "3rem auto 6rem",
}

const gridLayout = {
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gridTemplateRows: "2fr 1fr",
  gap: "15px 10px",
  justifyItems: "start",
};

const graphBox = {
  gridColumnStart: "1",
  gridRowStart: "1"
}
const dataChartBox = {
  gridColumnStart: "2",
  gridRowStart: "1",
};
const articleBox = {
  gridColumnStart: "1",
  gridRowStart: "2",
};

export default ({ data }) => {
  console.log(data);
  return (
    <>
      <Head>
        <title>{data[0].id}</title>
      </Head>
      <div className="container" style={container}>
      <h1>Currency page</h1>
        <div className="gridLayout" style={gridLayout}>
          <Graph style={graphBox} />
          <DataChart data={data} style={dataChartBox} />
          <Articles style={articleBox} />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(
    `https://api.nomics.com/v1/currencies/ticker?key=${process.env.nomicsKey}&ids=${context.params.id}&convert=USD`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
