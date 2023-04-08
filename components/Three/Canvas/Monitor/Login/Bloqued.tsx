export default function Bloqued() {
  return (
    <div className='LoginContainer'>
      <div className='LoginContainerWrapper'>
        <h1 className='header_console header_console--red font--size--32'>
          Monitor disabled
        </h1>
        <p className='text_body'>
          Please, contact the administrador
        </p>
      </div>
      <div className='LoginContainerBg'>
        <img src='./models/Imgs/Login_bg.png' alt=''></img>
      </div>
    </div>
  );
}
