import {signInWithGooglePopup} from '../../../utils/firebase/firebase.utils';


const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  }  
  
  return (
    <div>
      <h2>Bereits einen Account?</h2>
      <button onClick={logGoogleUser}>
        Sign in with Google Popoup
      </button>
    </div>
  )
}
export default SignIn;

