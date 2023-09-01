<template>
    <div class="banner wrapper">
        <div class="banner-section">
            <div class="container">
                <div class="banner-main">
                    <div class="banner-text">
                        <h1>Reach your goals <br> and <span>feel strong.</span></h1>
                        <p>Sway Fit is about your goals, your dreams and your results. <br> We provide the motivation and everything you need to win.</p>
                        <router-link to="/" class="d-inline-block text-decoration-none position-relative bg-primary-color start">
                            Get Started
                            <span class="ms-1 d-inline-block">
                                <font-awesome-icon icon="fa-solid fa-angle-right" />
                            </span>
                        </router-link>

                        <div class="scroll">
                            <a href="#training"><img src="../assets/images/scroll.png" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:'BannerComponent',
}
</script>