import Head from "next/head";
import dynamic from 'next/dynamic';

const SurveyCreatorWidget = dynamic(() => import("@/components/SurveyCreator"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Integrate Third-Party Components with SurveyJS</title>
        <meta name="description" content="Integrate Third-Party Components with SurveyJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SurveyCreatorWidget />
    </>
  );
}