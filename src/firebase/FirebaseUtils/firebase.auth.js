import firebase from '../firebaseConfig.js';
import 'firebase/auth';

const auth = firebase.auth();

export const getUidSync = () => {
  const user = auth.currentUser;
  
  return user.uid;
};

export const isUserAuth = (endFunc) => {
  auth.onAuthStateChanged(user => {
    endFunc(!!user);
  });
};

export const openPopupBasedOnAuth = stateUpdate => {
  auth.onAuthStateChanged(user => {
    stateUpdate(!user);
  })
}

export const setFuncWhenUserLoaded = func => {
  const unsubscribe = auth.onAuthStateChanged(user => {
    if(user) {
      func(user, unsubscribe);
    }
  })
};

export const openPopupBasedOnEmail = stateUpdate => {
  auth.onAuthStateChanged(user => {
    if(user) {
      stateUpdate(!user.emailVerified);
    }
  })
}

export const openPopupBasedOnAuthSync = stateUpdate => {
  const user = auth.currentUser;
  
  stateUpdate(!(user && user.emailVerified));
}

export const registerWithEmailAndPassword = objInfo => {
  const { inputEmail, inputPw } = objInfo;
  
  const authPromise = auth.createUserWithEmailAndPassword(inputEmail, inputPw)
                      
  return Object.assign({}, objInfo, { authPromise });
};
 
export const resendEmailVerification = () => {
  const user = auth.currentUser;
  
  user.sendEmailVerification({
     url: 'http://localhost:3000/'
  })
};
 
export const sendEmailVerification = objInfo => {
  const { setError, inputUsername } = objInfo;
  
  objInfo.authPromise
    .then(result => {
      const user = result.user;
      
      user.updateProfile({
        displayName: inputUsername
      })
        .then(() => {
          user.sendEmailVerification({
            url: 'http://localhost:3000/'
          })
            .then(() => {
              setError({
                message: 'Check your email! We sended you a verification email to know that its you.',
                type: 'success'
              })
            })
            .catch(err => {
              setError({ message: err.message, type: 'error' })
            })
        })
        .catch(err => {
          setError({ message: err.message, type: 'error' })
        })

    })
    .catch(err => {
      setError({ message: err.message, type: 'error' });
    })
    
  return objInfo;
}

export const registerWithGoogle = (setError, hidePopup) => {
  const GoogleProvider = new firebase.auth.GoogleAuthProvider();

  auth
    .signInWithPopup(GoogleProvider)
    .then(() => {
      hidePopup();
    })
    .catch(err => {
      setError({ message: err.message, type: 'error' });
    })
};

export const signInWithEmailAndPassword = objInfo => {
  const { inputEmail, inputPw, setError, hidePopup } = objInfo;
  
  auth.signInWithEmailAndPassword(inputEmail, inputPw)
    .then(() => {
      hidePopup();
    })
    .catch(err => {
      setError(err.message);
    })
};