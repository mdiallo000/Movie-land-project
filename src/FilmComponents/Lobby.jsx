import React from 'react';
import Banner from './Banner';

function Lobby() {
  return(
    
    <div>
    <div>
          <Banner text="Movie Land " />

      </div>

      {/* Begining of first row */}
      <div className="film-container" >

              <div className='film-box'>
                  <img src="https://i5.walmartimages.com/asr/f028e837-3b1f-4129-80c4-9c7edfbb8909.1bfaca7c2cc205c08268ae94b7525e68.jpeg" />

              </div>``

              <div className='film-box'>
                  <img src="https://cdn.shopify.com/s/files/1/0013/2874/2466/products/the-don-godfather-movie-poster-art-24-x-36-361_689x.jpg?v=1616628923" />

              </div>

              <div className='film-box'>
                  <img src="https://cdn.shopify.com/s/files/1/0750/3577/products/pdxc14274-vintage-movie-posters-poster-piddix_578_600x.jpg?v=1515831861" />

              </div>

              <div className='film-box'>
                  <img src="https://imgc.allpostersimages.com/img/posters/once-upon-a-time-in-hollywood_u-L-F9JL6E0.jpg" />

              </div>

              <div className='film-box'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4psQ7LKG-09VHc3EQya-5cgk_H_ZPTIU6hA&usqp=CAU" />

              </div>

              <div className='film-box'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4psQ7LKG-09VHc3EQya-5cgk_H_ZPTIU6hA&usqp=CAU" />

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
