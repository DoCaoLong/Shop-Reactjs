import { useDispatch, useSelector } from "react-redux";
import useFormValidate from "../../../aseets/hook/useFormValidate";
import {RegisActiton } from "../../../redux/actions/AuthAction";

export default function RegisterAuth(){
  let { registerError } = useSelector((store) => store.auth);
  let { form, error, inputChange, check } = useFormValidate(
    {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    {
      rule: {
        first_name: {
          required: true,
          pattern: "name",
        },
        last_name: {
          required: true,
          pattern: "name",
        },
        email: {
          required: true,
          pattern: "email",
        },
        password: {
          required: true,
          min: 6,
          max: 32,
          check: "password",
        },
        confirm_password: {
          required: true,
          confirm_password: true,
        },
       },
      message: {
        first_name: {
          required: "Tên không được bỏ trống",
          pattern: "Tên được viết bằng chữ in hoặc chữ thường",
        },
        last_name: {
          required: "Họ không được bỏ trống",
          pattern: "Họ được viết bằng chữ in hoặc chữ thường",
        },
        email: {
          required: "Email không được bỏ trống",
          pattern: "Email không đúng định dạng example@gmail.com",
        },
        password: {
          required: "Mật khẩu không được bỏ trống",
        },
        confirm_password: {
          required: "Vui lòng nhập lại mật khẩu",
        },
      },
    }
  );
  // tác động lên store thì dùng dispatch
  let dispatch = useDispatch();
  
  async function loginHandle(e) {
    e.preventDefault();

    let errObj = check();

    if (Object.keys(errObj).length === 0) {
      dispatch(RegisActiton(form));
    }
  }
  return (
    <div className="card card-lg">
      <div className="card-body">
        {/* Heading */}
        <h6 className="mb-7">New Customer</h6>
        {/* Form */}
        <form>
          <div className="row">
            <div className="col-12">
              {/* Email */}
              <div className="form-group">
                <label className="sr-only" htmlFor="registerFirstName">
                  First Name *
                </label>
                <input
                  className="form-control form-control-sm"
                  id="registerFirstName"
                  type="text"
                  placeholder="First Name *"
                  name="first_name"
                  value={form.first_name}
                  onChange={inputChange}
                  required
                />
                {error.first_name && (
                  <p className="text-error">{error.first_name}</p>
                )}
              </div>
            </div>
            <div className="col-12">
              {/* Email */}
              <div className="form-group">
                <label className="sr-only" htmlFor="registerLastName">
                  Last Name *
                </label>
                <input
                  className="form-control form-control-sm"
                  id="registerLastName"
                  type="text"
                  name="last_name"
                  value={form.last_name}
                  onChange={inputChange}
                  placeholder="Last Name *"
                  required
                />
                {error.last_name && (
                  <p className="text-error">{error.last_name}</p>
                )}
              </div>
            </div>
            <div className="col-12">
              {/* Email */}
              <div className="form-group">
                <label className="sr-only" htmlFor="registerEmail">
                  Email Address *
                </label>
                <input
                  className="form-control form-control-sm"
                  id="registerEmail"
                  type="email"
                  placeholder="Email Address *"
                  name="email"
                  value={form.email}
                  onChange={inputChange}
                  required
                />
                {error.email && <p className="text-error">{error.email}</p>}
              </div>
            </div>
            <div className="col-12 col-md-6">
              {/* Password */}
              <div className="form-group">
                <label className="sr-only" htmlFor="registerPassword">
                  Password *
                </label>
                <input
                  className="form-control form-control-sm"
                  id="registerPassword"
                  type="password"
                  placeholder="Password *"
                  name="password"
                  value={form.password}
                  onChange={inputChange}
                  required
                />
                {error.password && (
                  <p className="text-error">{error.password}</p>
                )}
              </div>
            </div>
            <div className="col-12 col-md-6">
              {/* Password */}
              <div className="form-group">
                <label className="sr-only" htmlFor="registerPasswordConfirm">
                  Confirm Password *
                </label>
                <input
                  className="form-control form-control-sm"
                  id="registerPasswordConfirm"
                  type="password"
                  placeholder="Confrm Password *"
                  name="confirm_password"
                  value={form.confirm_password}
                  onChange={inputChange}
                  required
                />
                {error.confirm_password && (
                  <p className="text-error">{error.confirm_password}</p>
                )}
              </div>
            </div>
            <div className="col-12 col-md-auto">
              {/* Link */}
              <div className="form-group font-size-sm text-muted">
                By registering your details, you agree with our Terms &amp;
                Conditions, and Privacy and Cookie Policy.
              </div>
            </div>
            <div className="col-12 col-md">
              {/* Newsletter */}
              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    id="registerNewsletter"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="registerNewsletter"
                  >
                    Sign me up for the Newsletter!
                  </label>
                </div>
              </div>
            </div>
            <div className="col-12">
              {registerError && <p className="text-error">{registerError}</p>}
              {/* Button */}
              <button
                className="btn btn-sm btn-dark"
                onClick={loginHandle}
                type="submit"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}