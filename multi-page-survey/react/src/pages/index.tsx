import Head from "next/head";
import SurveyComponent from "@/components/Survey";

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