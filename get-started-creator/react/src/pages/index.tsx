import Head from "next/head";
import dynamic from 'next/dynamic';

const SurveyCreatorComponent = dynamic(() => import("@/components/SurveyCreator"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>SurveyJS React Form Builder</title>
        <meta name="description" content="SurveyJS React Form Builder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SurveyCreatorComponent />
    </>
  );
}