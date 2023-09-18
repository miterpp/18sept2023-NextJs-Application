//1. Import Area
import Head from 'next/head'
import Header from './Component/Header';
import Aside from './Component/Aside';
import Section from './Component/Section';
//Import something from 'some library/location';

//pages/_app.js
//Import 'some location';

//2. Function Defination Area
 function Home() {
  return (
    <>
      <Head>
        <title>Welcome to my first Nextjs Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
      <Aside />
      <Section />
      </main>

     <Footer />
    </>
  )
}


//3. Export Area
export  default Home;