import { Col, Row } from "antd";
import Image from "next/image";
import RootLayout from "@/components/Layouts/RootLayout";



const PcsDetailPage = ({ pcs }) => (
  <Row style={{ marginTop: "80px", alignItems: "center" }}>
    <Col md={6} lg={12}>
      <Image
        alt="example"
        src={pcs?.image_url}
        width={500}
        height={300}
        responsive
      />
    </Col>
    <Col md={6} lg={8} style={{ paddingLeft: "20px" }}>
      <h1 style={{ fontSize: "30px" }}>{pcs?.title}</h1>
      <span
        style={{
          color: "#E25E3E",
          display: "block",
          fontSize: "20px",
        }}
      >
      
      </span>
      <div
        className="line"
        style={{
          height: "5px",
          margin: "20px 0",
          background: "#E25E3E",
          width: "100%",
        }}
      ></div>

      <p
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          color: "gray",
          margin: "10px 0px",
          fontSize: "20px",
        }}
      >
      
        <span>
          Price: {pcs?.price}
        </span>
        <span>
          Rating: {pcs?.rating}
        </span>
        <span>
        Category: {pcs?.category} 
        </span>
        </p>
        </Col>
  </Row>
);
export default PcsDetailPage;


PcsDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};



export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:4000/pcs/${params.pcsId}`);
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      pcs: data,
    },
  };
};