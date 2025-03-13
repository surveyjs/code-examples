import Head from "next/head";
import dynamic from 'next/dynamic';

const TableViewComponent = dynamic(() => import("@/components/Tabulator"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>SurveyJS Dashboard for React - Table View</title>
        <meta name="description" content="SurveyJS Dashboard for React - Table View" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TableViewComponent />
    </>
  );
}