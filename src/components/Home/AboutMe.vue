<template>
    <div class="col">
      <h5 > <strong> About Me </strong> </h5>
      <p> 
          Hey! <br/>&nbsp;&nbsp;&nbsp;&nbsp;My name is Marvin Harootoonyan (sound it out). 
          I got into programming at the age of 15.
          I started out with really high level visual programming languages to rapidly create software.
          I never thought  that I would eventually go on to become a software engineer.
          I completed  my undergraduate degree in Computer Science at California State University Northridge in May of 2018. 
          I enrolled in the graduate program shortly after taking night classes while looking for full time positions as a software engineer/full stack developer.
          I have an interest in DevOps,Automation, and Full stack web development as well as programming for desktop applications, and mobile devices. 
          I'll be sharing what I have learned through out my career on here, I hope you end up finding something useful.
          Feel free to drop me a line: MarvinHarootoonyan At gmail Dot com. 
      </p>
    </div>
</template>
<script>
export default {
  data:function (){
      return {
       
      }
  },
  name: 'AboutMe',
  props: {
    msg: String
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
  font-size: 1vw;
  color : #171E22 ! important;
  background: white;
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
}
h5 {
  padding-bottom: 2vh;
  font-size: 1rem;
}
strong {
  color : #171E22 ! important;
}
.col-3{
  padding:0px;
}

.col{
  border : 1px solid #171E22 ! important;
}



p{
  text-align: left;
  font-size: 1rem;
  word-wrap: break-word;
  padding: 5vw;
}

</style>