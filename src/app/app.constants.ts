export const config = {
  staging: {
    apiKey: "AIzaSyDX9c9yfgFltdmvH1kuHItnnCJuVdQwQZ4",
    authDomain: "invbankstaging.firebaseapp.com",
    databaseURL: "https://invbankstaging.firebaseio.com",
    projectId: "invbankstaging",
    storageBucket: "invbankstaging.appspot.com",
    messagingSenderId: "569093055486"
  }, 
  production: {
    apiKey: "AIzaSyB4FAXpt9fbocWlvBYGjA23-lo42W3tc4Q",
    authDomain: "invbankapp.firebaseapp.com",
    databaseURL: "https://invbankapp.firebaseio.com",
    projectId: "invbankapp",
    storageBucket: "invbankapp.appspot.com",
    messagingSenderId: "374217377390"
  }
};

export const schema = {
  Users: 'users',
  Accounts: 'accounts'
}