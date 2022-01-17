import Footer from "../../components/Notepad/Footer"
import Header from "../../components/Notepad/Header"
import Input from "../../components/Notepad/Input"

const NewNote = () => {
    return (
        <section className='flex flex-col font-sans bg-white dark:bg-custom-bg2-note h-screen'>
            <Header />
            <Input />
            <Footer />
        </section>
    )
}

export default NewNote
