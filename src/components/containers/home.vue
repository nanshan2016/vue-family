<template>
    <div>
      <SelectorComponent></SelectorComponent>
    </div>
</template>

<script>
    import SelectorComponent from '../selector/selector.vue';
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
           SelectorComponent
        }

    }
</script>
