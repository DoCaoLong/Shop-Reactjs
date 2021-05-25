import { Redirect, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
import { useSelector } from "react-redux";


export function PrivateRoute(prop){

  let  {login} = useSelector((store) => store.auth);

    if(!login){
        // setTimeout(()=>{
        //     document.querySelector('.popup-login').style.display="flex"
        // }, 0)
        return (
          <Route>
            <Redirect to="/" />
          </Route>
        );
    }

    return <Route {...prop}/>
}