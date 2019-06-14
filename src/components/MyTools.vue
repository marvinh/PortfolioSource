<template>

    <div>
        <div class="columns palette-1 my-shadow is-mobile is-centered">
        <div class="column is-mobile">
            <h2> <strong style="color:white"> Tools I like and have used extensively. </strong> </h2>
        </div>
        </div>

    <div class="columns palette-1 my-shadow is-mobile is-centered">
        <div class="column">
            <h2> Frontend: </h2>
        </div>
    </div>
    <div class="columns palette-1 my-shadow is-mobile is-centered">
         <div class="column  is-mobile">
                <h3 class="is-mobile" > Javascript: Vue </h3>
                <figure class="image is-mobile is-4by4">
                    <a href="https://cli.vuejs.org"> 
                        <img src="./../assets/Vue.svg"/>
                    </a>
                </figure>
        </div>
        <div class="column is-mobile">
                <h3 class="is-mobile"> Typescript: Angular2+ </h3>
                <figure class="image is-mobile is-4by4">
                    <a href="https://angular.io/">
                        <img src="./../assets/Angular.svg"/>
                    </a>
                </figure>
        </div>
            <div class="column is-mobile">
                <h3 class="is-mobile"> HTML/CSS: Bulma </h3>
                <figure class="image is-mobile is-4by4">
                    <a href="https://bulma.io"> 
                        <img src="./../assets/Bulma.svg"/>
                    </a>
                </figure>
            </div>
             <div class="column is-mobile">
                <h3 class="is-mobile"> HTML/CSS: Bootstrap </h3>
                <figure class="image is-mobile is-4by4">
                    <a href="https://getbootstrap.com/"> 
                        <img src="./../assets/Bootstrap.svg"/>
                    </a>
                </figure>
            </div>
    </div>

        <div class="columns palette-1 my-shadow is-mobile is-centered">
        <div class="column is-mobile">
            <h2> Backend: </h2>
        </div>
        </div>
    

    <div class="columns palette-1 my-shadow is-mobile is-centered">
       <div class="column is-mobile">
                <h3> PHP: Laravel </h3>
                <figure class="image is-mobile is-4by4">
                <a href="https://laravel.com">
                    <img src="./../assets/Laravel.svg"/>
                </a>
                </figure>
        </div>
         <div class="column is-mobile">
                <h3> Java/Kotlin: Spring-Boot </h3>
                <figure class="image is-mobile is-4by4">
                    <a href="https://spring.io/">
                        <img src="./../assets/Spring.svg"/>
                    </a>
                </figure>
        </div>
           <div class="column is-mobile">
                <h3> Ruby: Ruby on Rails </h3>
                <figure class="image is-mobile is-4by4">
                    <a href="https://rubyonrails.org/">
                        <img src="./../assets/Rails.svg"/>
                    </a>
                </figure>
        </div>
            <div class="column is-mobile">
                <h3> Python: Flask </h3>
                <figure class="image is-mobile is-4by4">
                   <a href="http://flask.pocoo.org"> 
                    <img src="./../assets/Flask.svg"/>
                   </a>
                </figure>
            </div>
    </div>

    <div class="columns palette-1 my-shadow is-mobile is-centered">
        <div class="column">
            <h2> Desktop/Mobile: </h2>
        </div>
    </div>
    
    <div class="columns palette-1 my-shadow is-mobile is-centered">
       <div class="column is-mobile">
                <h3 class="is-mobile"> Java/Kotlin: Android SDK </h3>
                <figure class="image is-mobile is-4by4">
                    <a href="https://developer.android.com/docs"> 
                        <img src="./../assets/Android.svg"/>
                    </a>
                </figure>
        </div>
         <div class="column">
                <h3> Javascript : React Native  </h3>
                <figure class="image is-mobile is-4by4">
                <a href="https://facebook.github.io/react-native"> 
                    <img src="./../assets/React.svg"/>
                </a>
                </figure>
        </div>
            <div class="column">
                <h3> C/C++: JUCE </h3>
                <figure class="image is-mobile is-4by4">
                
                <a href="https://juce.com"> 
                    <img src="./../assets/Juce.svg"/>
                </a>
                
                </figure>
            </div>
    </div>

    </div>

</template>
<script>
export default {
  name: 'MyTools',
  props: {
    msg: String
  }
}
</script>

<style scoped>

h1,h2{
  width:100%;text-align:center;
  font-size: 1.33rem;
}

</style>