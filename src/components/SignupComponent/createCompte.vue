<template>
<div class="create-compte">
  <div>
      <div class="create">
          
            <label for="floatingInput">Create Compte</label>
          
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
          </div>
      </div>
  </div>
  <div>
    <img src="../../assets/undraw.png" height="400px"/>
  </div>
  <div>
  
  </div>
</div>


</template>

<script>

export default {
    name: "createCompte",
    data(){
        return {
        }
    },
    methods : {
    
        
    },
    computed:{

    },
    mounted(){

    },
    created(){


    }

}
</script>

<style>
.create-compte {
  display: flex;
  flex-wrap: wrap;
}

.create-compte > div{
  width: calc(100%/2);
  height: 400px;
}
.create-compte > div:nth-of-type(1) {
            background-color:#3535ff;
            border-radius: 0px 363px 78px 0px;
  }
.create-compte >div:nth-of-type(2){
          background-color:#3535ff;
          border-radius: 0px 87px 0px 0px;
  }
.create-compte >div:nth-of-type(3){
          background-color:#3535ff;
          width: 100%;
          height: 10px;
  }
.create {
          height: 350px;
          width: 250px;
          background-color: white;
          margin: auto;
          margin-top: 30px;
          border-radius: 70px;
}
.form-floating{
  width: 230px;
  margin: auto;
  height: 30px;
  border: 1px solid blue;
  border-radius: 10px;
}
.create > .form-floating:nth-of-type(1){
  
}
</style>
//  v-bind:style="{ width: computedWidth }"
//  v-bind:style="{ width: computedWidth }"
//  v-bind:style="{ width: computedWidth }"