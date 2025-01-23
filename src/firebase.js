import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports

export const firebaseApp = initializeApp({
    apiKey: "",
    authDomain: "testfirestore-3008a.firebaseapp.com",
    projectId: "testfirestore-3008a",
    storageBucket: "testfirestore-3008a.firebasestorage.app",
    messagingSenderId: "637057058433",
    appId: "1:637057058433:web:99756c698dd93d1a99ef80",
    measurementId: "G-VLE84RDSCD"
      
})

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const RecordatoriosRef = collection(db, 'Recordatorios')