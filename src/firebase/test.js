import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();
console.log(firestore.collection('tempUsers').doc('SdgExfHK8RI43txgbT91').collection('cart-item').doc('1JKYtKWZGSyoEAlkUBiC'));