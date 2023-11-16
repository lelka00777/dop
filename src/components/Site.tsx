import React from "react";
import styles from "./Site.module.css";
import { Page } from "./Page";

import { Error404 } from "./pages/Error404";
import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { S } from "./markUp/_styles";
import { dataState } from "../data/dataState";

export const Site = () => {
  return (
    <div>
      <div className={styles.header}>
        <h1>HEADER</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <div>
            {/* NavLink  Вместо a href */}
            {/* <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.navlink
              }
              to={"/page1"}
            >
              page1
            </NavLink> */}
        {/* <S.NevWrapper><NavLink to={"/page1"}>page1</NavLink> </S.NevWrapper> */}
       <S.NevWrapper><NavLink to={'/page/0'}>page1</NavLink> </S.NevWrapper>
       <S.NevWrapper><NavLink to={'/page/1'}>page2</NavLink> </S.NevWrapper>
       <S.NevWrapper><NavLink to={'/page/2'}>page3</NavLink> </S.NevWrapper>
            
          </div>
        </div>
        <div className={styles.content}>
          <Routes>
            {/* <Route path={"/"} element={<PageOne />}/> */}
            <Route path={"/"} element={<Navigate to={"/page1"} />} /> //
            ссылаемся на /page1'
            <Route path={'/page/:id'} element={<Page pages={dataState.pages}/>} />
           
            <Route path={"/page/error"} element={<Error404 />} /> // path={"/*"} если не
            совпадает адресс отрисовывается компонента 404

// вариант игоря ошибки 404
{/* <Route path={"/page/error"} element={<Error404 />} /> 
<Route path={"/*"} element={<Navigate to={"/page/error" } />} /> */}


          </Routes>
        </div>
      </div>
    </div>
  );
};


