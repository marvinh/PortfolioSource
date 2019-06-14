<template>
   
    <div class="row me">
      <h2 > My Interests </h2>
      <div class="col-3 offset-1">
          <img class="img-fluid" src=""/>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AboutMe',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.me{
  background: #171E22;
  height: auto;
}
div {
  max-height: 100%;
  max-width: 100%;
}

.container{
  background: white;
  padding: 10%;
  padding-top: 0%;
  padding-bottom: 0%;
}

h2{
  width: 100%;
  font-family: 'Courier New', Courier, monospace;
  color: white;
  text-emphasis: bold;
  text-align: center;
}
p{
  font-family: 'Courier New', Courier, monospace;
  color: white;
  padding: 1%;
}
</style>
