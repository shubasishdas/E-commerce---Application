import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const handleGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log({ response });
  };

  return (
    <div>
      <p>This belongs to sign-in page</p>
      <button onClick={handleGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
