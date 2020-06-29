import { useRouter } from "next/router";

export default () => {
  const router = useRouter();

  return (
    <>
      <h1>Currency page</h1>
      <p>Currency id: {router.query.id}</p>
    </>
  );
};
