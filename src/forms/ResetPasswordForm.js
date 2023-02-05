import React, {useState} from 'react';
import Input from "../components/Input";
import Button from "../components/Button";
import {resetPassword} from "../api/server";

const ResetPasswordForm = () => {
    const [state,setState]=useState({
        password:'',
        confirm_password:''
    })
    const handleChange=({target:{name,value}})=>{
        setState({...state,[name]:value})
    }
    const confirmPassword=(password,confirmation)=>{
        return password===confirmation;
    }

    const handleSubmit=async (e)=>{
        e.preventDefault();
        if(!confirmPassword(state.password,state.confirm_password)) return;
        let response=await resetPassword(state)
    }
    return (
        <form className={"flex flex-col space-y-4"} onSubmit={handleSubmit}>
            <h3 className={"text-2xl font-extrabold"}>Reset Password</h3>
            <Input label={"New Password"} name={'password'} onChange={handleChange} required />
            <Input label={"Confirm Password"} name={'confirm_password'} onChange={handleChange} required />
            <Button type={'submit'}>Submit</Button>
        </form>
    );
};

export default ResetPasswordForm;