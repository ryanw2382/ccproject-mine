export const env = 'development';

// config for firebase
export const firebase = {
  apiKey: "AIzaSyDwfJvZ9Kga4SWDKHZraAabNWMGASyWEVY",
  authDomain: "get-me-a-job-cf02b.firebaseapp.com",
  databaseURL: "https://get-me-a-job-cf02b.firebaseio.com",
  projectId: "get-me-a-job-cf02b",
  storageBucket: "get-me-a-job-cf02b.appspot.com",
  messagingSenderId: "956943026553",
};

// config for react-redux-firebase
export const reduxFirebase = {
    userProfile: 'users',  // root that user profiles are written to
    enableLogging: false,  // enable/disable firebase database logging
    updateProfileOnLogin: false // enable/disable updating of profile on login
    // profileDecorator: (userData) => ({ email: userData.email })  // customize format of user profile
};

export default { env, firebase, reduxFirebase };