<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      navigation
      arrows
      height="250px"
      infinite
      :autoplay="autoplay"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <div class="rounded-borders col-3 ">
            <q-img src="https://img.freepik.com/free-photo/attractive-woman-stylish-outfit-walking-city-street-fashion-spring-summer-trend-smiling-happy-mood-wearing-pink-jacket-blouse-view-from-back-elegance_285396-4486.jpg?w=996&t=st=1703935784~exp=1703936384~hmac=ed18ae9bffbfe0705b4d45d1677ff51b52a024c3ce0eb6d1c0306614a6c21323" no-native-menu>
              <div class="absolute-bottom text-subtitle1 text-center">
            Fasion
          </div>
            </q-img>

          </div>
          <div class="rounded-borders col-3 ">
            <q-img src="https://img.freepik.com/free-photo/lady-poses-dressing-room-with-bright-clothes-shoes-girl-beret-lilac-blouse-looking-camera-pink-background_197531-17602.jpg?w=996&t=st=1703935988~exp=1703936588~hmac=33a5a1b0a3068d82cb9f8a439247d43cb20f1a27474f44a018bfb62e56b10185" no-native-menu>
              <div class="absolute-bottom text-subtitle1 text-center">
                Womens World
          </div>
            </q-img>

          </div>
          <div class="rounded-borders col-3">
            <q-img src="https://img.freepik.com/free-photo/stylish-women-with-paper-bags_23-2147786848.jpg?w=996&t=st=1703936024~exp=1703936624~hmac=eca8e4caf672c3d5bc55dea79e26afc8c64c8798bbcf7af68eb586e8e731bfd7" no-native-menu>
              <div class="absolute-bottom text-subtitle1 text-center">
            Caption
          </div>
            </q-img>

          </div>
          <div class="rounded-borders col-3 ">
            <q-img src="https://img.freepik.com/free-photo/two-young-pretty-girls-looking-dresses-try-it-while-choosing-shop_155003-15663.jpg?w=996&t=st=1703936060~exp=1703936660~hmac=2a32083c3d68f170cef67c0cacece387d3d81e6671a34c300358be91f12f3224" no-native-menu>
              <div class="absolute-bottom text-subtitle1 text-center">
            Caption
          </div>
            </q-img>

          </div>
          <!-- <q-img class="rounded-borders col-3 full-height" src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-img class="rounded-borders col-3 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg" />
          <q-img class="rounded-borders col-3 full-height" src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <q-img class="rounded-borders col-3 full-height" src="https://cdn.quasar.dev/img/quasar.jpg" /> -->
        </div>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-3 full-height" src="https://cdn.quasar.dev/img/cat.jpg" />
          <q-img class="rounded-borders col-3 full-height" src="https://cdn.quasar.dev/img/linux-avatar.png" />
          <q-img class="rounded-borders col-3 full-height" src="https://cdn.quasar.dev/img/material.png" />
          <q-img class="rounded-borders col-3 full-height" src="https://cdn.quasar.dev/img/donuts.png" />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
name: 'WhiteCarousel',
setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
});
</script>

<style>

</style>
