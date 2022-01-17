import Head from "next/head"
import { useState } from "react"
import Layout from "../../components/General/Layout/Layout"
import Quiz from "../../components/Quiz/Quiz"

export async function getStaticProps() {
    const res = await fetch(`https://quizapi.io/api/v1/questions?apiKey=${'FqLbGemg6mRDriw8un1gClNWyXEkQWvwF9Mnf7tr'}&limit=10`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            data,
        },
    }
}

const QuizPage = ({ data }) => {

    const [questionIndex, setQuestionIndex] = useState(0)

    const incrementIndex = () => setQuestionIndex(previousValue => previousValue + 1)

    return (
        <Layout>
            <Head>
                <title>Quiz Page</title>
            </Head>
            <section className='container md:container font-sans bg-white rounded-xl dark:bg-custom-dark-quiz dark:text-white'>
                <Quiz data={data[questionIndex]} questionIndex={questionIndex} incrementIndex={incrementIndex} />
            </section>
        </Layout>
    )
}

export default QuizPage