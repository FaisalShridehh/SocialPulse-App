import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const BaseBackEndUrl = import.meta.env.VITE_BACKEND_URL;

export default function Register() {
  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const passwordAgainInput = useRef();
  const navigate = useNavigate();

  async function handleClick(e) {
    e.preventDefault();
    if (passwordAgainInput.current.value != passwordInput.current.value) {
      passwordAgainInput.current.setCustomValidity("Password doesn't match");
    } else {
      try {
        const user = {
          firstName: firstNameInput.current.value,
          lastName: lastNameInput.current.value,
          email: emailInput.current.value,
          password: passwordInput.current.value,
        };

        const response = await axios.post(`${BaseBackEndUrl}register`, user);
        // if (response.status !== 200)
        //   throw new Error("[Register] Error " + response.status);

        console.log(response);
        navigate("/login");
      } catch (error) {
        console.error(error);
      }
    }
  }
  return (
    <div className="register w-screen h-screen bg-[#f0f2f5] flex items-center justify-center ">
      <div className="register-wrapper w-3/4 h-3/4  flex flex-col md:flex-row gap-2 md:gap-1">
        <div className="register-left flex-1 flex flex-col justify-center">
          <h3 className="register-logo text-5xl text-[#4e5ed8] font-extrabold mb-3">
            SocialPulse
          </h3>
          <span className="register-desc text-2xl">
            Connect with friends and the world around you on SocialPulse.
          </span>
        </div>
        <div className="register-right flex-1 flex flex-col justify-center">
          <form
            className="register-box h-[450px] p-5 bg-white rounded-[10px] flex flex-col justify-between"
            onSubmit={handleClick}
          >
            {/* <!--UserName input--> */}
            <div className="flex gap-2">
              {/* <!--FirstName input--> */}
              <div className="relative mb-3 flex-1">
                <input
                  type="text"
                  className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] focus:border-[#4e5ed8]"
                  id="FirstName"
                  placeholder="FirstName"
                  ref={firstNameInput}
                  required
                />
                <label
                  htmlFor="FirstName"
                  className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  UserName
                </label>
              </div>
              {/* <!--LastName input--> */}
              <div className="relative mb-3 flex-1">
                <input
                  type="text"
                  className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] focus:border-[#4e5ed8]"
                  id="LastName"
                  placeholder="LastName"
                  ref={lastNameInput}
                  required
                />
                <label
                  htmlFor="LastName"
                  className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  LastName
                </label>
              </div>
            </div>
            {/* <!--Email input--> */}
            <div className="relative mb-3">
              <input
                type="email"
                className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] focus:border-[#4e5ed8]"
                id="Email"
                placeholder="name@example.com"
                ref={emailInput}
                required
              />
              <label
                htmlFor="Email"
                className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Email address
              </label>
            </div>

            {/* <!--Password input--> */}
            <div className="relative mb-3">
              <input
                type="password"
                className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] focus:border-[#4e5ed8]"
                id="Password"
                placeholder="Password"
                ref={passwordInput}
                min={8}
                required
              />
              <label
                htmlFor="Password"
                className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Password
              </label>
            </div>
            {/* <!--Password Again input--> */}
            <div className="relative mb-3">
              <input
                type="password"
                className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] focus:border-[#4e5ed8]"
                id="PasswordAgain"
                placeholder="Password Again"
                ref={passwordAgainInput}
                min={8}
                required
              />
              <label
                htmlFor="PasswordAgain"
                className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Password Again
              </label>
            </div>

            <button className="register-button h-[50px] rounded-[10px] border-none bg-[#4e5ed8] text-white text-xl font-medium cursor-pointer">
              Sign Up
            </button>
            <button className="register-register-button flex justify-center items-center h-[60px] rounded-[10px] border-none bg-[#42b72a] text-white text-lg md:text-xl font-medium cursor-pointer  md:w-1/2 md:p-1 px-2 self-center">
              Log Into Your Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
