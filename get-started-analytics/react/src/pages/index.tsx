import Head from "next/head";
import dynamic from 'next/dynamic';

const DashboardComponent = dynamic(() => import("@/components/Dashboard"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>SurveyJS Dashboard for React</title>
        <meta name="description" content="SurveyJS Dashboard for React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardComponent />
    </>
  );
}