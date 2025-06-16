import type { ButtonHTMLAttributes, ReactNode } from "react";


interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
className:string;

children:ReactNode;

}

const Buttons =({className,children,...rest}:IProps)=>{
return <button className={`${className}  duration-300 p-2 rounded-lg text-white`} {...rest}>{children}</button>

}

export default Buttons ;