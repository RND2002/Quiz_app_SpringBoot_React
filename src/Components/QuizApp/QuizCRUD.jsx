import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'

const QuizCRUD = () => {
  return (
    <div>
        <div className='alert alert-primary container'>Enter question details</div>
        <div className='container'>
            <Formik>
                {
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
                <div>
                                <button className="btn btn-success m-5" type="submit">Save</button>
                            </div>
              </Form>
                }
            </Formik>
        </div>
    </div>
  )
}

export default QuizCRUD
