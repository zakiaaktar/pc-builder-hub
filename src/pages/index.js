import AllPcs from "@/components/UI/AllPcs";
import Banner from "@/components/UI/Banner";
import Head from "next/head";
import RootLayout from "../components/Layouts/RootLayout";


const HomePage = ({ allPcs }) => {
  //console.log(allPcs);

  return (
    <div>
      <Head>
        <title>PC BUILDER HUB</title>
        <meta name="home page" description="This page is cretaed by next js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Banner />

      <AllPcs allPcs={allPcs} />
    </div>
);
};

export default HomePage;


HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
};



export const getStaticProps = async () => {
  const res = await fetch("http://localhost:4000/pcs");
  const data = await res.json();
  //console.log(data);

  return {
    props: {
      allPcs: data,
    },
    //revalidate: 10,
  };
};

