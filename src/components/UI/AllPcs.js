import { Card, Col, Row } from "antd";
import Image from "next/image";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
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
          <Col key={pcs.id} className="gutter-row" span={6}>
            <Card
              hoverable
              cover={
                <Image
                  src={pcs?.image_url}
                  width={500}
                  height={200}
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
                  background: "#000",
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
                  fontSize: "12px",
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

              {/* <p style={{ fontSize: "15px" }}>
                {pcs?.description.length > 100
                  ? pcs?.description.slice(0, 70) + "..."
                  : pcs?.description}
              </p> */}
              <Link href={`/pcs/${pcs?.id}`}>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "20px",
                    backgroundColor: "black",
                    color: "white",
                    width: "100%",
                    padding: "2px 5px ",
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