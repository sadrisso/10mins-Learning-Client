import { createContext, useEffect, useState } from "react";
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from '../hooks/useAxiosPublic';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const githubSignIn = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const update = (updateInfo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updateInfo)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                console.log("User here --> ", currentUser)
            }

            setLoading(false)

            //setting token starts from here
            const userInfo = { email: currentUser?.email }
            if (currentUser) {
                axiosPublic.post("jwt", userInfo)
                    .then((res) => {
                        if (res?.data?.token) {
                            localStorage.setItem("token", res?.data?.token)
                        }
                    })
            }
            else {
                localStorage.removeItem("token")
            }
            //setting token ends from here
        })

        return () => {
            unsubscribe()
        }
    }, [])


    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signIn,
        logOut,
        update,
        googleSignIn,
        githubSignIn
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;