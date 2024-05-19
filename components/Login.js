import { useState } from "react";
import LoginForm from "./LoginForm";
import Waiting from "./Waiting";

function Login() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {!showModal && <LoginForm setShowModal={setShowModal} />}
      {showModal && <Waiting setShowModal={setShowModal} />}
    </>
  );
}

export default Login;

// import LoginForm from "./LoginForm";

// function Login() {
//   return (
//     <>
//       <LoginForm />
//     </>
//   );
// }

// export default Login;
