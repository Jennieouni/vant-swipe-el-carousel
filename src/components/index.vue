<template>
  <div class="content">
    <van-swipe style="height: 100%;" :loop="false" vertical>
      <van-swipe-item>
        <div class="item_box item1">
          <el-carousel :interval="4000" arrow="never" type="card" indicator-position="outside" trigger="click">
            <el-carousel-item v-for="item in card" :key="item.item">
              <!-- <h3>{{item}}</h3> -->
              <img :src="item.src" alt="" class="light_img">
            </el-carousel-item>
          </el-carousel>
          <div class="down-wrap">
            <div class="download_button" @click="down1()"><img src="/static/images/h5_download_btn.png" alt=""></div>
            <img src="/static/images/arrow.png" alt="" class="arrow">
          </div>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="item_box item2">
          <img src="/static/images/hot-match.png" class="bifen_img">
          <img src="/static/images/kuli.png" class="people_img">
          <div class="down-wrap">
            <div class="download_button" @click="down1()"><img src="/static/images/h5_download_btn.png" alt=""></div>
            <img src="/static/images/arrow.png" alt="" class="arrow">
          </div>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="item_box item3">
          <img src="/static/images/bullet1.png" class="bullet1" alt="">
          <img src="/static/images/bullet2.png" class="bullet2" alt="">
          <img src="/static/images/bullet3.png" class="bullet3" alt="">
          <img src="/static/images/bullet4.png" class="bullet4" alt="">
          <img src="/static/images/heart.png" class="heart1" alt="">
          <img src="/static/images/heart.png" class="heart2" alt="">
          <div class="down-wrap">
            <div class="download_button" @click="down1()"><img src="/static/images/h5_download_btn.png" alt=""></div>
            <img src="/static/images/arrow.png" alt="" class="arrow">
          </div>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="item_box item4">
          <div class="item_box item4">
          <img src="/static/images/saicheng.png" alt="" class="shequ">
          <img src="/static/images/meixi.png" alt="" class="people">
          <div class="down-wrap">
            <div class="download_button" @click="down1()"><img src="/static/images/h5_download_btn.png" alt=""></div>
          </div>
        </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import {down} from '../../static/js/index'
export default {
  components: {
  },
  data () {
    return {
      card: [
        {src: '/static/images/IMG_0082.PNG'},
        {src: '/static/images/IMG_0083.PNG'},
        {src: '/static/images/IMG_0084.PNG'},
        {src: '/static/images/IMG_0085.PNG'},
        {src: '/static/images/IMG_0086.PNG'},
        {src: '/static/images/IMG_0087.PNG'}
      ]
    }
  },
  methods: {
    down1 () {
      down()
    }
  }
}
</script>
<style scoped>
@import '../assets/css/index.css';
</style>
