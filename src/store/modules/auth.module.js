import {
    onAuthStateChanged,
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from 'firebase/auth'
import {
    getFirestore,
    collection,
    addDoc,
    setDoc,
    getDoc,
    getDocs,
    doc
} from "firebase/firestore";
import { fbApp } from "/firebase-config";
import { error } from "@/utils/error";

const db =getFirestore(fbApp)
const auth = getAuth(fbApp)
const ROLE = 'role'

export default {
    state: {
        role: localStorage.getItem(ROLE),
        userId: '',
        userInfo: {}
    },
    getters: {
        role(state) {
            return state.role
        },
        name(state) {
            return state.userInfo.fullName
        }
    },
    mutations: {
        setRole(state, role) {
            state.role = role
            localStorage.setItem(ROLE, role)
            console.log(role)
        },
        setUser(state, user) {
            state.userId = user.uid
            localStorage.setItem('userId', user.uid) 
        },
        removeUser(state) {
            state.role = ''
            state.userId = ''
            localStorage.clear()
        },
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo
        }
    },
    actions: {
        async login({ dispatch, commit }, {email, password}) {
            try {
              const roleCheckRef = doc(db, 'checks', 'isAdmin')
              const queryAdmins = (await (getDoc(roleCheckRef))).data()                
              if ( Object.values(queryAdmins).includes(email) ) {
                   await signInWithEmailAndPassword (auth, email, password)
                   console.log('auth as admin', auth.currentUser.email)
                   commit('setRole', 'admin')
                   dispatch('userState')
              } else {
                   await signInWithEmailAndPassword (auth, email, password)
                   console.log('auth as student', auth.currentUser.email)
                   commit('setRole', 'student')
                   dispatch('userState')
              }
            } catch (e) {
               dispatch('message/setMessage', {
                   value : error(e.code),
                   type : 'danger'
               },{root: true})
        }
        },
        async signUp({ commit, dispatch }, {email, password, fullName, bDate, phone, zone, dCode}) {
            try {
                await createUserWithEmailAndPassword (auth, email, password)
                await setDoc(doc(db, 'users', email ), {
                    email : email,
                    fullName : fullName,
                    birthday : bDate,
                    telephone : phone,
                    zone : zone,
                    dCode: dCode
                })
                
                dispatch('userState')

                // console.log('auth', email,fullName,bDate,phone,zone,dCode)
            } catch (e) {
                console.log(e)
            }
        },
        async userState ({commit, dispatch}) {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    commit('setUser', user)
                    dispatch('userInfo', user.email)
                    console.log('onmounted userstate', user.email)
                    
                } else {
                    localStorage.clear()
                }
            })
        },
        async userInfo ({commit, dispatch}, email){
            const userInfoRef =  doc(db, 'users', `${email}`)
            const userInfo = (await (getDoc(userInfoRef))).data()
            commit('setUserInfo', userInfo)
        },
        async logOut ({commit, dispatch}) {
           try{
            await signOut(auth)
            commit('removeUser')
            console.log(user)
           } catch (e) {
                console.log(e)
           }
        }
    }
}
