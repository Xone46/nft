<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import {db} from '../firebase/firebase'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
   data() {
            return {
                
            }
  },
  created(){
    // db.collection('users').onSnapshot((snapshotChange) => {
              
    //             snapshotChange.forEach((doc) => {
    //                         console.log(doc.data().lastName)
    //             });
    //         })
            
  }
  
}
</script>
