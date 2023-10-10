import {
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const RootLayout = ({ children }) => {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="brand-logo">
          <h1>
            <Link
              href="/pcBuilder"
              style={{
                color: "white",
                background: "#E25E3E",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              PC BUILDER
            </Link>
          </h1>
        </div>
        <Menu theme="dark" mode="vertical" className={styles.menu_items}>
          
          <Link href="/category">
            <items
              style={{
                margin: "0px 25px",
               color: "#E25E3E",
              }}
            >
             Category
            </items>
          </Link>
         
        </Menu>
      </Header>

      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          PC BUILDER HUB
        </h2>
        <p className={styles.social_icons}>
          <Link href="">
            <FacebookFilled />
          </Link>
          <Link href="">
            <TwitterSquareFilled />
          </Link>
          <Link href="">
            <GoogleSquareFilled />
          </Link>
          <Link href="">
            <LinkedinFilled />
          </Link>
        </p>
        PC BUILDER HUB ©2023 Created by Zakia Aktar
      </Footer>
    </Layout>
  );
};
export default RootLayout;
