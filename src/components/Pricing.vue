<template>
    <div class="pricing wrapper">
        <div class="container">
            <div class="pricing-main">
                <h2 class="text-center">Get 2 Free months! Plus 1 month <br> of Free personal training!</h2>

                <div class="billed-header">
                    <div class="billed-main text-center">
                        <span class="month order-1" :class="{active: ismonthClicked}">Billed Monthly</span>
                        <span class="year order-3" :class="{active: isyearClicked}">Billed Yearly</span>
                        <input type="checkbox" class="checkbox order-2" @click="checkboxClicked">
                    </div>
                </div>

                <div class="main-pricing">
                    <div class="pricing-outer" v-for="(priceDetail,index) in priceDetails" :key="index">
                        <div class="pricing-inner">
                            <h5>{{priceDetail.category}}</h5>
                            <div class="inner-section-description">
                                <div class="price-section">
                                    <p class="price" v-if="isyearClicked">$ {{priceDetail.priceYearly}}<span>/yr</span></p>
                                    <p class="price" v-if="ismonthClicked">$ {{priceDetail.priceMonthly}}<span>/mo</span></p>
                                </div>
                                <p class="description">Sign up today and get a <br> free training session</p>
                            </div>
                            <hr class="hr">
                            <div class="weight-loss">
                                <p v-for="(weightList, weightIndex) in priceDetail.weightlists" :key="weightIndex">{{weightList.main}} <span>{{weightList.submain}}</span></p>
                            </div>
                            <hr class="hr">
                            <div class="join">
                                <router-link to="/" class="d-inline-block text-decoration-none">Join Now</router-link>
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
    name:"PricingComponent",
    data(){
        return{
            ismonthClicked: true,
            isyearClicked: false,
            priceDetails:[
                {
                    category: 'Standard',
                    priceYearly: '119',
                    priceMonthly: '19',
                    weightlists:[
                        {
                            main: 'Weight loss',
                            submain:'challenges'
                        },
                        {
                            main: 'Personal',
                            submain:'training'
                        },
                        {
                            main: 'Walking',
                            submain:'groups'
                        },
                        {
                            main: 'Boot',
                            submain:'camp'
                        },
                    ],
                },
                {
                    category: 'Extended',
                    priceYearly: '299',
                    priceMonthly: '29',
                    weightlists:[
                        {
                            main: 'Weight loss',
                            submain:'challenges'
                        },
                        {
                            main: 'Personal',
                            submain:'training'
                        },
                        {
                            main: 'Walking',
                            submain:'groups'
                        },
                        {
                            main: 'Boot',
                            submain:'camp'
                        },
                    ],
                },
                {
                    category: 'Premium',
                    priceYearly: '599',
                    priceMonthly: '59',
                    weightlists:[
                        {
                            main: 'Weight loss',
                            submain:'challenges'
                        },
                        {
                            main: 'Personal',
                            submain:'training'
                        },
                        {
                            main: 'Walking',
                            submain:'groups'
                        },
                        {
                            main: 'Boot',
                            submain:'camp'
                        },
                    ],
                },
            ]
        }
    },
    methods:{
        checkboxClicked(){
            this.ismonthClicked = !this.ismonthClicked;
            this.isyearClicked = !this.isyearClicked
        }
    }
}
</script>