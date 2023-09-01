<template>
    <div class="exercise wrapper">
        <div class="container">
            <div class="exercise-main">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="exercise-item left">
                            <h4>Regular exercise activity may</h4>
                            <div class="exercise-item-outer">
                                <div class="exercise-item-inner" v-for="(exerciseItem, index) in exerciseItems" :key="index">
                                    <div class="inner-left">
                                        <img :src="exerciseItem.img" :alt="exerciseItem.img">
                                    </div>
                                    <div class="inner-right">
                                        <h6>{{exerciseItem.title}}</h6>
                                        <p>{{ exerciseItem.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="exercise-item right">
                            <div class="image-one image">
                                <img src="/src/assets/images/Fitness-3.jpg" alt="fitness">
                            </div>
                            <div class="image-two image">
                                <img src="/src/assets/images/Fitness-4.jpg" alt="fitness">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import icon1 from '@/assets/images/Fitness-Icon-1.png'
import icon2 from '@/assets/images/Fitness-Icon-2.png'
import icon3 from '@/assets/images/Fitness-Icon-3.png'

export default {
    name: 'RegularExercise',
    data(){
        return{
            exerciseItems: [
                {
                    img: icon1,
                    title: 'Strengthen your bones and muscles',
                    description: 'Exercise plays an important role in controlling your weight and preventing obesity.'
                },
                {
                    img: icon2,
                    title: 'Reduce your risk of heart diseases',
                    description: 'Exercise plays an important role in controlling your weight and preventing obesity.'
                },
                {
                    img: icon3,
                    title: 'Help you control your weight',
                    description: 'Exercise plays an important role in controlling your weight and preventing obesity.'
                },
            ]
        }
    }
}
</script>
