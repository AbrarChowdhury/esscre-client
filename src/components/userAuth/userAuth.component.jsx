import React, {useState, useContext}from 'react'
import { useForm } from "react-hook-form";
import { UserContext } from '../../context/userContext'
const axios = require('axios');
function UserAuth() {
    const [hasAccount, setHasAccount]=useState(true)
    const toggleAccont = () => {
        hasAccount? setHasAccount(false):setHasAccount(true)
    } 
    return (
        <div>
            <h1>{ hasAccount? "Sign In":"Sign up" }</h1>
         {
            hasAccount ? <SignIn/> : <SignUP/>
         }
            <div>
                <p>{hasAccount? "Don't have an account?" : "already have an account?" }</p>
                <button onClick={ toggleAccont }>{hasAccount? "Sign Up":"Sign In"}</button>
            </div>
        </div>
    )
}

const SignIn = () => {
    const { authenticate } = useContext(UserContext)
    const onSubmit = data => {
        axios.post('http://localhost:5000/sign-in', data)
          .then(function (response) {
            console.log('response : ',response.data);
            if(response.data){
                const { username, _id, passion, profession}= response.data
                authenticate({username, _id, passion, profession})
                console.log('authenticate as', response.data.username)
            }else{
                console.log('did not authenticate')
            }
        })
          .catch(function (error) {
            alert('some error occured please try again')
          });
    };
    const { register, handleSubmit, watch, errors } = useForm();
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>User Name: </label>
                <input name="username" type="text" ref={register({ required: true })} />
                {errors.username && <span>Please enter correct name address</span>}
                
                <label>Password: </label>
                <input name="password" type="password" ref={register({ required: true })} />
                {errors.password && <span>Adding a good background story makes a big difference</span>}
                
                <input className="btn" value="Sign In" type="submit" />
            </form>   
        </div>
    )
}
const SignUP = ()=>{
    const { authenticate } = useContext(UserContext)
    const onSubmit = data => {
        axios.post('http://localhost:5000/sign-up', data)
          .then(function (response) {
            console.log('response : ',response.data);
            if(response.data){
                const { username, _id}= response.data
                const { passion, profession } = data
                authenticate({ _id, username, passion, profession})
                console.log('authenticate as', response.data.username)
            }else{
                console.log('did not authenticate')
            }
          })
          .catch(function (error) {
            alert('some error occured please try again')
          });
    };
    const { register, handleSubmit, watch, errors } = useForm();
    return(
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        
        <label>User name: </label>
        <input name="username" type="text" ref={register({ required: true })} />
        {errors.username && <span>Please enter an unique username</span>}
        
        <label>Password: </label>
        <input name="password" type="password" ref={register({ required: true })} />
        {errors.password && <span>Adding a good background story makes a big difference</span>}
        
        <label>Re-type Password: </label>
        <input name="rePassword" type="password" ref={register({ required: true })} />
        {errors.rePassword && <span>Adding a good background story makes a big difference</span>}
        
        <label>Email: </label>
        <input name="email" type="email" ref={register({ required: true })} />
        {errors.email && <span>Please enter correct email address</span>}
        
        <label>Phone: </label>
        <input name="phone" type="tel" length="11" ref={register({ required: true })} />
        {errors.email && <span>Please enter correct email address</span>}
        
        <label>Passion: </label>
        <input name="passion" type="text" ref={register({ required: true })} />
        {errors.email && <span>Please enter correct email address</span>}
        <input className="btn" value="Sign In" type="submit" />

        <label>Profession: </label>
        <input name="profession" type="text" ref={register({ required: true })} />
        {errors.email && <span>Please enter correct email address</span>}
    </form>  
        </div>
    )
}

export default UserAuth
