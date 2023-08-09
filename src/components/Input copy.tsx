import { ChangeEvent, useState } from "react";





export const Input = () => {

let[newTitle,setNewTitle]=useState('')
console.log(newTitle)

  const onchegeHandler = (event:ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.currentTarget.value)
  };

  return (
  <input type='text'onChange={onchegeHandler}/>
    )
};
