<template>
<div class="create-compte">
  <div v-html="ball">
  </div>
  <div>
       <div class="ball"></div> 
  </div>
  <div>
       <div class="ball"></div> 
  </div> 
  
</div>


</template>

<script>

export default {
    name: "createCompte",
    data(){
        return {
                  ball : [],
        }
    },
    methods : {
    
        
    },
    computed:{

    },
    mounted(){

    },
    created(){
        for(let i=0 ; i<200 ; i++) {
            this.ball.push("<div class='ball1'></div>") 
        }

    }

}
</script>

<style>
.create-compte {
  display: flex;
  flex-wrap: wrap;
}

.create-compte > div{
  width: calc(100%/3);
  height: 400px;
}
.create-compte > div:nth-of-type(1) {
            background-color:#3535ff;
            border-radius: 0px 363px 78px 0px;
  }
.create-compte >div:nth-of-type(2){
          background-color:#3535ff;
          border-radius: 0px 363px 78px 0px;
  }
.create-compte >div:nth-of-type(3){
          background-color:#3535ff;
           border-radius: 417px 45px 0px 86px;
  }
.ball1 {
    z-index: 2;
    background-color: white;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    position: relative;
    top : 10px;
    left : 10px;
}

</style>
//  v-bind:style="{ width: computedWidth }"
//  v-bind:style="{ width: computedWidth }"
//  v-bind:style="{ width: computedWidth }"