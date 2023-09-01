<template>
    <div class="signup-section wrapper">
        <div class="container">
            <hr class="hr">
            <div class="signup-main text-center">
                <h2>Start with our 
                    <span class="main">
                        <span v-for="(word, index) in words" :key="index" :class="['word', { active: index === currentIndex, inactive: index !== currentIndex}]">{{ word }}</span>
                    </span>
                </h2>
                <p>Get a free training session with your new membership. Flexible plans available. <br> We have many classes throughout the week.</p>
                <router-link to="/" class="d-inline-block text-decoration-none position-relative bg-primary-color">
                    Sign Up Now
                    <span class="ms-1 d-inline-block">
                        <font-awesome-icon icon="fa-solid fa-angle-right" />
                    </span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:'SignUp',
    data(){
        return{
            words:['personal trainers','custom programs','fitness mobile app'],
            currentIndex: 0,
        }
    },
    mounted(){
        this.changeTitle()
    },
    methods:{
        changeTitle(){
            setInterval(()=>{
                this.currentIndex = (this.currentIndex + 1) % this.words.length;
            }, 1500)
            
        }
    }
}
</script>

<style>

</style>