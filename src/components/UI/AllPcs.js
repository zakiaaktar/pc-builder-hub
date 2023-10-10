import { Card, Col, Row } from "antd";
import Image from "next/image";
import {
  ArrowRightOutlined,
  
} from "@ant-design/icons";
import Link from "next/link";



const AllPcs = ({ allPcs }) => {
  const { Meta } = Card;
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
          color: "#E25E3E",
        }}
      >
        Featured Category
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allPcs?.map((pcs) => (
          <Col key={pcs.id} className="gutter-row" span={8}>
            <Card
              hoverable
              cover={
                <Image
                  src={pcs?.image_url}
                  width={100}
                  height={250}
                  responsive
                  alt="pcs image"
                />
              }
            >
              <Meta title={pcs?.title} />
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
                  fontSize: "15px",
                }}
              >
                <span>
                Price: ${pcs?.price} 
                </span>
                <span>
                Rating: {pcs?.rating} 
                </span>
                <span>
                  Category: {pcs?.category}
                </span>
              </p>

             
              <Link href={`/pcs/${pcs?.id}`}>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "20px",
                    backgroundColor: "#E25E3E",
                    color: "white",
                    width: "100%",
                    padding: "8px 7px ",
                    fontWeight: "300",
                    letterSpacing: "3px",
                    textAlign: "center",
                    
                  }}
                >
                  View Deatails <ArrowRightOutlined />
                </p>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllPcs;