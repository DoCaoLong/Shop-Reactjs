import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import LoginAuth from "./component/LoginAuth";
import RegisterAuth from "./component/RegisterAuth";

export default function Auth() {
  
   let { login } = useSelector((store) => store.auth);
   if (login) {
     return <Redirect to="/account" />;
   }

  return (
    <section className="py-12">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            {/* Login */}
            <LoginAuth />
          </div>
          <div className="col-12 col-md-6">
            {/* Register */}
            <RegisterAuth />
          </div>
        </div>
      </div>
    </section>
  );
}
