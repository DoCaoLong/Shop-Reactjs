import { useDispatch, useSelector } from "react-redux";
import useFormValidate from "../../../aseets/hook/useFormValidate";
import { UpdateAction } from "../../../redux/actions/AuthAction";

export default function AccountPesonalInfo(){
  // lấy rừ reddux
  let { login } = useSelector((store) => store.auth);
  let { form, error, inputChange, check } = useFormValidate(
    {
      name: login.name,
      lastname: login.last_name,
      email: login.email,
      // password: "",
      // confirm_password: "",
    },
    {
      rule: {
        name: {
          required: true,
          pattern: "name",
        },
        lastname: {
          required: true,
          pattern: "name",
        },
        email: {
          required: true,
          pattern: "email",
        },
        // password: {
        //   required: true,
        //   min: 6,
        //   max: 32,
        //   check: "password",
        // },
        // confirm_password: {
        //   required: true,
        //   confirm_password: true,
        // },
      },
      message: {
        name: {
          required: "Tên không được bỏ trống",
          pattern: "Tên được viết bằng chữ in hoặc chữ thường",
        },
        lastname: {
          required: "Họ không được bỏ trống",
          pattern: "Họ được viết bằng chữ in hoặc chữ thường",
        },
        email: {
          required: "Email không được bỏ trống",
          pattern: "Email không đúng định dạng example@gmail.com",
        },
        // password: {
        //   required: "Mật khẩu không được bỏ trống",
        // },
        // confirm_password: {
        //   required: "Vui lòng nhập lại mật khẩu",
        // },
      },
    }
  );
   let dispatch = useDispatch();

   function onSubmit(e) {
     e.preventDefault();
     let errObj = check();
     if (Object.keys(errObj).length === 0) {
       console.log(form);
       dispatch(UpdateAction(form));
     }
   }
  return (
    <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
      {/* Form */}
      <form>
        <div className="row">
          <div className="col-12 col-md-6">
            {/* Email */}
            <div className="form-group">
              <label htmlFor="accountFirstName">First Name *</label>
              <input
                className="form-control form-control-sm"
                id="accountFirstName"
                type="text"
                placeholder="First Name *"
                defaultValue="Daniel"
                name="name"
                value={form.name}
                onChange={inputChange}
                required
              />
              {error.name && <p className="text-error">{error.name}</p>}
            </div>
          </div>
          <div className="col-12 col-md-6">
            {/* Email */}
            <div className="form-group">
              <label htmlFor="accountLastName">Last Name *</label>
              <input
                className="form-control form-control-sm"
                id="accountLastName"
                type="text"
                placeholder="Last Name *"
                defaultValue="Robinson"
                name="lastname"
                value={form.lastname}
                onChange={inputChange}
                required
              />
              {error.lastname && <p className="text-error">{error.lastname}</p>}
            </div>
          </div>
          <div className="col-12">
            {/* Email */}
            <div className="form-group">
              <label htmlFor="accountEmail">Email Address *</label>
              <input
                className="form-control form-control-sm"
                id="accountEmail"
                type="email"
                placeholder="Email Address *"
                defaultValue="user@email.com"
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
              <label htmlFor="accountPassword">Current Password *</label>
              <input
                className="form-control form-control-sm"
                id="accountPassword"
                type="password"
                placeholder="Current Password *"
                // required
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            {/* Password */}
            <div className="form-group">
              <label htmlFor="AccountNewPassword">New Password *</label>
              <input
                className="form-control form-control-sm"
                id="AccountNewPassword"
                type="password"
                placeholder="New Password *"
                // required
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            {/* Birthday */}
            <div className="form-group">
              {/* Label */}
              <label>Date of Birth</label>
              {/* Inputs */}
              <div className="form-row">
                <div className="col-auto">
                  {/* Date */}
                  <label className="sr-only" htmlFor="accountDate">
                    Date
                  </label>
                  <select
                    className="custom-select custom-select-sm"
                    id="accountDate"
                  >
                    <option>10</option>
                    <option>11</option>
                    <option selected>12</option>
                  </select>
                </div>
                <div className="col">
                  {/* Date */}
                  <label className="sr-only" htmlFor="accountMonth">
                    Month
                  </label>
                  <select
                    className="custom-select custom-select-sm"
                    id="accountMonth"
                  >
                    <option>January</option>
                    <option selected>February</option>
                    <option>March</option>
                  </select>
                </div>
                <div className="col-auto">
                  {/* Date */}
                  <label className="sr-only" htmlFor="accountYear">
                    Year
                  </label>
                  <select
                    className="custom-select custom-select-sm"
                    id="accountYear"
                  >
                    <option>1990</option>
                    <option selected>1991</option>
                    <option>1992</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            {/* Gender */}
            <div className="form-group mb-8">
              <label>Gender</label>
              <div className="btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-sm btn-outline-border active">
                  <input type="radio" name="gender" defaultChecked /> Male
                </label>
                <label className="btn btn-sm btn-outline-border">
                  <input type="radio" name="gender" /> Female
                </label>
              </div>
            </div>
          </div>
          <div className="col-12">
            {/* Button */}
            <button onClick={onSubmit} className="btn btn-dark" type="submit">
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}