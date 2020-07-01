import DataChart from "../../components/datachart"

export default ({ data }) => {
  console.log(data)
  return (
    <>
      <h1>Currency page</h1>
      <DataChart data={data} />
      
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
