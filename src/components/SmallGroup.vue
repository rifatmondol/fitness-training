<template>
    <div class="small-group wrapper">
        <div class="container">
            <div class="small-group-main">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="small-group-item">
                            <div class="group-item-text">
                                <h4>Our small group fitness sessions are <br> different from boot camp classes</h4>
                                <p>Our training programs combine the accountability of working with a personal trainer with the flexibility of taking one of our themed Sway Fitness classes such as strength, endurance, crosstrain, abs and more, whenever you want for the fastest results possible!</p>
                                <router-link to="/" class="d-inline-block text-decoration-none position-relative bg-primary-color">
                                    Learn More
                                    <span class="ms-1 d-inline-block">
                                            <font-awesome-icon icon="fa-solid fa-angle-right" />
                                    </span>
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="small-group-item right">
                            <div class="small-image-box">
                                <img src="/src/assets/images/Fitness-5.jpg" alt="fitness">
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
    name:'SmallGroup'
}
</script>