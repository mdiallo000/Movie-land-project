import React from 'react';
import Banner from './Banner';

function Lobby() {
  return(
    
    <div>
    <div>
          <Banner text="Movie Land " />

      </div>

      {/* Begining of first row */}
      <div className="film-container" style={{backgroundColor:
"#EBE1DF" }} >

              <div className='film-box'>
                  <img src="https://i5.walmartimages.com/asr/f028e837-3b1f-4129-80c4-9c7edfbb8909.1bfaca7c2cc205c08268ae94b7525e68.jpeg" />

              </div>``

              <div className='film-box'>
                  <img src="https://cdn.shopify.com/s/files/1/0013/2874/2466/products/the-don-godfather-movie-poster-art-24-x-36-361_689x.jpg?v=1616628923" />

              </div>

              <div className='film-box'>
                  <img src="https://cdn.shopify.com/s/files/1/0750/3577/products/pdxc14274-vintage-movie-posters-poster-piddix_578_600x.jpg?v=1515831861"  />

              </div>

              <div className='film-box'>
                  <img src="https://imgc.allpostersimages.com/img/posters/once-upon-a-time-in-hollywood_u-L-F9JL6E0.jpg" alt='poster-view' />

              </div>

              <div className='film-box'>
                  <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2015/02/birdman-movie-poster-1.jpg?auto=format&q=60&fit=max&w=930" />

              </div>

              <div className='film-box'>
                  <img src="https://alfalfastudio.s3.amazonaws.com/wp-content/uploads/2019/01/02213214/2019_Movie_Poster_Spider_Man_Into_the_Spider_Verse.jpg" />

              </div>
              
              <div className='film-box'>
                  <img src="https://tilt.goombastomp.com/wp-content/uploads/2021/12/MV5BYTE3YWU3MjYtYTAxYy00ODQ0LTg3MDQtMmNjMDU3MDRlNTY2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_-691x1024.jpg" />

              </div>
              
              
          </div>
          {/* END OF FIRST ROW OF POSTERS  */}
            <section className="bg-dark text-danger p-5 hero-container" >
                <h1 className="text-center"> Start Browsing For Next Favorite Film</h1>

            </section>


          </div>
    
    
    
);
}

export default Lobby;
