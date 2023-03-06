import React, { useState } from 'react'

import axios from 'axios'

function App() {
    const [photo, setPhoto] = useState("")
    const [result, setResult] = useState([])

    const changePhoto = () => {
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=iMTxBLrm8hGcUUNlgcUIu35vfRsBz9rKzJOJT2tb9gw`)
            .then((response) => {
                // console.log(response.data);
                setResult(response.data.results);
            })
    }
    return (
        <>
          <div class=" container-fluid ">
           <nav class="navbar navbar-expand-lg navbar-light ">
           <div class="container-fluid navbar-icons ">
             <h1 class="navbar-brand" href="#">Image Gallery</h1>
              <input class="form-control me-2 w-auto" type="search" placeholder="Search Images here" aria-label="Search" value={photo} onChange={(e) => {
                  setPhoto(e.target.value)
              }} ></input>
              <button class="btn btn-outline-success  first-btn" onClick={changePhoto} type="submit">Get Images</button>
              
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            <div class="collapse navbar-collapse  container-fluid" id="navbarSupportedContent">
               <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                 <li class="nav-item">
                   <h6 class="nav-link active">Explore</h6>
                 </li>
                 <li class="nav-item">
                   <h6 class="nav-link active">Collection</h6>
                 </li>
                 <li class="nav-item">
                   <h6 class="nav-link active">Community</h6>
                 </li>
               </ul>
            </div>
             
        </div>
       </nav>
       </div>
       <div class=" container-fluid bg-image ">
        
         <h1 class="main-heading">Download High Quality Images by creators</h1>
         <h6 class="sub-heading">Over 2.4 million+ stock Images by our talented community</h6>
         <div class="container-fluid ">
         <input class="form-control me-2 second-searchbar" type="search" placeholder="Search high resolution Images, categories, wallpapers" aria-label="Search" value={photo} onChange={(e) => {
                    setPhoto(e.target.value)
                }} ></input>
         </div>
        
         <button class="second-button" onClick={changePhoto} type="submit">Get Images</button>
          
       </div>
          <div className="container-fluid">
            <div class="row text-lg-start">
              {result.map((value) => {
                return (
                  <div class="col-lg-3 col-md-4 col-6 my-7">
                    <img class="main img-fluid mb-6 h-70" src={value.urls.small} alt=''/>
                    <div class="info my-2">
                      <div id="leftbox">
                        <img class="userpic img-fluid h-60" src={value.user.profile_image.small} alt=''></img>
                      </div>
                      <div id="middlebox">
                        <p class="owner imgDetails mb-0">{value.user.name}</p>
                        <p class=" username imgDetails">@{value.user.username}</p>  
                      </div>
                      <div id="rightbox">
                        <p class=" likes imgDetails">👍{value.likes}</p> 
                      </div>  
                    </div>         
                  </div> 
                )
              })}
            </div>
          </div>
        </>
    )
}

export default App
