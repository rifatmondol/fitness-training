<template>
    <Header/>
    <Banner/>
    <Training/>
    <RegularExercise/>
    <SmallGroup/>
    <Pricing/>
    <StrongPeople/>
    <Members/>
    <SignUp/>
    <FooterPart/>
    <BottomToTop/>
</template>

<script>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import Training from '@/components/Training.vue'
import RegularExercise from '@/components/RegularExercise.vue'
import SmallGroup from '@/components/SmallGroup.vue'
import Pricing from '@/components/Pricing.vue'
import StrongPeople from '@/components/StrongPeople.vue'
import Members from '@/components/Members.vue'
import SignUp from '@/components/SignUp.vue'
import FooterPart from '@/components/FooterPart.vue'
import BottomToTop from '@/components/BottomToTop.vue'


export default{
    name:'HomeView',
    components:{
        Header,
        Banner,
        Training,
        RegularExercise,
        SmallGroup,
        Pricing,
        StrongPeople,
        Members,
        SignUp,
        FooterPart,
        BottomToTop
    }
}
</script>