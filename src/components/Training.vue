<template>
    <div class="training wrapper" id="training">
        <div class="container">
            <div class="training-main">
                <div class="title-part">
                    <h2 class="text-center mb-5">Get the customized personal training you're <br> looking for – in or out of the gym</h2>
                </div>

                <div class="content-part mt-5 pt-4">
                    <swiper
                    :modules="modules"
                    :breakpoints="swiperOptions.breakpoints"
                    navigation
                    :pagination="{ clickable: true }"
                    >
                        <swiper-slide v-for="list in lists" :key="list.img">
                            <div class="mb-4">
                                <div class="content-item">
                                    <div class="image-part">
                                        <router-link to="/"><img :src="list.img" :alt="list.img"></router-link>
                                    </div>
                                    <div class="details-part mt-4">
                                        <h6 class="title">{{ list.title }}</h6>
                                        <p class="text-dark-gray">{{ list.description }}</p>
                                        <router-link to="/" class="text-decoration-none btn-link">{{ list.button }}</router-link>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import fitness1 from '@/assets/images/fitness-img-1.jpg'
import fitness2 from '@/assets/images/fitness-img-2.jpg'
import fitness3 from '@/assets/images/fitness-img-3.jpg'
import fitness4 from '@/assets/images/fitness-img-4.jpg'

export default{
    name:'BestPrice',
    data(){
        return{
            lists:[
                {img: fitness1, title: 'Training', description: 'Every body is different which is why our personal trainers provide customized programs tailored for every individual’s goals, abilities, and fitness IQ.', button:'Learn More'},
                {img: fitness2, title: 'CrossFit', description: 'Every body is different which is why our personal trainers provide customized programs tailored for every individual’s goals, abilities, and fitness IQ.', button:'Learn More'},
                {img: fitness3, title: 'Fitness', description: 'Every body is different which is why our personal trainers provide customized programs tailored for every individual’s goals, abilities, and fitness IQ.', button:'Learn More'},
                {img: fitness4, title: 'Cardio', description: 'Every body is different which is why our personal trainers provide customized programs tailored for every individual’s goals, abilities, and fitness IQ.', button:'Learn More'},
                {img: fitness1, title: 'Training', description: 'Every body is different which is why our personal trainers provide customized programs tailored for every individual’s goals, abilities, and fitness IQ.', button:'Learn More'},
                {img: fitness2, title: 'CrossFit', description: 'Every body is different which is why our personal trainers provide customized programs tailored for every individual’s goals, abilities, and fitness IQ.', button:'Learn More'},
            ],
            modules: [Pagination, Navigation],
            swiperOptions: {
                breakpoints: { 
                    320: {       
                        slidesPerView: 1,
                        spaceBetween: 20     
                    },              
                    768: {       
                        slidesPerView: 2,
                        spaceBetween: 25     
                    },                   
                    1200: {       
                        slidesPerView: 3,       
                        spaceBetween: 30     
                    } 
                }
            }
        }
    },
    components: {
      Swiper,
      SwiperSlide,
    },
}
</script>

<style>
</style>