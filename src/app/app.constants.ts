export const config = {
  staging: {
    apiKey: "AIzaSyCkcBnnt1xNOKmIPXEnQrItMXSmtKRtrdE",
    authDomain: "fri-whitelabel.firebaseapp.com",
    databaseURL: "https://fri-whitelabel.firebaseio.com",
    projectId: "fri-whitelabel",
    storageBucket: "fri-whitelabel.appspot.com",
    messagingSenderId: "573051393900"
  }, 
  production: {
    apiKey: "AIzaSyCkcBnnt1xNOKmIPXEnQrItMXSmtKRtrdE",
    authDomain: "fri-whitelabel.firebaseapp.com",
    databaseURL: "https://fri-whitelabel.firebaseio.com",
    projectId: "fri-whitelabel",
    storageBucket: "fri-whitelabel.appspot.com",
    messagingSenderId: "573051393900"
  }
};

export const schema = {
  Users: 'users',
  Accounts: 'accounts',
  ThirdAccounts: 'third-accounts',
  Transfers: 'transfers',
  Cashouts: 'cashouts',
  Services: 'services',
  Payments: 'payments'
}