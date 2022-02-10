import React, {useEffect} from 'react';
import './main.less'
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../actions/repos";
import Repo from "./repo/Repo";
import {logPlugin} from "@babel/preset-env/lib/debug";
import AccountMenu from "./Menu/AccountMenu";
import Home from "../../Pages/Home/Home";


const Main = () => {
  // const dispatch = useDispatch()
  // const repos = useSelector(state => state.repos.items)
  //
  // useEffect(()=>{
  //   dispatch(getRepos())
  // }, [])

  return (
    <div>
      <AccountMenu/>
      <Home/>
    </div>
  );
};

export default Main;