import { Col, Row, Carousel } from "antd";
import {
    ArrowRightOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Banner1Image from "@/assets/images/banner-images/banner1.jpg";
import Banner3Image from "@/assets/images/banner-images/banner3.jpg";

const contentStyle = {
    height: "425px",
    color: "#000",
};

const Banner = () => (
    <Carousel effect="fade" autoplay style={{ margin: "20px 0px" }}>
        {/* slider-1 */}
        <div>
            <Row>
                <Col
                    lg={{
                        span: 8,
                    }}
                >
                    <h1 style={{ fontSize: "50px", color: "#E25E3E" }}>
                        Get Your
                        <br />
                        Desired Product
                    </h1>
                    <div
                        className="line"
                        style={{
                            height: "5px",
                            margin: "20px 0",
                            background: "#E25E3E",
                            width: "95%",
                        }}
                    ></div>
                    <p style={{ fontSize: "20px" }}>
                    Your journey to the perfect custom PC starts here. Simply use our PC builder tool to select your components, and watch as your custom PC takes shape.
                    </p>
                    <p
                        style={{
                            fontSize: "20px",
                            margin: "20px 0px",
                            backgroundColor: "#E25E3E",
                            color: "white",
                            width: "168px",
                            padding: "8px 7px ",
                            fontWeight: "300",
                            letterSpacing: "3px",
                        }}
                    >
                        More Info <ArrowRightOutlined />
                    </p>
                </Col>

                <Col
                    lg={{
                        span: 16,
                    }}
                    style={contentStyle}
                >
                    <Image src={Banner1Image} fill alt="Banner1Image" />
                </Col>
            </Row>
        </div>
        {/* slider-2 */}
        <div>
            <Row>
                <Col
                    lg={{
                        span: 8,
                    }}
                >
                    <h1 style={{ fontSize: "50px", color: "#E25E3E" }}>
                        Click Your
                        <br />
                        Desired Product
                    </h1>
                    <div
                        className="line"
                        style={{
                            height: "5px",
                            margin: "20px 0",
                            backgroundColor: "#E25E3E",
                            width: "95%",
                        }}
                    ></div>


                    <p style={{ fontSize: "20px" }}>
                    Your journey to the perfect custom PC starts here. Simply use our PC builder tool to select your components, and watch as your custom PC takes shape.
                    </p>
                    <p
                        style={{
                            fontSize: "15px",
                            margin: "20px 0px",
                            backgroundColor: "#E25E3E",
                            color: "white",
                            width: "168px",
                            padding: "8px 7px ",
                            fontWeight: "300",
                            letterSpacing: "3px",
                        }}
                    >
                        More Info <ArrowRightOutlined />
                    </p>
                </Col>

                <Col
                    lg={{
                        span: 16,
                    }}
                    style={contentStyle}
                >
                    <Image
                        src={Banner3Image}
                        fill
                        alt="Banner3Image"
                        style={{ grayScale: "-1" }}
                    />
                </Col>
            </Row>
        </div>
    </Carousel>
);
export default Banner;
