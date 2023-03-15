import React from 'react'
import Login from "@/pages_content/Login";
import {setCookie, getCookies, deleteCookie} from "cookies-next";

export const getServerSideProps = (context) => {
  // console.log(context.req.cookies, "this is dev")
  // setCookie("saram_done", "1234567", {httpOnly: true, path: "/"})
  // deleteCookie("pro-wears-auth", context)
  // deleteCookie("pro-wears-name_id", context)
  console.log("here are the cookies", getCookies(context))
  console.log("here are the cookies", getCookies(context))
  
  return {
    props: {}
  }
}

const LoginPage = () => {
  return (
    <Login/>
  )
}

export default LoginPage