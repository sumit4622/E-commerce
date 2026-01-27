import { useWatch } from "react-hook-form";


export const Passwordvalidation = (control) =>{

    const password = useWatch({control, name: "password", defaultValue: ""});
    const confirm_password = useWatch({control, name: "confirm_password", defaultValue: ""})

    const set_of_rule = [
        {label:'8+ Character', met: password.length >= 8},
        {label:'! Uppercase', met: /[A-Z]/.test(password)},
        {label: '1 number', met: /[0-9]/.test(password)},
        {label:'Special Char', met:/[!@#$%^&*]/.test(password)},
        {label: 'password Match', met: password === confirm_password && confirm_password !== ""}
    ]

    return set_of_rule
    
}