import React from 'react';
import './main.less'
import AccountMenu from "./Menu/AccountMenu";
import UserPage from "../../Pages/User/Home";


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
      <UserPage/>
    </div>
  );
};

export default Main;