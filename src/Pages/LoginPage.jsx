import { useFormik } from "formik";
import { Link, useHistory, useLocation } from "react-router-dom";
import * as Yup from "yup";

const Login = () => {
  const his = useHistory();
  const loc = useLocation();

  //? register form validation

  const registerValidationSchema = Yup.object({
    username: Yup.string().required("Email is Required!"),
    email: Yup.string()
      .email("Please Enter a Valid Email!")
      .required("Email is Required!"),
    password: Yup.string()
      .required("Password is Required!")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&.])[A-Za-z\d@$!%*#?&.]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("password Confirmation is Required!"),
  });

  const registerFormik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) =>
      console.log({
        username: values.username,
        email: values.email,
        password: values.password,
      }),
    validationSchema: registerValidationSchema,
    validateOnMount: true,
  });

  const registerFormsData = [
    { title: "Username", name: "username", type: "text" },
    { title: "Email", name: "email", type: "email" },
    { title: "Password", name: "password", type: "password" },
    {
      title: "Password Confirmation",
      name: "passwordConfirmation",
      type: "password",
    },
  ];

  //? login form validation

  const loginValidationSchema = Yup.object({
    email: Yup.string()
      .email("Please Enter a Valid Email!")
      .required("Email is Required!"),
    password: Yup.string().required("Password is Required!"),
  });

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) =>
      console.log({
        email: values.email,
        password: values.password,
      }),
    validationSchema: loginValidationSchema,
    validateOnMount: true,
  });

  const loginFormsData = [
    { title: "Email", name: "email", type: "email" },
    { title: "Password", name: "password", type: "password" },
  ];

  return (
    <>
      <div
        className="absolute top-0 right-0 flex h-screen w-screen items-center justify-center"
        style={{
          background: "linear-gradient(251.83deg, #202020 1.02%, #000000 100%)",
        }}
      >
        <div className="relative min-h-[150px] w-[360px] items-center overflow-hidden rounded-2xl px-3 py-5 text-center sm:bg-[#1C1C1C]">
          {/* welcome */}
          <div
            className={`${
              !loc.hash.includes("#login") && !loc.hash.includes("#register")
                ? "relative right-0"
                : "!absolute -right-full opacity-0"
            } h-full w-full space-y-10 transition-[right] duration-1000`}
          >
            <div className="flex flex-col items-center">
              <div className="text-lg">Welcome To</div>
              <div className="text-4xl text-[#E21221]">Star Music</div>
            </div>
            <div className="mx-auto w-3/4 text-center text-sm">
              The best Music app of the century to make your days great!
            </div>
            <Link
              to={"#register"}
              className="mx-auto mb-4 flex h-12 w-3/4 items-center justify-center rounded-[100px] bg-[#E21221] [text-shadow:0_0_4px] disabled:opacity-50"
              type="submit"
            >
              Get Started
            </Link>
          </div>

          {/* login form */}
          <form
            className={`${
              loc.hash.includes("#login")
                ? "relative right-0"
                : "!absolute -right-full opacity-0"
            } h-full w-full transition-[right] duration-1000`}
            onSubmit={loginFormik.handleSubmit}
          >
            <div className="text-xl">LOGIN</div>
            <div className="my-6 flex flex-col items-center space-y-3">
              {loginFormsData.map((form) => (
                <div className="relative w-3/4">
                  <input
                    type="text"
                    className={`h-10 w-full rounded-xl border-2 border-[#4A4A4A] bg-[#212121] px-3 text-xs outline-none ${
                      loginFormik.errors[form.name] &&
                      loginFormik.touched[form.name]
                        ? "border-red-600"
                        : ""
                    } ${
                      loginFormik.touched[form.name] &&
                      !loginFormik.errors[form.name]
                        ? "border-green-500"
                        : ""
                    }`}
                    {...loginFormik.getFieldProps(form.name)}
                  />
                  <div
                    className={`absolute -top-[1px] left-3 flex h-1 items-center justify-center bg-[#212121] px-1 text-[8px] text-white/50 ${
                      loginFormik.errors[form.name] &&
                      loginFormik.touched[form.name]
                        ? "text-red-600"
                        : ""
                    } ${
                      loginFormik.touched[form.name] &&
                      !loginFormik.errors[form.name]
                        ? "text-green-500"
                        : ""
                    }`}
                  >
                    {form.title}
                  </div>
                  {loginFormik.touched[form.name] && (
                    <div className="w-full px-1 pt-1 text-start text-xs font-bold text-red-500">
                      {loginFormik.errors[form.name]}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button
              className="mx-auto mb-4 flex h-12 w-3/4 items-center justify-center rounded-[100px] bg-[#E21221] [text-shadow:0_0_4px] disabled:opacity-50"
              type="submit"
              disabled={!loginFormik.isValid}
            >
              Login
            </button>
            <Link
              to={"/welcome#register"}
              className="mx-auto flex h-4 w-3/4 items-center justify-center rounded-[100px] text-sm"
            >
              register
            </Link>
          </form>

          {/* register form */}
          <form
            className={`relative ${
              loc.hash.includes("#register")
                ? "relative right-0"
                : "!absolute -right-full opacity-0"
            } h-full w-full transition-[right] duration-1000`}
            onSubmit={registerFormik.handleSubmit}
          >
            <div className="text-xl">REGISTRATION</div>
            <div className="my-6 flex flex-col items-center space-y-3">
              {registerFormsData.map((form) => (
                <div className="relative w-3/4">
                  <input
                    type="text"
                    className={`h-10 w-full rounded-xl border-2 border-[#4A4A4A] bg-[#212121] px-3 text-xs outline-none ${
                      registerFormik.errors[form.name] &&
                      registerFormik.touched[form.name]
                        ? "border-red-600"
                        : ""
                    } ${
                      registerFormik.touched[form.name] &&
                      !registerFormik.errors[form.name]
                        ? "border-green-500"
                        : ""
                    }`}
                    {...registerFormik.getFieldProps(form.name)}
                  />
                  <div
                    className={`absolute -top-[1px] left-3 flex h-1 items-center justify-center bg-[#212121] px-1 text-[8px] text-white/50 ${
                      registerFormik.errors[form.name] &&
                      registerFormik.touched[form.name]
                        ? "text-red-600"
                        : ""
                    } ${
                      registerFormik.touched[form.name] &&
                      !registerFormik.errors[form.name]
                        ? "text-green-500"
                        : ""
                    }`}
                  >
                    {form.title}
                  </div>
                  {registerFormik.touched[form.name] && (
                    <div className="w-full px-1 pt-1 text-start text-xs font-bold text-red-500">
                      {registerFormik.errors[form.name]}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button
              className="mx-auto mb-4 flex h-12 w-3/4 items-center justify-center rounded-[100px] bg-[#E21221] [text-shadow:0_0_4px] disabled:opacity-50"
              type="submit"
              disabled={!registerFormik.isValid}
            >
              Register
            </button>
            <Link
              to={"/welcome#login"}
              className="mx-auto flex h-4 w-3/4 items-center justify-center rounded-[100px] text-sm"
            >
              Login
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
