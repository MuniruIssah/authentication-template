import React,{useState} from 'react';
import {register} from "../api/server";
import Input from "../components/Input";
import Button from "../components/Button";
import {Link} from "react-router-dom";

const RegisterForm = () => {
    const [state,setState]=useState({
        firstName:'',
        lastName:'',
        email:'',
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
        let response=await register(state)
    }
    return (
        <form className={"flex flex-col space-y-4"} onSubmit={handleSubmit}>
            <h3 className={"text-2xl font-extrabold"}>Register</h3>
            <Input label={"First Name"} name={'firstName'} onChange={handleChange} required />
            <Input label={"Last Name"} name={'lastName'} onChange={handleChange} required />
            <Input label={"Email"} name={'email'} type={'email'} onChange={handleChange} required />
            <Input label={"Password"} name={'password'} onChange={handleChange} required />
            <Input label={"Confirm Password"} name={'confirm_password'} onChange={handleChange} required />
            <Button type={'submit'}>Register</Button>
            <Link to={'/auth/login'} className={'w-full text-center text-black underline hover:font-bold transition-all ease-in-out'}>Already have an Account? Login</Link>

        </form>
    );
};

export default RegisterForm;