import { SubmissionError } from 'redux-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
    console.log('submit')
    return sleep(1000).then(() => {
        console.log('success')
    })
}

export default submit