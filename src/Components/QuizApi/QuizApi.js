import  axios  from "axios"
export const apiClient =axios.create(
    {
        baseURL:'http://localhost:8080'
    }
)

export const retreiveAllQuiz=()=>apiClient.get(`/question/allQuestion`)
export const retreiveQuestionById=(id)=>apiClient.get(`/question/getQuestion/${id}`)
export const updateQuestionApi=(id,changes)=>apiClient.put(`/question/update/${id}`,changes)
export const createNewQuestionApi=(changes)=>apiClient.post(`/question/add`,changes)
export const deleteQuestionById=(id)=>apiClient.delete(`/question/delete/${id}`)
