import Head from "next/head";
import dynamic from 'next/dynamic';

const SurveyComponent = dynamic(() => import("@/components/Survey"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Multi-Page Survey | SurveyJS React Form Library</title>
        <meta name="description" content="Multi-Page Survey - SurveyJS React Form Library" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SurveyComponent />
    </>
  );
}