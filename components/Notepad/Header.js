import Switch from 'antd/lib/switch'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button, Space } from 'antd'

const Header = ({ homePage }) => {

    const { theme, setTheme } = useTheme()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const switchTheme = () => {
        isMounted && setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <nav className='bg-gray-100 dark:bg-custom-bg-note dark:text-white text-2xl font-light'>
            <div className='flex items-center py-5 px-3'>
                <div>
                    NOTEBOOK
                </div>
                <div className='mb-1 ml-auto bg-transparent'>
                    <Switch
                        className='bg-blue-500'
                        checkedChildren={<SunIcon />}
                        unCheckedChildren={<MoonIcon />}
                        onChange={switchTheme}
                        defaultChecked
                    />
                </div>
            </div>
            {/* {
                !homePage &&
                
            } */}
        </nav>
    )
}

export default Header
