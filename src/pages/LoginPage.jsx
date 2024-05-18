
import '../index.css';  // Ensure Tailwind CSS is imported

function LoginPage() {
  return ( 
    <>
      <div className="h-screen flex items-center justify-center bg-cover bg-[url('./assets/Images/bg-image.jpg')]">
        <div className="relative  w-[490px] h-[450px] bg-white rounded-[5px] px-[0px] py-[0px] shadow-md">
          <div className="w-full p-10">
            <form action="">
              <h1 className="text-2xl font-bold text-pry-color leading-[74.5px] text-center font-'Oxygen' ">Room8s</h1>
              <h2 className="text-2xl font-semibold text-center leading-[33.5px] font-'Oxygen'">Welcome back to Room8s</h2>

              <div className="my-2">
                <p className="text-sm font-normal leading-[30px]">Username</p>
                <input type="text" placeholder="SamuelC@gmail.com" required className="w-full h-11 p-3 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-pry-color" />
              </div>

              <div className="my-2">
                <p className="text-sm font-normal leading-[30px]">Password</p>
                <input type="password" placeholder="*********" className="w-full h-11 p-3 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-pry-color" />
              </div>

              <div className="flex justify-between text-sm">
                <a href="" className="text-pry-color underline">Forgot Password</a>
              </div>

              <button type="submit" className="mt-3 pt-2 w-full h-10 bg-pry-color text-white px-[10px] py-[12px] rounded-[5px] cursor-pointer border-none ">
                LOG IN
              </button>

              <div className="mt-3 text-sm text-center ">
                <p>Don't have an account? <a href="#" className="text-pry-color">Register</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
