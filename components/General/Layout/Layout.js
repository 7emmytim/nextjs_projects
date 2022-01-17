import './layout.module.css'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Switch from 'antd/lib/switch'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'

const Layout = ({ children, removeBackground }) => {

    const { theme, setTheme } = useTheme()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const switchTheme = () => {
        isMounted && setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <main
            className={`bg-blue-100 h-screen dark:bg-custom-dark-quiz dark:text-white ${!removeBackground && 'py-20 lg:py-40'}`}
        >
            {
                !removeBackground &&
                <div className='container text-center mb-5'>
                    <Switch
                        checkedChildren={<SunIcon />}
                        unCheckedChildren={<MoonIcon />}
                        onChange={switchTheme}
                        defaultChecked
                    />
                </div>
            }
            {children}
        </main>
    )
}

export default Layout