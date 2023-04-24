import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";


const Layout = (props) => {
    return (<>
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <link rel="icon" href="" />
        </Head>
        <Header />
        {props.children}
        <Footer />
    </>);
}

export default Layout;