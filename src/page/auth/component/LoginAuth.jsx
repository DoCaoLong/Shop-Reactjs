import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useFormValidate from "../../../aseets/hook/useFormValidate";
import { LoginAciton} from "../../../redux/actions/AuthAction";

export default function LoginAuth() {
   
  let { loginError } = useSelector((store) => store.auth);
  
  let { form, error, inputChange, check } = useFormValidate(
    {
      email: "",
      password: "",
    },
    {
      rule: {
        email: {
          required: true,
          pattern: "email",
        },
        password: {
          required: true,
          min: 6,
          max: 32,
        },
      },
      message: {
        email: {
          required: "Email không được bỏ trống",
          pattern: "Email không đúng định dạng example@gmail.com",
        },
        password: {
          required: "Mật khẩu không được bỏ trống"
        },
      },
    }
  );

  // tác động lên store thì dùng dispatch
  let dispatch = useDispatch();

//   let st = useSelector((store) => store);
//   console.log(st);

  async function loginHandle(e) {
    e.preventDefault();
    let errObj = check();
    if (Object.keys(errObj).length === 0) {
      dispatch(LoginAciton(form));
    }
  }
  return (
    <div className="card card-lg mb-10 mb-md-0">
      <div className="card-body">
        {/* Heading */}
        <h6 className="mb-7">Returning Customer</h6>
        {/* Form */}
        <form>
          <div className="row">
            <div className="col-12">
              {/* Email */}
              <div className="form-group">
                <label className="sr-only" htmlFor="loginEmail">
                  Email Address *
                </label>
                <input
                  className="form-control form-control-sm"
                  value={form.email}
                  name="email"
                  onChange={inputChange}
                  id="loginEmail"
                  type="email"
                  placeholder="Email Address *"
                  required
                />
                {error.email && <p className="text-error">{error.email}</p>}
              </div>
            </div>
            <div className="col-12">
              {/* Password */}
              <div className="form-group">
                <label className="sr-only" htmlFor="loginPassword">
                  Password *
                </label>
                <input
                  className="form-control form-control-sm"
                  value={form.password}
                  name="password"
                  onChange={inputChange}
                  id="loginPassword"
                  type="password"
                  placeholder="Password *"
                  required
                />
                {error.password && (
                  <p className="text-error">{error.password}</p>
                )}
              </div>
            </div>
            <div className="col-12 col-md">
              {/* Remember */}
              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    id="loginRemember"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="loginRemember"
                  >
                    Remember me
                  </label>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-auto">
              {/* Link */}
              <div className="form-group">
                <a
                  className="font-size-sm text-reset"
                  data-toggle="modal"
                  href="#modalPasswordReset"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="col-12">
              {loginError && <p className="text-error">{loginError}</p>}
              {/* Button */}
              <Link
                onClick={loginHandle}
                className="btn btn-sm btn-dark"
                type="submit"
                // to="/account"
                to=""
              >
                Sign In
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}