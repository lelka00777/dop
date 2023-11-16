import React from 'react';
import { PageType } from '../data/dataState';
import { useLocation, useParams,Navigate } from 'react-router-dom';
import { Error404 } from './pages/Error404';


type PropsType={
    pages:PageType[]
}


export const Page:React.FC<PropsType> = ({pages}) => {
    const params = useParams()
   const location = useLocation()
   console.log(location.pathname)
 
    return (
        pages[Number(params.id)]
        ?
        <div>
       {pages[Number(params.id)].heading}
       {pages[Number(params.id)].about}
       
           Pages
        </div>
        : <Navigate to={"/page/error"} />
        // <Error404/>
    );
};


