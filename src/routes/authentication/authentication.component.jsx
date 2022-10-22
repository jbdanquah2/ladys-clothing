// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss"

const Authentication = () => {
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await getRedirectResult(auth);
//       if (response) {
//         const userDocRef = await createUserDocumentFromAuth(response.user);
//         console.log(response);
//       }
//     };
//     fetchData();
//   }, []);

//   const logGoogleRedirectUser = async () => {
//     const response = await signInWithGoogleRedirect();
//   };

  return (
    <div className="authentication-container">
      <SignInForm /> 
      <SignUpForm />
    </div>
  );
};
export default Authentication;