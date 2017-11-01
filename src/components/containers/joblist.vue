<template>
    <div>
       <SliderComponent></SliderComponent>
    </div>
</template>
<script>
    import SliderComponent from '../slider/slider.vue';
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            SliderComponent
        }
    }
</script>
