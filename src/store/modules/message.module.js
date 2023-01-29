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
const db = getFirestore(fbApp)

export default {
    namespaced: true,
    state() {
        return {
            message : null,
            feedback : {}
        }

    },

    mutations: {
        setMessage(state, message) {
            state.message = message
            console.log('from mut', state.message)
        },
        clearMessage(state) {
            state.message = null
        },
        setFeedback(state, feedback){
            state.feedback = feedback
        }

    },
    actions: {
        setMessage({commit}, message) {
            console.log('from errors',message)
            commit('setMessage', message)
            setTimeout(() => {
                commit('clearMessage')
            }, 10000)
        },

        async loadFeedback({commit, dispatch}) {
            const feedbackRef = doc(db, 'messages', 'feedback')
            const feedback = (await (getDoc(feedbackRef))).data()
            console.log('feeback', feedback)
            commit('setFeedback', feedback)


        }
    },
    getters: {
        feedbackList(state, {dispatch}) {
            s
            return state.feedback
        }
    },
}
