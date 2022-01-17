import { TrashIcon } from '@heroicons/react/solid'

const List = () => {
    return (
        <li className='flex items-center bg-white border-l-8 dark:bg-custom-bg2-note border-custom-border-left-note dark:border-custom-bg2-note my-1 list-none py-5 pl-2 pr-3'>
            <div>
                <p className='text-base dark:text-gray-300'>Daily Nuggets</p>
                <p className='text-green-300 text-sm'>Category</p>
                <p className='text-gray-400 text-sm'>Nov 31, 2021, 8:49 PM</p>
            </div>
            <div className='ml-auto'>
                <TrashIcon className='text-red-500 w-7' />
            </div>
        </li>
    )
}

export default List
