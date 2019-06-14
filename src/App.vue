<template>
  <div id="app">
    <header>
        <nav class="fixed-top">
          <a @mouseover="brand_hover=true" @mouseleave="brand_hover=false">
           <router-link to='/' exact>
           <img v-show="!brand_hover" style="vertical-align: middle; width:1.33em;height:1.33em;" v-bind:src="brand_image"/>
           <img v-show="brand_hover" style="vertical-align: middle; width:1.33em;height:1.33em;" v-bind:src="brand_image_on_hover"/>
           <strong> Home </strong> 
           </router-link>
          </a>
          <a href="https://github.com/marvinh/"> <strong> Github </strong> </a>
          <a href="https://www.linkedin.com/in/marvinhar/"> <strong> LinkedIn </strong> </a> 
          <a> <router-link to='/projects'> <strong> Projects </strong> </router-link> </a> 
          <a> <router-link to='/blog'>  <strong> Blog </strong> </router-link> </a> 
          <a> <router-link to='/thesis'> <strong> Thesis </strong> </router-link> </a>
          <a> <router-link to='/contact'> <strong> Contact </strong> </router-link> </a> 
        </nav>
    </header>
     <router-view></router-view> 
    <footer>
        <nav class="fixed-bottom">
          <ul class="ul-alt">
          <li>
            <a @mouseover="brand_hover=true" @mouseleave="brand_hover=false" href="https://marvinh.github.io/portfolio/" class="nav-item-alt"> 
              <figure>
                <strong> Marvin Harootoonyan, Software Engineer </strong>
                <img  v-show="!brand_hover" style="vertical-align: middle; width:1.33em;height:1.33em;" v-bind:src="brand_image"/>
                <img  v-show="brand_hover" style="vertical-align: middle; width:1.33em;height:1.33em;" v-bind:src="brand_image_on_hover"/>
                <font-awesome-icon icon="desktop"/>
              </figure> 
            </a>
          </li>
          <li>
            <a class="nav-item-alt" href="https://www.csun.edu/engineering-computer-science/computer-science/bachelor-science-degree-computer-science">
            <figure>
                <strong class="nav-item-alt"> B.S. in Computer Science </strong>
                <img style="vertical-align: middle;width:1.33em;height:1.33em;" src="./assets/Csun-seal.svg"/>  &nbsp;&nbsp;
                <font-awesome-icon style="color: green" icon="check"/>
                <strong style="color:green" class="nav-item-alt"> Complete </strong>  
            </figure> 
            </a>
          </li>
          <li>
            <a  href="https://catalog.csun.edu/academics/comp/programs/ms-computer-science/">
            <figure>
              <strong > M.S. in Computer Science </strong>
              <img style="vertical-align: middle;width:1.33em;height:1.33em;" src="./assets/Csun-seal.svg"/> &nbsp;
              <font-awesome-icon style="color: #D84F4E" class="rotating" icon="spinner"/> &nbsp;
              <strong style="color:#D84F4E"  class="nav-item-alt"> In Progress </strong>  
            </figure>
            </a>
          </li>
          </ul>
        </nav>
    </footer>
   
  </div>

</template>

<script>
import Home from './components/Home/Home'

export default {
  name: 'app',
  data: function() {
      return {
        brand_hover: false,
        brand_image: require('./assets/EmojiAlt.svg'),
        brand_image_on_hover: require('./assets/Emoji.svg'),
      }
  }
  ,
  methods: {
  mouseover: function() {

      brand_hover : true;
    
  },
  mouseleave: function() {

      brand_hover: false;
      
  }
  },
  components: {
    Home
  }
}

</script>



<style>


a{
  font-size: 1.1rem;
  color :  #171E22 ! important;
  text-decoration: none;
}

a:hover{
  color: #D84F4E ! important;
  text-decoration: none;
}


.router-link-active{
  color: #D84F4E ! important;
  text-decoration: underline;
}

.active{
  color: #D84F4E ! important;
  text-decoration: underline;
}
#app {
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5vw;

}



.container {
  color : #171E22 ! important;
  background: white;
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
}

footer {
  padding-top: 40vh;
 
}

header{
  padding-bottom: 10vh;
}

ul{
   border: 1px solid #171E22 ;
}
nav {
  border: 1px solid #171E22 ;
  background: white;
}


@keyframes rotating
    {
    from
        {
        transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        }
    to
        {
        transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        }
    }
@-webkit-keyframes rotating
    {
    from
        {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        }
    to
        {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        }
    }
.rotating
    {
    -webkit-animation: rotating 4s linear infinite;
    -moz-animation: rotating 4s linear infinite;
    -ms-animation: rotating 4s linear infinite;
    -o-animation: rotating 4s linear infinite;
    animation: rotating 4s linear infinite;
    }

</style>
