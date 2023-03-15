import { ACCESS_TOKEN, ACCESS_USER } from "@/constants";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

export const useClientUser = () => {
    const [user, setUser] = useState(false);

    useEffect(() => {
        const token = getCookie(ACCESS_TOKEN)
        let user = getCookie(ACCESS_USER)
        if(token && user){
            user = JSON.parse(user);
            setUser({
                first_name: user[0],
                last_name: user[1],
                id: user[2],
                email: user[3],

            })
        }
    }, [])
    
    return user
}