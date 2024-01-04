<template>
  <div class="q-pa-xl row q-gutter-xl" style="padding-top: 0%;">
    <div class="col-2 q-pa-sm" v-for="(card, index) in items" :key="index">
        <q-card class="my-card" flat bordered @click="productPage">


        <q-img :src="card.image">
          <!-- <div class="rating absolute-bottom-left text-subtitle2" >
            {{ card.rate }}
            <q-icon name="star" color="green"></q-icon>
            <q-separator class="q-ma-xs" color="gray" vertical />
            <text-caption>{{ card.feedback }}</text-caption>
        </div> -->
        <q-btn outline class="absolute-top-right q-ma-sm " color="white" round icon="close" size="xs"></q-btn>
        </q-img>

        <q-card-section class="q-pt-sm text-center">
          <!-- <div class="text-h6 ellipsis">
              {{ card.title }}
            </div> -->
          <div class="text-caption text-grey">
            {{ card.description }}
          </div>
          <div class="q-pt-sm">
            <text-subtitle1 class="text-weight-bold">
              Rs. {{ card.amount }}
            </text-subtitle1>
            <text-caption class="q-pl-sm" style="text-decoration: line-through; color:lightgray">Rs. {{ card.mrp }}</text-caption>
            <text-caption class="q-pl-sm" style="color:#ff7f50">({{ card.offer }})</text-caption>
          </div>
        </q-card-section>
        <q-separator></q-separator>
        <q-card-actions vertical>
          <q-btn flat color="red" no-caps>Move To Bag</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
name: 'WishListCard',
setup() {
  const router = useRouter();

  const productPage = () => {
    router.push('product');
  };


  const items = [
    {
      title: 'Fashion',
      description: 'Trending Design Patten',
      amount: '1200',
      image: 'https://img.freepik.com/free-photo/she-has-great-street-style_329181-4716.jpg?w=360&t=st=1704373282~exp=1704373882~hmac=b2f1af4af4b26738c721770565d1b2eb3ad60d078b81f0b8e9d568964658ed53',
      rate: '4.2',
      mrp: '3999',
      offer: '30% OFF',
      feedback: '101'
    },
    {
      title: 'Alto',
      description: 'Cotton Shirts',
      amount: '2200',
      image: 'https://img.freepik.com/free-photo/full-length-pleased-brunette-woman-shirt-posing-with-arms-pockets-looking-away-gray_171337-1191.jpg?size=626&ext=jpg&ga=GA1.1.738025103.1703931137&semt=ais',
      rate: '4.0',
      mrp: '3599',
      offer: '10% OFF',
      feedback: '5.1k'
    },
    {
      title: 'Fashion',
      description: 'Regular Wear',
      amount: '5000',
      image : 'https://img.freepik.com/premium-photo/stylish-brunette-asian-girl-wearing-white-tshirt-glasses-posing-against-street-urban-clothing_281858-2778.jpg?size=626&ext=jpg&ga=GA1.1.738025103.1703931137&semt=ais',
      rate: '3.8',
      mrp: '6999',
      offer: '10% OFF',
      feedback: '96'
    },
    {
      title: 'Nike',
      description: 'Trending Kurti set',
      amount: '2400',
      image: 'https://img.freepik.com/premium-photo/pretty-young-girl-wearing-yellow-stylish-dress-fashion-shoot-park_658768-587.jpg?size=626&ext=jpg&ga=GA1.1.738025103.1703931137&semt=ais',
      rate: '4.5',
      mrp: '4999',
      offer: '20% OFF',
      feedback: '2.2k'
    },
    {
      title: 'Brand',
      description: 'Kids daily wear',
      amount: '999',
      image: 'https://img.freepik.com/free-photo/front-view-cute-child-boy-white-t-shirt-yellow-jeans-holding-green-skateboard-blue-floor_179666-1008.jpg?w=360&t=st=1704374378~exp=1704374978~hmac=114582a40945071813fa4d4699fcfed9dc75a036fdc295ef2f25e4048a089e42',
      rate: '4.1',
      mrp: '3000',
      offer: '30% OFF',
      feedback: '30'
    }
  ];

  return { items, productPage };
}
});
</script>

<style lang="scss" scoped>
.rating {
  padding: 0px 5px;
  font-size: 10px;
  margin-left: 5px;
  margin-bottom: 5px;
  background: #ffffffcf;
  border: 1px solid white;
  border-radius: 2px;
  color: black;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

}

</style>
