import Head from "next/head";
import SurveyComponent from "@/components/Survey";

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