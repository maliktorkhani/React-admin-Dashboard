import axios from 'axios'
import { 
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CLEAR_ERRORS } from '../constants/userConstant'

//Login
export const login = (email, password) => async (dispatch) =>{
    try {

        dispatch({ type: LOGIN_REQUEST})

        const config = {
            headers:{
                'content-type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/v1/login',{email, password}, config)

        dispatch({
             type: LOGIN_SUCCESS,
             payload: data.user
        })
        
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })        
    }
}

//Register User
export const register = (userData) => async (dispatch) =>{
    try {

        dispatch({ type: REGISTER_USER_REQUEST})

        const config = {
            headers:{
                'content-type': 'multipart/form-data'
            }
        }

        const { data } = await axios.post('/api/v1/register', userData, config)

        dispatch({
             type: REGISTER_USER_SUCCESS,
             payload: data.user
        })
        
    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message
        })        
    }
}
// Logout User
export const logout = () => async (dispatch) =>{
    try {

        dispatch({ type: LOAD_USER_REQUEST})

        await axios.get('/api/v1/logout')

        dispatch({
             type: LOGOUT_SUCCESS
        })
        
    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message
        })        
    }
}


// Clear Errors
export const clearErrors = () => async (dispatch) =>{
    dispatch({
        type:CLEAR_ERRORS
    })
}
