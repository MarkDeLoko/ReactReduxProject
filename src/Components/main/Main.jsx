import React from 'react';
import './main.less'
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