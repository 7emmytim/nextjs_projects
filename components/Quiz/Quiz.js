import Form from 'antd/lib/form'
import Radio from 'antd/lib/radio'
import Space from 'antd/lib/space'
import { useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { Checkbox } from 'antd'

const Quiz = ({ data, questionIndex, incrementIndex }) => {

    const [quizForm] = Form.useForm()
    const [showAnswer, setShowAnswer] = useState(false)
    const [score, setScore] = useState(0)

    const correctAnswersArr = Object.keys(data.correct_answers).filter(item => data.correct_answers[item] === 'true')

    const tags = data.tags.map(item => {
        return { ...item, color: 'red' }
    })

    const handleFinish = value => {
        const { answer_value } = value
        const isCorrect = correctAnswersArr.includes(`${answer_value}_correct`)
        setShowAnswer(true)
        isCorrect && setScore(previousScore => previousScore + 1)
        console.log(data, value)
    }

    const handleIncrement = () => {
        setShowAnswer(false)
        quizForm.setFieldsValue({ answer_value: undefined })
        incrementIndex()
    }

    return (
        <div className=''>
            <div className='p-10 md:p-20'>
                <p>TAGS: {tags.map(item => <span key={item.name} className='bg-custom-light-quiz px-2 text-white ml-2' >{item.name}</span>)}</p>
                {/* <p>DIFFICULTY: {data.difficulty}</p> */}
                <h1 className='text-center text-3xl dark:text-white font-semibold mt-5'>{data.question}</h1>
                <Form
                    className='mt-10'
                    layout='vertical'
                    form={quizForm}
                    onFinish={handleFinish}
                >
                    <Form.Item
                        name='answer_value'
                        rules={[{ required: true, message: 'Please select an answer' }]}
                    >
                        {
                            data.multiple_correct_answers === 'true' ?
                                <Checkbox.Group>
                                    <Space direction='vertical' size='large'>
                                        {
                                            Object.keys(data.answers).map(item => {
                                                return (
                                                    data.answers[item] &&
                                                    <Checkbox disabled={showAnswer} key={item} value={item}>
                                                        <div className='flex items-center dark:text-white'>{data.answers[item]}
                                                            {(correctAnswersArr.includes(`${item}_correct`)) && showAnswer &&
                                                                <CheckCircleIcon className="w-7 ml-5 text-green-500 bg-white animate-bounce" />
                                                            }
                                                        </div>
                                                    </Checkbox>
                                                )
                                            })
                                        }
                                    </Space>
                                </Checkbox.Group>
                                :
                                <Radio.Group optionType='button' buttonStyle='solid'>
                                    <Space direction='vertical' size='large'>
                                        {
                                            Object.keys(data.answers).map(item => {
                                                return (
                                                    data.answers[item] &&
                                                    <Radio disabled={showAnswer} key={item} value={item}>
                                                        <div className='flex items-center dark:text-white'>{data.answers[item]}
                                                            {(correctAnswersArr.includes(`${item}_correct`)) && showAnswer &&
                                                                <CheckCircleIcon className="w-7 ml-5 text-green-500 bg-white rounded-full animate-bounce" />
                                                            }
                                                        </div>
                                                    </Radio>
                                                )
                                            })
                                        }
                                    </Space>
                                </Radio.Group>
                        }
                    </Form.Item>

                    {
                        questionIndex >= 9 ?
                            <button className='rounded-md bg-yellow-400 w-full py-2 mt-5'>
                                <p className='text-center text-white text-xl'>Finish</p>
                            </button>
                            :
                            showAnswer ?
                                <button onClick={handleIncrement} className='rounded-md bg-custom-light-quiz w-full py-2 mt-5'>
                                    <p className='text-center text-white text-xl'>Next</p>
                                </button>
                                :
                                <Form.Item>
                                    <button htmltype='submit' className='rounded-md bg-custom-light-quiz w-full py-2 mt-5'>
                                        <p className='text-center text-white text-xl'>check answer</p>
                                    </button>
                                </Form.Item>
                    }
                </Form>
            </div>
        </div>
    )
}

export default Quiz
