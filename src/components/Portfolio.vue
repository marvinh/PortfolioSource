<template>
  <div class="container">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>


        <div class="columns" role="navigation" aria-label="main navigation">
          <div class="column center my-border-alt navbar is-centered is-fixed-bottom">
            <a  href="https://marvinh.github.io/portfolio/" style="color:#D84F4E" class="nav-item-alt"> 
              <figure>
                <strong class="nav-item-alt" > Marvin Harootoonyan, Software Engineer </strong>
                &nbsp;&nbsp;  &nbsp;&nbsp;
                <img style="vertical-align: middle; width:1.75rem;height:1.75rem;" src="./../assets/Emoji.svg"/>
                <font-awesome-icon icon="desktop"/>
              </figure> 
            </a>
            
            <a class="nav-item-alt" href="https://www.csun.edu/engineering-computer-science/computer-science/bachelor-science-degree-computer-science">
            <figure>
                <strong class="nav-item-alt"> B.S. in Computer Science </strong>
                <img style="vertical-align: middle;width:1.75rem;height:1.75rem;" src="./../assets/Csun-seal.svg"/>  &nbsp;&nbsp;
                <font-awesome-icon style="color: green" icon="check"/>
                <strong style="color:green" class="nav-item-alt"> Complete </strong>  
            </figure> 
            </a>
            <a class="nav-item-alt" href="https://catalog.csun.edu/academics/comp/programs/ms-computer-science/">
            <figure>
              
              <strong class="nav-item-alt"> M.S. in Computer Science </strong>
              <img style="vertical-align: middle;width:1.75rem;height:1.75rem;" src="./../assets/Csun-seal.svg"/> &nbsp;
              <font-awesome-icon class="rotating" icon="spinner"/> &nbsp;
              <strong class="nav-item-alt"> In Progress </strong>  
            </figure>
            </a>
          
          </div>
          <div class="column center navbar is-fixed-top palette-1">
           <a style="nav-item" href="https://marvinh.github.io/portfolio/" > <img style="width:2rem;height:2rem;" src="./../assets/EmojiAlt.svg"/> </a>
           <a class="nav-item active-link" > <strong> Home </strong> </a>
           <a class="nav-item" href="https://github.com/marvinh/"> <strong> Github </strong> </a>
           <a class="nav-item" href="https://www.linkedin.com/in/marvinhar/"> <strong> LinkedIn </strong> </a> 
           <a class="nav-item" > <strong> Projects </strong> </a> 
           <a class="nav-item" > <strong> Blog </strong> </a> 
           <a class="nav-item" > <strong> Thesis </strong> </a>
           <a class="nav-item" > <strong> Contact </strong> </a>
          </div>
        </div>
      
     
      


    <div style="padding-bottom:25vh;padding-top:18vh;padding-left:5vw;padding-right:5vw;" class="container is-mobile is-centered">
    <div class="columns is-mobile palette-1 my-shadow">
      <div class="column">
        <figure class="image is-1by1 is-rounded">
          <img alt="My Photo" src="../assets/Marvin.png" />
        </figure>
      </div>
      <div class="column">
        <figure class="image is-1by1 is-rounded">
          <img alt="My Photo" src="../assets/thepack.jpeg" />
        </figure>
      </div>
    </div>
 
   <div class="columns is-mobile is-centered palette-1 my-shadow">
          <AboutMe/>
    </div>


     <MyTools/>
    
    </div>
     
    

  </div>
 
</template>

<script>
import AboutMe from './AboutMe'
import MyTools from './MyTools'

export default {
  
  name: 'Portfolio',
  props: {
    msg: String
  },
  components: {
     AboutMe,
     MyTools
  }
}

</script>

<style>

a.alt{
  color: #D84F4E ! important;
}
a.nav-item {
  color : white ! important;
  background: #171E22;
  font-size: 1.5rem;
}

a.nav-item-alt {
  color : #D84F4E ! important;
  background: white;
  font-size: 1.5rem;
}

a.nav-item-alt:hover {
  border-bottom: 2px solid  #D94F4E ! important;
  text-decoration: none;
}

ul#nav li {
  display:inline;
  text-align: center;
  justify-content: center;
  color: white;
}

a.nav-item:hover { 
border-bottom: 2px solid  #D94F4E ! important;
text-decoration: none;
}

.active-link{
border-bottom: 1px solid  white ! important;
text-decoration: none; 
}



template {
  background: white;
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
}

.palette-1{
 background: #171E22 !important;
 color : white !important;
 font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
}
strong{
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
}
.palette-2{
  background: white;
  color : #D84F4E ! important;
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
}

.my-border{
  border:1px solid #171E22;
}

.my-border-alt{
  border-bottom: 1vh solid #171E22;
}

.my-border-inverse{
  border:1px solid white;
}

.my-shadow{
  box-shadow: 1vw 1vh #D84F4E!important;
}

body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
  
.wrapper {
  flex: 1;
}



</style>
