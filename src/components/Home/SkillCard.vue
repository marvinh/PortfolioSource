<template>
       <div class="card" style="width: 18rem;">
            <a v-bind:href="skillCard.link"> 
                <img class="card-img-top" v-bind:src="skillCard.image" v-bind:alt="skillCard.name + ' and documentation link' ">
            </a>
        <div class="card-body">
              <h5> {{ skillCard.name }} </h5>
              <p > Language(s): {{ skillCard.language }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SkillCard',
  data: function() {
      return {
          
      }
  },
  props: {
    skillCard: {
        language: String,
        name:String, 
        image: String, 
        link: String 
    }
  },
  mounted :function(){
    /*
    console.log("mounted function ran");
    const axios = require('axios');
    const vm = this;
      // GET request for remote image
    axios({
        method: 'get',
        url: 'https://pokeapi.co/api/v2/pokemon/pikachu',
        responseType: 'stream'
    })
    .then(function (response) {
        console.log(response.data);
        vm.pokemon = response.data;
    });
    */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  width: 100%;
}
h5{
  font-size: 2vw;
}
p {
 font-size: 2vw;
}
.card{
  color : white ! important;
  background: #171E22;
}
</style>
