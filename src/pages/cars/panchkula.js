import Citybuy from '../../components/Citybuy';
import Head from 'next/head';

export default function MohaliPage() {
  return (
    <>
      <Head>
        <title>Buy Cars in Panchkula | YourSiteName</title>
        <meta 
          name="description" 
          content="Find the best used cars for sale in Panchkula. Great deals on second-hand cars!" 
        />
      </Head>
      <Citybuy />
    </>
  );
}