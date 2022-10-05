import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function About() {
  return (
    <section id="about" className="about my-5">
      <div className="container py-5 my-5 ">
        <div className='row flex-column-reverse flex-lg-row'>
          <div className="col-xl-6 col-lg-6 col-md-5 col-sm-12 col-12 m-auto ">
            <img src="../images/ab1.png" alt="svf" className='about_img img-fluid ' />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-7 col-sm-12 col-12 m-auto ">
            <h2>About me..</h2>
            <h4>HI, MY NAME IS <span>Samia</span></h4>
            <h6><span>Foody</span> is my little corner of the internet!</h6>
            <p>I'm the voice, author, and creator behind <span>Foody</span>. What started as a casual hobby over 10 years ago in 2010 while I was working as a fourth grade teacher has now grown into a full-blown business (!!) that reaches millions of people with fun recipes each month, with content that has been featured on The Kitchn, CNN, Refinery29, Brit + Co, POPSUGAR, Huffington Post, The Everymom, PureWow, and more.

              I live in Bangladesh, My favorite things in life are a big plate of pad Thai, sunny days, and going to the dog park.</p>
          </div>
        </div>
        <div className='row my-5 social_row'>
            <div className=" social  text-center col-lg-6 col-md-6 col-sm-10 col-10  mb-2 d-flex flex-row justify-content-center">
              <FacebookIcon className='social-icon'/>
              <TwitterIcon className='social-icon'/>
              <InstagramIcon className='social-icon'/>
              <YouTubeIcon className='social-icon'/>
          </div>
          <div className=" col-xl-6 col-lg-6 col-md-6 col-sm-10 col-10 subscribe_col ">
            <h6>Subscribe Newsroom</h6>
            <form>
              <input type="email" name="email" placeholder="Email Address" />
              <button className="submit_btn " type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 25 28"
                  fill="none">
                  <path
                    d="M0.432617 14.9395L7.27524 19.9821L18.1866 9.39004L11.3003 22.9484L18.1429 27.9911L24.7124 0.534885L0.432617 14.9395Z"
                    fill="white" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className='row my-5 py-5'>
          <div className=" col-xl-7 col-lg-7 col-md-7 col-sm-10 col-10 ">
          <h2> I Love Food!</h2>
            <p>In this space, I am always sharing fresh, flavorful, (mostly) healthy recipes that I love to make and eat in my real, actual, every day life. If I wouldn’t eat it in real life, I won’t put in on the blog. My goal is to inspire you with food that is both approachable AND exciting, whether you’re cooking for yourself, your family, your roommates, or your friends. I want you to be so excited about these recipes that you eagerly await 5pm when you can go home from work and start cooking.
            On a related note, I absolutely LOVE seeing the food that you’re making. It will make my day if you tag @Foody in your Instagram photos and stories! We love to shout out our favorites on Fridays with our Reader Awards on Instagram Stories.
            </p>
          </div>
          <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-10 col-10  m-auto">
            <div className=" card card_about">
              <img src="images/download.jpg" className="img-fluid " alt="..." />
            <div className="card-body text-center">
              <h6>Pizza</h6>
              <p className="card-text">Fast Food</p>
            </div>
            </div>
          </div>
        </div>
      </div>
      </section>
  )
}

export default About