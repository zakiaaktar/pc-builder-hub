import AllPcs from "@/components/UI/AllPcs";
import Head from "next/head";
import RootLayout from "../components/Layouts/RootLayout";


const HomePage = ({allPcs}) => {
  //console.log(allPcs);

  return (
    <div>
      <Head>
        <title>pc builder hub</title>
        <meta name="home page" description="this page is cretaed by next js" />
      </Head>
      


      <AllPcs allPcs={allPcs}/>

      
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

