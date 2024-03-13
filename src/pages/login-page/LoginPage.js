import NavBar from "./NavBar";

function LoginPage() {
  return (
    <div>
      <NavBar />
      <div className="loginRectangle">
        <div className="w-full h-full justify-center ml-12 flex flex-col">
          <form>
            <div className="pb-4 formElement">
              <input type="text" id="name" name="name" placeholder="Name" />
            </div>

            <div className="pb-4 formElement">
              <input type="email" id="email" name="email" placeholder="Email" />
            </div>
            <div className="pb-4 formElement">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
              />
            </div>

            <div className="pb-4 formElement">
              <input
                type="password"
                id="re-password"
                name="re-password"
                placeholder="re-enter password"
              />
            </div>
          </form>
          <div className="formElement flex justify-center mt-5">
            <button className="get-started-button ">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
