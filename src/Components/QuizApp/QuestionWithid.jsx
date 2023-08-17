import React, { useEffect, useState } from 'react'
import { createNewQuestionApi, retreiveAllQuiz, retreiveQuestionById, updateQuestionApi } from '../QuizApi/QuizApi'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import { useNavigate,useParams } from 'react-router-dom'
import QuestionComponent from './QuestionComponent'

const QuestionWIthid = () => {

  const[question,setQuestion]=useState('')
  const[option1,setOption1]=useState('')
  const[option2,setOption2]=useState('')
  const[option3,setOption3]=useState('')
  const[option4,setOption4]=useState('')
  const[category,setCategory]=useState('')
  const[correctOption,setCorrectOption]=useState('')

  const {id}=useParams()

  const navigate=useNavigate()

  useEffect(
    () => retreiveQuestionWithid(),
    [id]
    )
    function retreiveQuestionWithid(){
      if(id!=-1){
        retreiveQuestionById(id)
        .then(response=>{
          setQuestion(response.data.question)
          setOption1(response.data.option1)
          setOption2(response.data.option2)
          setOption3(response.data.option3)
          setOption4(response.data.option4)
          setCategory(response.data.category)
          setCorrectOption(response.data.correctOption)
        })
        .catch(error=>console.log(error))
      }
    }

    function onSubmit(values){
      console.log(values)
      const changes={
        id:id,
        question:values.question,
        option1:values.option1,
        option2:values.option2,
        option3:values.option3,
        option4:values.option4,
        correctOption:values.correctOption,
        category:values.category
      }
      if(id==-1){
        createNewQuestionApi(changes)
        .then(response=>{
          navigate('/question')
        }).catch(error=>console.log(error))
      }else{
        updateQuestionApi(id,changes)
        .then(response=>{
          navigate('/question')
        }).catch(error=>console.log(error))
      }
    }


  return (
    <div> 
          <div className='alert alert-primary container'>Enter question details</div>
        <div className='container'>
            <Formik initialValues={{question,option1,option2,option3,option4,category,correctOption}}
            enableReinitialize={true}
            onSubmit = {onSubmit}
            >
                {
                   (props) => (
              <Form>
                      <fieldset className='form-group'>
                    <label>Question</label>
                    <Field type="text" className='form-control' name="question"/>
                </fieldset>
                <fieldset className='form-group'>
                    <label>1</label>
                    <Field type="text" className='form-control' name="option1"/>
                </fieldset>
                <fieldset className='form-group'>
                    <label>2</label>
                    <Field type="text" className='form-control' name="option2"/>
                </fieldset>
                <fieldset className='form-group'>
                    <label>3</label>
                    <Field type="text" className='form-control' name="option3"/>
                </fieldset>
                <fieldset className='form-group'>
                    <label>4</label>
                    <Field type="text" className='form-control' name="option4"/>
                </fieldset>
                <fieldset className='form-group'>
                    <label>Correct Answer</label>
                    <Field type="text" className='form-control' name="correctOption"/>
                </fieldset>
                <fieldset className='form-group'>
                    <label>Question Category</label>
                    <Field type="text" className='form-control' name="category"/>
                </fieldset>
                <div>
                                <button className="btn btn-success m-5" type="submit">Save</button>
                            </div>
              </Form>
                   )
                }
            </Formik>
        </div>
    </div>
  )
}

export default QuestionWIthid
