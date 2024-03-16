import Signup from "../../components/Signup";
import NavBar from "./NavBar";

function SignUpPage() {
  return (
    <div className="w-full h-full flex flex-col">
      <NavBar />
      <div className="flex justify-center items-center h-screen">
      <div className="signupRectangle flex justify-center items-center h-full ">
        <div className="w-full h-full justify-center items-center flex flex-col">
          <form>
            <div className="pb-[30px]">
              <input className="w-[358px] h-[48px] p-2 rounded-md border border-black" type="text" id="name" name="name" placeholder="Name" />
            </div>

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

            <div className="pb-[30px]">
              <input
                type="password"
                id="re-password"
                name="re-password"
                placeholder="re-enter password"
                className="w-[358px] h-[48px] p-2 rounded-md border border-black"
              />
            </div>
          </form>
          
            <Signup/>
          
        </div>
      </div>
      </div>
    </div>
  );
}

export default SignUpPage;
