import Head from "next/head";
import Link from "next/link";

import CurrencyList from "../components/currencylist";

export default function Home({ currencies }) {
  return (
    <div className="container">
      <Head>
        <title>DigiFunds Exchange</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to DigiFunds Exchange</h1>

        <p className="description">
          eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim
          facilisis gravida neque convallis a cras semper auctor neque vitae
          tempus quam pellentesque nec nam aliquam sem et tortor consequat id
          porta nibh venenatis cras sed felis eget velit aliquet sagittis id
          consectetur purus ut faucibus pulvinar elementum integer enim
        </p>

        <div className="grid">
          {currencies.map((currency) => (
            <Link href="#" key={currency.id}>
              <a className="card">
                <img src={currency.logo_url} />
                <span>{currency.name}</span>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          width: 70%;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          position: relative;
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          color: inherit;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          width: 100%;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card img {
          width: 50px;
          height: 50px;
          vertical-align: middle;
        }

        .card span {
          font-size: 2rem;
          font-weight: bold;
          vertical-align: middle;
          margin-left: 10px;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const nomicsKey = process.env.nomicsKey;
  const res = await fetch(
    `https://api.nomics.com/v1/currencies?key=${nomicsKey}&ids=BTC,ETH,XRP&attributes=id,name,logo_url`
  );
  const currencies = await res.json();

  console.log(currencies);

  // By returning { props: currencies }, the Home component
  // will receive `currencies` as a prop at build time

  return {
    props: {
      currencies,
    },
  };
}
