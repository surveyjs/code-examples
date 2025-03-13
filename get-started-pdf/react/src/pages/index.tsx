import Head from "next/head";
import dynamic from 'next/dynamic';

const SurveyComponent = dynamic(() => import("@/components/Survey"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>SurveyJS PDF Generator for React</title>
        <meta name="description" content="SurveyJS PDF Generator for React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SurveyComponent />
    </>
  );
}