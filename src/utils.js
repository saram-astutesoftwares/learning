import { store } from "react-notifications-component";
import * as yup from "yup";
import { ACCESS_TOKEN, initialPopupState } from "./constants";

export const getAuthUser = () => {
    let token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
        return JSON.parse(token).user;
    } else {
        return false;
    }
}

export const getToken = () => {
    let token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
        return JSON.parse(token).access_token;
    } else {
        return false;
    }
}

export const setToken = (access_token) => {
    localStorage.setItem(ACCESS_TOKEN, JSON.stringify(access_token));
}

export const removeToken = () => {
    localStorage.removeItem(ACCESS_TOKEN);
}

export const success_alert = (message, title) => {
    let new_msg = "";
    if ((message[0] === '"' || message[0] === "'") && (message[message.length - 1] === '"' || message[message.length - 1] === "'")) {
        new_msg = message.substr(1, message.length - 2);
    } else {
        new_msg = message
    }
    store.addNotification({
        title: title ? title : "",
        message: new_msg,
        className: "noti",
        type: "success",
        insert: "bottom",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeInUp"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 7000,
            onScreen: true,
            showIcon: true
        }
    })
}

export const error_alert = (message, title) => {
    let new_msg = "";
    if ((message[0] === '"' || message[0] === "'") && (message[message.length - 1] === '"' || message[message.length - 1] === "'")) {
        new_msg = message.substr(1, message.length - 2);
    } else {
        new_msg = message
    }
    store.addNotification({
        title: title ? title : "",
        message: new_msg,
        className: "noti",
        type: "danger",
        insert: "bottom",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__slideInRight"],
        animationOut: ["animate__animated", "animate__slideOutBottom"],
        dismiss: {
            duration: 7000,
            onScreen: true,
            showIcon: true
        }
    })
}

export const warning_alert = (message, title) => {
    store.addNotification({
        title: title ? title : "",
        message: message,
        type: "warning",
        insert: "bottom",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 7000,
            onScreen: true,
            showIcon: true
        }
    })
}


export function stringNotEmpty() {
    return yup.mixed().test({
        name: 'stringNotEmpty',
        exclusive: false,
        message: "Required",
        test: function (value) {
            if (value !== undefined && value !== false) {
                return value.trim() !== "";
            } else if (value === undefined) {
                return false
            }
        },
    });
}

export const selectStyles = error => (
    {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: state.isDisabled ? "#fff" : "#fff",
            borderRadius: "0.375rem",
            border: state.isDisabled ? "2px solid #e4e4e4" : state.isFocused ? "2px solid #40e0d0" :  state.isSelected ? "2px solid #ef4444" : state.hasValue ? "2px solid #40e0d0": error ? "2px solid #ef4444": "2px solid #cbd5e1",
            boxShadow: state.isFocused ? "0px 0px 6px #40e0d0" : "none",
            "&:hover": {
                border: "2px solid #40e0d0",
                boxShadow: "0px 0px 6px #40e0d0"
            },
            fontSize: "1rem",
            "@media (max-width:1024px)": {
                fontSize: "0.875rem"
            }
            
        }),
        option: (provided, state) => {
            return ({
                ...provided,
                background: state.isSelected ? "#40e0d0" : "white",
                color: state.isSelected ? "#000" : "#500",
                "&:hover": {
                    "background": "#40e0d0",
                    color: "#500"
                },
                fontSize: "1rem",
                "@media (max-width:1024px)": {
                    fontSize: "0.875rem"
                }
            })
        },
        
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
    
            return { ...provided, opacity, transition };
        }
    }
)
export const selectStylesFilter = error => (
    {
        
        control: (provided, state) => ({
            ...provided,
            height: "12px",
            fontSize: "12px",
            backgroundColor: state.isDisabled ? "#fff" : "#fff",
            borderRadius: "0.375rem",
            border: state.isDisabled ? "2px solid #e4e4e4" : state.isFocused ? "2px solid #40e0d0" :  state.isSelected ? "2px solid #ef4444" : state.hasValue ? "2px solid #40e0d0": error ? "2px solid #ef4444": "2px solid #cbd5e1",
            boxShadow: state.isFocused ? "0px 0px 6px #40e0d0" : "none",
            "&:hover": {
                border: "2px solid #40e0d0",
                boxShadow: "0px 0px 6px #40e0d0"
            },
            
        }),
        
        option: (provided, state) => {
            return ({
                ...provided,
                background: state.isSelected ? "#40e0d0" : "white",
                color: state.isSelected ? "#000" : "#500",
                fontSize: "12px",
                "&:hover": {
                    "background": "#40e0d0",
                    color: "#500"
                },
            })
        },
        
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
    
            return { ...provided, opacity, transition, fontSize: "12px" };
        }
    }
)


export const hidePopup = (setState) => {
    setState(initialPopupState)
}

export const phoneRegExp = /^((\\+[0-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

// export const isUrl = (string) => {
//     let url;
    
//     try {
//       url = new URL(string);
//     } catch (_) {
//       return false;  
//     }
  
//     return url.protocol === "http:" || url.protocol === "https:";
//   }
export const isUrl = (string) => {
    // if(string){
    //     return string.includes("/")
    // } else{
    //     return false
    // }
    const urlPattern = /^(?:(?:https?|ftp):\/\/)?(?:www\.)?(?:[\w-]+\.)+[a-z]{2,}(?::\d+)?(?:\/[\w#!:.?+=&%@!-]*)?$/i;
    return urlPattern.test(string);

  }

export const generateProfileQrLink = (value) => {
    return document.location.origin+"/profile/" + value
}

export const normalizeUrl = (str) => {
    if (str.startsWith("https://")) {
      return str;
    } else {
      return "https://" + str;
    }
  }
  