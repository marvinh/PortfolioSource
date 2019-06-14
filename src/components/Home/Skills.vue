<template>
    <div class="container">
       <h5> {{ superSkill.category }} </h5>
        <div class="row">
            <div class="col-3" v-for="skill in superSkill.skillCards" v-bind:key="superSkill.id" >
                <SkillCard :skillCard="skill"/>
            </div>
        </div>
    </div>
</template>

<script>
import SkillCard from './SkillCard';

export default {
  name: 'Skills',
  data: function() {
      return {
          
      }
  },
  props: {
    superSkill: {
        id : Number,
        category: String,
        skillCards : Array
    }
  },
  components: {
    SkillCard
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
}
.container {
  font-size: 2vw;
  color : white ! important;
  background: #171E22;
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
}
h5 {
  padding-bottom: 10vh;
}
.col-3{
  padding:0px;
}

</style>
