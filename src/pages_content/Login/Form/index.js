import React from 'react'
import * as yup from "yup";
import { Formik, Form } from "formik";
import { error_alert, setToken, stringNotEmpty, success_alert } from '@/utils';
import TextField from "@/components/FormikFields/TextField";
import {BiLoaderAlt} from "react-icons/bi";
// import { Axios } from '../../api';
import {Axios} from "@/api"
import Link from 'next/link';
import { setCookie } from 'cookies-next';
import { ACCESS_TOKEN, ACCESS_USER } from '@/constants';
import { redirect } from 'next/navigation';
import {useRouter} from 'next/router'




const Login = () => {
    const router = useRouter()
    const initialValues = {
        email: "",
        password: "",
    }
    // yup.addMethod(yup.string, 'stringNotEmpty', stringNotEmpty)
    const validationSchema = yup.object({
        email: yup.string().required("required"),
        password: yup.string().required("required"),
    })

    const handleSubmit = async (values, formikBag) => {
        try{
            console.log("values")
            const result = await Axios.post("http://192.168.18.177:8001/api/user/login/admin", values, {requestId: "login-post"});
            setCookie(ACCESS_TOKEN, result.data.payload.access_token, {path:'/'})
            setCookie(ACCESS_USER, JSON.stringify([result.data.payload.name, result.data.payload.sure_name, result.data.payload.id, result.data.payload.email]), {path:'/'})
            console.log(redirect)
            router.push('/')
        } catch(e){
            if(e.response){
                error_alert(JSON.stringify(e.response.data.description))
            } else{
                error_alert("Network Error!")
            }
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {
                form => (
                    <Form className='w-10/12 mx-auto'>
                        <>
                           
                            <div className="grid grid-cols-1 gap-4">
                                <TextField
                                    field="email"
                                    label_text={"Email*"}
                                    form={form}
                                />
                                <TextField
                                    field="password"
                                    label_text={"Password*"}
                                    form={form}
                                    password
                                />

                                <div className="flex items-center mt-5">
                                    <button aria-label='Login' type="submit" disabled={form.isSubmitting} className='w-full btn btn-primary'>
                                        {
                                            form.isSubmitting ? 
                                            <BiLoaderAlt className="animate-spin text-3xl mx-auto"/>
                                            : "Login"
                                        }
                                    </button>
                                </div>

                                <hr className='mt-5'/>
                                <p className="text-sm text-center mt-2">
                                    Don't have an account? Sign up <Link className='text-primary underline font-medium' href="/register">here</Link>.
                                </p>
                                <p className="text-sm text-center mt-2">
                                    Have trouble logging in? Reset your password <Link className='text-primary underline font-medium' href="/forgot-password">here</Link>.
                                </p>
                            </div>
                        </>
                    </Form>
                )
            }
        </Formik>
    )
}

export default Login