import Vue from 'vue'
import  Vuex  from 'vuex'
import { stat } from 'fs';
Vue.use(Vuex)

export default new Vuex.Store({
 state:{
   playing:false,
   songList:[],    // 歌单列表数据
   currentSongIndex:-1,  // 当前播放歌曲
   fullScreen:true
 },
 mutations:{
   setFullScreen(state,bool){
     state.fullScreen=bool
   },
   togglePlay(state){
    // console.log(22)
    state.playing=!state.playing
   },
   setSongList(state,listData){
    console.log('设置歌单数据',listData)
    state.songList=listData
   },
   setCurrentSongIndex(state,params){
    //mode 上一曲 下一曲
    console.log('设置播放歌曲序号',params.index)
    if(params.mode){
       if(params.mode=='next'){
         if(state.currentSongIndex==state.songList.length){
          state.currentSongIndex=0
         }else{
          state.currentSongIndex=state.currentSongIndex+1
         }
        
       }else if(params.mode=='prev'){
        state.currentSongIndex=state.currentSongIndex-1
       }
    }else{
      state.currentSongIndex=params.index
    }
     
   }
 },
 getters:{
   currentSong(state){
     //获取正在播放的歌曲信息
     return  state.songList[state.currentSongIndex]
   }
 }
})