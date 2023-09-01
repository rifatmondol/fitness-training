<template>
    <div class="members wrapper">
        <h2 class="text-center">See why thousands of members love <br> training with us</h2>
        <div class="members-main">
            <div class="members-item-outer" v-for="(outerItem, outerIndex) in outerItems" :key="outerIndex">
                <div class="members-item-inner" v-for="(innerItem, innerIndex) in outerItem.innerItems" :key="innerIndex">
                    <div class="avatar-section">
                        <img :src="innerItem.img" :alt="innerItem.img">
                        <div class="name-section">
                            <span class="name d-block">{{ innerItem.name }}</span>
                            <span class="location d-block">{{ innerItem.location }}</span>
                        </div>
                    </div>
                    <div class="inner-description">
                        <h6>{{ innerItem.compliment }}</h6>
                        <p>{{ innerItem.description }}</p>
                        <div class="rating">
                            <div class="rieview-amount">
                                <p>{{innerItem.star}}.00</p>
                            </div>
                            <div class="review">
                                <span><font-awesome-icon v-for="n in maxRating" :key="n" :icon="getStarIcon(innerItem.star, n)" /></span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { faStar as fasStar} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import review1 from '@/assets/images/review1.jpg'
import review2 from '@/assets/images/review2.jpg'
import review3 from '@/assets/images/review3.jpg'
import review4 from '@/assets/images/review4.jpg'
import review5 from '@/assets/images/review5.jpg'
import review6 from '@/assets/images/review6.jpg'
import review7 from '@/assets/images/review7.jpg'

export default {
    name:'MembersComponent',
    data(){
        return{
            maxRating: 5,
            outerItems:[
                {
                    id: 1,
                    innerItems:[
                        {
                            img: review4,
                            name: 'Rayes Smith',
                            location: 'New York',
                            compliment: 'Awesome work',
                            description:'Dave my trainer has helped me achieve my goals so far and I love our sessions.',
                            star: 4
                        }
                    ]
                },
                {
                    id: 2,
                    innerItems:[
                        {
                            img: review5,
                            name: 'Ernest Smith',
                            location: 'San Francisco',
                            compliment: 'Excellent gym!!',
                            description:'Dave my trainer has helped me achieve my goals so far and I love our sessions.',
                            star: 5
                        }
                    ]
                },
                {
                    id: 3,
                    innerItems:[
                        {
                            img: review3,
                            name: 'Thomas Smith',
                            location: 'Miami',
                            compliment: 'Awesome work',
                            description:'Dave my trainer has helped me achieve my goals so far and I love our sessions.',
                            star: 5
                        },
                        {
                            img: review2,
                            name: 'Monica Smith',
                            location: 'Madrid',
                            compliment: 'Very effective!!',
                            description:'Dave my trainer has helped me achieve my goals so far and I love our sessions.',
                            star: 4
                        }
                    ]
                },
                {
                    id: 4,
                    innerItems:[
                        {
                            img: review6,
                            name: 'Eloise Smith',
                            location: 'Las Vegas',
                            compliment: 'Nice training',
                            description:'Dave my trainer has helped me achieve my goals so far and I love our sessions.',
                            star: 4
                        }
                    ]
                },
                {
                    id: 5,
                    innerItems:[
                        {
                            img: review7,
                            name: 'Martha Smith',
                            location: 'Boston',
                            compliment: 'Great traning!',
                            description:'Dave my trainer has helped me achieve my goals so far and I love our sessions.',
                            star: 5
                        },
                        {
                            img: review1,
                            name: 'Vincent Smith',
                            location: 'New York',
                            compliment: 'I love Sway!',
                            description:'Dave my trainer has helped me achieve my goals so far and I love our sessions.',
                            star: 4
                        }
                    ]
                },
                
                {
                    id: 6,
                    innerItems:[
                        {
                            img: review3,
                            name: 'Martin Smith',
                            location: 'San Francisco',
                            compliment: 'Awesome training',
                            description:'Dave my trainer has helped me achieve my goals so far and I love our sessions.',
                            star: 5
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        getStarIcon(starValue, index) {
            return index <= starValue ? fasStar : farStar;
        }
    }
}
</script>