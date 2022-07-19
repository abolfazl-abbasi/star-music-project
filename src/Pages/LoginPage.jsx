const Login = () => {
  return (
    <>
      <div
        className="absolute top-0 right-0 flex h-screen w-screen items-center justify-center"
        style={{
          background: "linear-gradient(251.83deg, #202020 1.02%, #000000 100%)",
        }}
      >
        <div className="w-[360px] rounded-2xl px-3 py-5 text-center sm:bg-[#1C1C1C]">
          <div className="text-xl">REGISTRATION</div>
          <div className="my-6 flex flex-col items-center space-y-3">
            <div className="relative w-3/4">
              <input
                type="text"
                className="h-10 w-full rounded-xl border-2 border-[#4A4A4A] bg-[#212121] outline-none"
              />
              <div className="absolute -top-[1px] left-3 flex h-1 items-center justify-center bg-[#212121] px-1 text-[8px] text-white/50">
                User Name
              </div>
            </div>
            <div className="relative w-3/4">
              <input
                type="text"
                className="h-10 w-full rounded-xl border-2 border-[#4A4A4A] bg-[#212121] outline-none"
              />
              <div className="absolute -top-[1px] left-3 flex h-1 items-center justify-center bg-[#212121] px-1 text-[8px] text-white/50">
                User Name
              </div>
            </div>
            <div className="relative w-3/4">
              <input
                type="text"
                className="h-10 w-full rounded-xl border-2 border-[#4A4A4A] bg-[#212121] outline-none"
              />
              <div className="absolute -top-[1px] left-3 flex h-1 items-center justify-center bg-[#212121] px-1 text-[8px] text-white/50">
                User Name
              </div>
            </div>
            <div className="relative w-3/4">
              <input
                type="text"
                className="h-10 w-full rounded-xl border-2 border-[#4A4A4A] bg-[#212121] outline-none"
              />
              <div className="absolute -top-[1px] left-3 flex h-1 items-center justify-center bg-[#212121] px-1 text-[8px] text-white/50">
                User Name
              </div>
            </div>
          </div>
          <button className="mx-auto mb-4 flex h-12 w-3/4 items-center justify-center rounded-[100px] bg-[#E21221] [text-shadow:0_0_4px]">
            Register
          </button>
          <button className="mx-auto flex h-4 w-3/4 items-center justify-center rounded-[100px] text-sm">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
