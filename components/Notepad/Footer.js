import { PlusCircleIcon } from '@heroicons/react/solid'
import { Button, Space } from 'antd'
import Link from 'next/link'

const Footer = ({ homePage }) => {
    return (
        <div className='bg-gray-100 dark:bg-custom-bg-note pr-2 py-4'>
            {
                homePage ?
                    <Link href='/notepad/new-note' passHref>
                        <PlusCircleIcon className='text-custom-border-left-note w-10 ml-auto bg-white rounded-full cursor-pointer' />
                    </Link> :
                    <div className='text-center'>
                        <Space size='large'>
                            <Button type='primary'>ADD</Button>
                            <Button type='secondary'>Add Title</Button>
                            <Button type='danger'>Cancel</Button>
                        </Space>
                    </div>
            }
        </div>
    )
}

export default Footer