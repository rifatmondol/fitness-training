<template>
    <div class="strong-people wrapper">
        <div class="container">
            <div class="strong-people-main">
                <div class="strong-people-outer">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="people-item left">
                                <img src="/src/assets/images/Fitness-Video.jpg" alt="fitness-video">
                                <button>
                                    <font-awesome-icon icon="fa-solid fa-play" />
                                </button>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="people-item right">
                                <h4>Creating stronger people and bodies through fitness</h4>
                                <p>We are here to support you. We’ve been in the industry for over 20 years and helped thousands of people reach their fitness goals both in person and online.</p>
                                <router-link to="/" class="d-inline-block text-decoration-none position-relative bg-primary-color">
                                    Learn More
                                    <span class="ms-1 d-inline-block">
                                            <font-awesome-icon icon="fa-solid fa-angle-right" />
                                    </span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:'StrongPeople',
    data(){
        return{

        }
    }
}
</script>