import React, {useState} from 'react';
import {forgotPassword} from "../api/server";
import Input from "../components/Input";
import Button from "../components/Button";

const ForgotPasswordForm = () => {
    const [state,setState]=useState({
        email:''
    })
    const handleChange=({target:{name,value}})=>{
        setState({...state,[name]:value})
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        let response=await forgotPassword(state)
    }
    return (
        <form className={"flex flex-col space-y-4"} onSubmit={handleSubmit}>
            <h3 className={"text-2xl font-extrabold"}>Forgot Password</h3>
            <Input label={"Email"} name={'email'} type={'email'} onChange={handleChange} required />
            <Button type={'submit'}>Submit</Button>
        </form>
    );
};

export default ForgotPasswordForm;