import Head from "next/head"
import Layout from "../../components/General/Layout/Layout"
import Footer from "../../components/Notepad/Footer"
import Header from "../../components/Notepad/Header"
import Overview from "../../components/Notepad/Overview"

const Notepad = () => {

    return (
        <Layout removeBackground>
            <Head>
                <title>Notepad</title>
            </Head>
            <section className='flex flex-col mx-0 font-sans bg-white dark:bg-custom-bg2-note h-screen'>
                <Header homePage />
                <Overview />
                <Footer homePage />
            </section>
        </Layout>
    )
}

export default Notepad
