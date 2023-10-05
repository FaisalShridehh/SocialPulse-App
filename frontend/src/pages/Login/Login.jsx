export default function Login() {
  return (
    <div className="login w-screen h-screen bg-[#f0f2f5] flex  items-center justify-center ">
      <div className="login-wrapper w-3/4 h-3/4  flex flex-col md:flex-row">
        <div className="login-left flex-1 flex flex-col justify-center">
          <h3 className="login-logo text-5xl text-[#4e5ed8] font-extrabold mb-3">
            SocialPulse
          </h3>
          <span className="login-desc text-2xl">
            Connect with friends and the world around you on SocialPulse.
          </span>
        </div>
        <div className="login-right flex-1 flex flex-col justify-center">
          <div className="login-box h-[380px] p-5 bg-white rounded-[10px] flex flex-col justify-between">
            {/* <!--Email input--> */}
            <div className="relative mb-3">
              <input
                type="email"
                className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] focus:border-[#4e5ed8]"
                id="Email"
                placeholder="name@example.com"
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
              />
              <label
                htmlFor="Password"
                className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Password
              </label>
            </div>
            <button className="login-button h-[50px] rounded-[10px] border-none bg-[#4e5ed8] text-white text-xl font-medium cursor-pointer">
              Log In
            </button>
            <span className="login-forgot text-center text-[#4e5ed8] ">
              Forgot Password?
            </span>
            <button className="login-register-button h-[50px] rounded-[10px] border-none bg-[#42b72a] text-white text-xl font-medium cursor-pointer w-1/2 self-center">
              Create A New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
