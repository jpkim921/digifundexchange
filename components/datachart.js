export default function DataChart(props) {
  return (
    <>
      {props.data.map((d) => (
        <div key={d.id}>
          <p>{d.name}</p>
          <p>{d.price}</p>
        </div>
      ))}
    </>
  );
}
