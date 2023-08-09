import { ChangeEvent} from "react";

type PropsType={
  setNewTitle:(newTitle:string)=>void
  newTitle:string
}



export const Input = (props:PropsType) => {




  const onchegeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
    props.setNewTitle(event.currentTarget.value)
   
  }

  return (
  <input value={props.newTitle} type='text' onChange={onchegeHandler}/>
    )
};
