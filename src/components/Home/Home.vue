<template>
    <div class="container">
      <div class="row"> 
         <div class="col-6">
                <img class="embed-responsive embed-responsive-4by3"  v-bind:src="my_image"/>
        </div>
        <div class="col-6">
                <img class="embed-responsive embed-responsive-4by3" v-bind:src="my_dogs_image"/>
        </div> 
      </div>
      <div class="row row-alt">
        <AboutMe />
      </div>
        <h5> {{message}} </h5>
        <div class="row"  v-for="superSkill in superSkills">
            <Skills :superSkill="superSkill" />
        </div>
    </div>
</template>
<script>
import AboutMe from './AboutMe';
import Skills from './Skills';
export default {
  name: 'Home',
  data: function() {
      return {
        my_dogs_image: require("../../assets/thepack.jpeg"),
        my_image : require("../../assets/Marvin.png"),
       message : "Tools I like and have used extensively.",
       superSkills : [{
          category : "Frontend",
          skillCards :
          [
            {
              id : 1,
              name : "Vue",
              language : "Javascript",
              image : require("../../assets/Vue.svg"),
              link : "https://cli.vuejs.org/"
            },
             {
              id : 2,
              name : "Angular2+",
              language : "Typescript",
              image : require("../../assets/Angular.svg"),
              link : "https://angular.io/"
            },
            {
              id : 3,
              name : "Bulma",
              language : "HTML/CSS",
              image : require("../../assets/Bulma.svg"),
              link : "https://bulma.io/"
            },
            {
              id : 4,
              name : "Bootstrap",
              language : "HTML/CSS",
              image : require("../../assets/Bootstrap.svg"),
              link : "https://getbootstrap.com/"
            }

          ]
          ,
          count : 4
        ,        
      },
    
      { 
        category : "Backend",
          skillCards :
          [
            {
              id : 1,
              name : "Laravel",
              language : "PHP",
              image : require("../../assets/Laravel.svg"),
              link : "https://laravel.com/"
            },
             {
              id : 2,
              name : "Spring Boot",
              language : "Java/Kotlin",
              image : require("../../assets/Spring.svg"),
              link : "https://spring.io/"
            },
            {
              id : 3,
              name : "Ruby on Rails",
              language : "Ruby",
              image : require("../../assets/Rails.svg"),
              link : "https://rubyonrails.org/"
            },
            {
              id : 4,
              name : "Flask",
              language : "Python",
              image : require("../../assets/Flask.svg"),
              link : "http://flask.pocoo.org/"
            }
          ],
          count : 4
      },
       { 
        category : "Desktop/Mobile",
          skillCards :
          [
            {
              id : 1,
              name : "Android SDK/NDK",
              language : "Java/Kotlin/C/C++",
              image : require("../../assets/Android.svg"),
              link : "https://developer.android.com/docs"
            },
             {
              id : 2,
              name : "React Native",
              language : "Javascript",
              image : require("../../assets/React.svg"),
              link : "https://facebook.github.io/react-native/"
            },
            {
              id : 3,
              name : "Juce",
              language : "C/C++",
              image : require("../../assets/Juce.svg"),
              link : "https://shop.juce.com/get-juce/"
            },
          ],
          count : 3
      } 
  
  ]
  }
  }
  ,
  components: {
    Skills,
    AboutMe
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
img {
    width: 25vw; /* You can set the dimensions to whatever you want */
    height: 25vw;
    object-fit: cover;
}

.col-6{
    padding: 10vw;
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
  box-shadow : 1vw 1vw #D84F4E ! important;
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
}
h5 {
  padding-bottom: 10vh;
}
.col-3{
  padding:0px;
}

.row-alt{
  color :#171E22 ! important;
  background: white ! important; 
}

</style>