import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage"
import { fbApp } from "/firebase-config";



const storage = getStorage(fbApp)
const storageRef = ref(storage)
const carouselRef = ref(storage, 'carouselPhotos')
const trainingVideosRef = ref(storage,'classVideo')

export default {
    namespaced: true,
    state: {
        carouselImages : [],
        homePageVideos : [],

    },

    mutations: {
        setCarouselImages(state, imgUrls){
            state.carouselImages = imgUrls
        },
        setHomePageVideos(state, videosUrl){
            state.homePageVideos = videosUrl
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
      }
    },
    async loadHomePageVideo(commit){
      const videosRef = await listAll(trainingVideosRef)
      const videos = Object.values(videosRef.items)
      
      let videosUrl =videos.map((async item => {
        let vidRef = ref(storage, `${item.fullPath}`)
        return await getDownloadURL(vidRef)
      }))

      Promise.all(videosUrl)
      .then(res => {
        commit('setHomePageVideos', res)
      })
    },
    getters: {
        load(state) {
            return state.carouselImages
        },
        getHomePageVideo(state){
          return state.homePageVideos
        }
    },
}
