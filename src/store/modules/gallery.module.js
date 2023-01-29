import { getStorage, ref, listAll, getDownloadURL,  } from "firebase/storage"
import {
    getFirestore,
    collection,
    addDoc,
    setDoc,
    getDoc,
    getDocs,
    doc
} from "firebase/firestore";
import { object } from "yup";
import { fbApp } from "/firebase-config";
import {map} from "core-js/internals/array-iteration";


const db =getFirestore(fbApp)
const storage = getStorage(fbApp)
const storageRef = ref(storage)
const carouselRef = ref(storage, 'carouselPhotos')
const trainingVideosRef = ref(storage,'classVideo')

export default {
    namespaced: true,
    state: {
        carouselImages : [],
        homePageVideos : [],
        homePagePhotos : ['../assets/testjpg.jpg']
    },

    mutations: {
        setCarouselImages(state, imgUrls){
            state.carouselImages = imgUrls
        },
        setHomePageVideos(state, videoUrls){
            state.homePageVideos = videoUrls
        }
    },
    actions: {
      async loadCarousel({commit}) {
        const imagesRef = await listAll(carouselRef)
        const images = Object.values(imagesRef.items)

        let imgUrls = images.map((async item => {
          let imgRef = ref(storage, `${item.fullPath}`)
          return await getDownloadURL(imgRef)
        }))

        Promise.all(imgUrls)
        .then(res => {
          commit('setCarouselImages', res)
        })
      },

      async loadHomePageVideo({commit}) {
        const homePageVideoRef = doc(db, 'linksList', 'homePageVideo')
        const videoUrls = (await (getDoc(homePageVideoRef))).data()

        console.log('video urls', Object.values(videoUrls))
        commit('setHomePageVideos', videoUrls)
      },


    },
    getters: {
        load(state) {
            return state.carouselImages
        },
        getHomePageVideo(state){
            return state.homePageVideos
        },
        hpiLink(state){
            return require(state.homePagePhotos)
        }
    }
}
