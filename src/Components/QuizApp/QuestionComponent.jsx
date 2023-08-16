import React, { useEffect, useState } from 'react'
import './QuestionComponent.css'
import { retreiveAllQuiz } from '../QuizApi/QuizApi'

const QuestionComponent = () => {

    // const questions = [
    //     { id: 1, description: 'Who created Java Programming language', option1: 'Denis Ritchie', option2: 'James Gosling', option3: 'MSD', option4: 'Guido Van Rossum' },
    //     { id: 1, description: 'Who created Python Programming language', option1: 'Denis Ritchie', option2: 'James Gosling', option3: 'MSD', option4: 'Guido Van Rossum' }
    // ]
    const [getQuestion,setQuestion]=useState([])

    useEffect(
        ()=>{refreshQuestion()
        },[]
    )
    function refreshQuestion(){
        retreiveAllQuiz()
        .then(response=>{
           setQuestion(response.data)
            console.log(response)
        })
        .catch(error=>console.log(error))
    }
    return (
        <div className='container'>
            <div>
                {
                    getQuestion.map(
                        question => (
                            <>
                                <div class="container1 mt-sm-5 my-1">
                                    <div class="question ml-sm-5 pl-sm-5 pt-2">
                                        <div class="py-2 h5"><b>{question.question}</b></div>
                                        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                                            <label class="options">{question.option1}
                                                <input type="radio" name="radio"/>
                                                    <span class="checkmark"></span>
                                            </label>
                                            <label class="options">{question.option2}
                                                <input type="radio" name="radio"/>
                                                    <span class="checkmark"></span>
                                            </label>
                                            <label class="options">{question.option3}
                                                <input type="radio" name="radio"/>
                                                    <span class="checkmark"></span>
                                            </label>
                                            <label class="options">{question.option4}
                                                <input type="radio" name="radio"/>
                                                    <span class="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center pt-3">
                                        <div id="prev">
                                            <button class="btn btn-primary">Previous</button>
                                        </div>
                                        <div class="ml-auto mr-sm-5">
                                            <button class="btn btn-success">Next</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    )
                }
            </div>

        </div>
    )
}

export default QuestionComponent