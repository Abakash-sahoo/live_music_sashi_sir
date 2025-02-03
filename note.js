//to install firebase go to below link: ( v4.0 )
        // follow => Using Vite steps
        //https://tailwindcss.com/docs/installation/using-vite  
// npm install react-router-dom
        // helps for navigation
// npm install react-icons
        // helps to add icons
// npm install axios
        // http requests/calls like fetch
// npm install react-hot-toast
        // inbuilt pop ups
// npm install md5 
        //hashing email(convert email to hash code)
        
//! note 

//? file and folder structure of src
// src
        //main.jsx 
                // <RouterProvider router={router}><App /></RouterProvider> 
        //App.jsx
        //backend
                //firebase.js
        //components
                //route 
                        //MyRoutes.jsx
                //navbar
                        //NavbarContainer.jsx
                        //Menu.jsx
                        //Logo.jsx
                //authComponents
                        //Login.jsx
                        //Register.jsx
                //pages
                        //Home.jsx
                        //Layout.jsx


//?backend/firebase.jsx
        //authenticaton service
        import { getAuth } from 'firebase/auth'
        //database service from firebase
        import { getFirestore } from 'firebase/firestore'
        //storage service from firebase
        import { getStorage } from 'firebase/storage'

        // const firebaseApp = initializeApp(firebaseConfig);
        // export let __AUTH = getAuth(firebaseApp);
        // export let __DB=getFirestore(firebaseApp);
        // export let __STORAGE=getStorage(firebaseApp);
        // export default firebaseApp;

//?Register.jsx
// import { __AUTH } from "../../backend/firebase";
// import { createUserWithEmailAndPassword, sendEmailVerification, } from "firebase/auth";
// let { user } = await createUserWithEmailAndPassword(__AUTH,email,password);
// sendEmailVerification(user);
//? Login.jsx
//import { signInWithEmailAndPassword } from "firebase/auth";
// let { user } = await signInWithEmailAndPassword(__AUTH, email, password);
// console.log(user.emailVerified); //? return boolean value
// if (user.emailVerified === true) {
//         toast.success("Logged in Successfully");
//         navigate("/");
// } else {
//         toast.error("Not verified account");
// }

//?navigation
// import { useNavigate } from "react-router-dom";
// let navigate = useNavigate();
// navigate("/");

//! false undefined null "empty sting"  0 NAN => falsy value
//? truthy value all the values except


//?============================>
// [
//         {
//                 path: "/",
//                 element: <Layout />,
//                 children: [
//                         {
//                                 path: "/",
//                                 element: <Home />
//                         }
//                         ,
//                         {
//                                 path: "employee",
//                                 element: <EmployeeComponent />,
//                                 children: [
//                                         {
//                                                 path: "company-details",
//                                                 element: <Company />
//                                         }
//                                 ]

//                         },
//                         {
//                                 path: "services",
//                                 element: <Services />,
//                                 children: [
//                                         {
//                                                 path: "clothing-services",
//                                                 element: <ClothingServices />

//                                         }
//                                 ]

//                         },
//                         {
//                                 path: "about-us",
//                                 element: <AboutUs />

//                         },

//                 ]

//gravatar
//https://gravatar.com/site/check/?gad_source=1&gclid=Cj0KCQiAy8K8BhCZARIsAKJ8sfRb0HA2WtMf2YOQ5RtJhOINNb1cQfr_Fe8SFA1YyYbX3BZfHTp_l2UaAlnNEALw_wcB

// https://console.cloudinary.com/settings/c-8340bb15d4194cfceb456a22c59016/upload/presets

//hello hello

//stripe 