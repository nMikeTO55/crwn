import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util.js";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";

const Authentication = () => {
  return (
    <div>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
