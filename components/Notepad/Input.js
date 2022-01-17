import TextArea from "antd/lib/input/TextArea"

const Input = () => {
    return (
        <div className="mb-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 overflow-y-scroll">
           <TextArea rows={40} maxLength={3000} autoFocus={true} className="border-0 outline-none text-xl p-10 focus:border-transparent resize-none overflow-y-hidden dark:bg-custom-bg2-note dark:text-white" />
        </div>
    )
}

export default Input