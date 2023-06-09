import React from 'react'
import SponsorshipData from '../../Pages/Sponsors/SponsorshipData'
// import { useParams } from 'react-router'; 
import './funding.css'


const Funding = () => {
  // useEffect (()=>{
  //   window.scrollTo(0,0)
  // },[])



  return (


    <div id='snew' className='sponsorshipsnew'>
      <h1 className="topic sponsor-heading" >OUR SPONSORS</h1>

      {SponsorshipData.map((item) => {
        console.log(item);
        return (

          <section >
            <div className="sponsor header-section flexnew">

              <div className="header-left">
                <h1 className="new" data-text="DECATHLON">{item.name}</h1>
                <br />
                <p>{item.Content}

                </p>
                <div className="social-icons"   >
                  <a href={item.Insta}><i className="fa-brands fa-square-instagram"></i></a>
                  <a href={item.twitter}><i className="fa-brands fa-twitter-square"></i></a>
                  <a href={item.LinkedIn}><i className="fa-brands fa-linkedin"></i></a>
                  <a href={item.Website}><i className="fa fa-globe"></i></a>
                </div>

              </div>
              <div className="header-right1">
                <img src={item.imgSrc} alt=" " />
              </div>
            </div>


          </section>
        )
      })

      }


    </div>
  )



}

export default Funding;