import LoginButton from "../../components/LoginButton";
import NavBar from "./NavBar";


function LoginPage(){
return (
    <div className="w-full h-full flex flex-col">
      <NavBar/>
      <div className="flex flex-col justify-center items-center h-screen">
      <div className="loginRectangle flex justify-center items-center h-full ">
        <div className="w-full h-full justify-center items-center flex flex-col">
          <form>
            <div className="pb-[30px]">
              <input className="w-[358px] h-[48px] p-2 rounded-md border border-black" type="email" id="email" name="email" placeholder="Email" />
            </div>
            <div className="pb-[30px]">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                className="w-[358px] h-[48px] p-2 rounded-md border border-black"
              />
            </div>
            
          </form>
          
          <LoginButton/>
          
            
          
        </div>
      </div>
      <span className="mt-[5px]">
            New User? < a href="src/pages/signup-page/SignUpPage.js" className="underline">SIGN UP HERE</a>
          </span>
      </div>
      
    </div>
  );
}

export default LoginPage