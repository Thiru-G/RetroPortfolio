import React from "react";
import { useLoginStage } from "../../../Store/ThreeState";

export default function Login() {
  const setLogged = useLoginStage(
    (state) => state.setIsLogged
  );

  return (
    <div className='LoginContainer'>
      <div className='LoginContainerWrapper'>
        <h1
          className='header_console header_console--aqua font--size--32'
          data-text={"Welcome"}>
          Welcome
        </h1>
        <p
          className='text_body'
          data-text={
            "Please, clic the button enter to log"
          }>
          Please, clic the button enter
        </p>
        <button
          className='btn btn_bordered--orange'
          onClick={() => setLogged(true)}>
          Enter
        </button>
      </div>
      <div className='LoginContainerBg'>
        <img src='./models/Imgs/Login_bg.png' alt=''></img>
      </div>
    </div>
  );
}
