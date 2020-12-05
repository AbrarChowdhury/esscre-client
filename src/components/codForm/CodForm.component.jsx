import React from 'react'
import {useForm} from 'react-hook-form'
import './CodForm.styles.scss'
import api from '../../context/apiContext'
const axios = require('axios')

function CodForm({arts}){
    const { register, handleSubmit, watch, errors } = useForm();
    
    const onSubmit = data => {
        const postData = { ...data, arts }
        console.log('post data', postData )
        axios.post(`${api}/order`, postData)
            .then(function (response) {
                console.log("cod form post response: ",response)
                alert("your order has been placed");
            })
            .catch(function (error) {
                alert('Some error occured, please try again');
            })
        } 
    return (
        <div className="CodForm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name: </label>
                <input name="name" ref={register({ required: true })} />
                {errors.name && <span>Please enter your name</span>}
                
                <label>Phone: </label>
                <input name="phone" ref={register({ required: true })} />
                {errors.phone && <span>Please enter your phone number</span>}
                
                <label>Address: </label>
                <input name="address" ref={register({ required: true })} />
                {errors.address && <span>Please enter your delivery address</span>}
                
                <input className="btn" type="submit" value="place Order"/>
            </form>
        </div>
    )
}

export default CodForm
