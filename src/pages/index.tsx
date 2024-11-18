import MainLayout from "@/components/Layout/MainLayout";
import Image from 'next/image';
import Link from "next/link";

const Index: React.FC = () => {
  return (
    <MainLayout>
      <section id="bricks">
        <div className="row masonry">
            <div className="bricks-wrapper">
              <div className="grid-sizer"></div>
              <div className="brick entry featured-grid animate-this">
                <div className="entry-content">
                  <div id="featured-post-slider" className="flexslider">
                  <ul className="slides">
                    <li>
                      <div className="featured-post-slide">

                        <div className="post-background" style={{backgroundImage: "url('/static/thumbs/featured/featured-1.jpg')" }}></div>

                        <div className="overlay"></div>			   		

                        <div className="post-content">
                          <ul className="entry-meta">
                            <li>September 06, 2016</li> 
                            <li><Link href="#" >Naruto Uzumaki</Link></li>				
                          </ul>	

                          <h1 className="slide-title"><Link href="single-standard.html" title="">Minimalism Never Goes Out of Style</Link></h1> 
                        </div> 				   					  

                      </div>
                    </li>

                    <li>
                      <div className="featured-post-slide">

                        <div className="post-background" style={{backgroundImage: "url('/static/thumbs/featured/featured-2.jpg')" }}></div>

                        <div className="overlay"></div>			   		

                        <div className="post-content">
                          <ul className="entry-meta">
                            <li>August 29, 2016</li>
                            <li><Link href="#">Sasuke Uchiha</Link></li>					
                          </ul>	

                          <h1 className="slide-title"><Link href="single-standard.html" title="">Enhancing Your Designs with Negative Space</Link></h1>
                        </div>		   				   					  
                    
                      </div>
                    </li>

                    <li>
                      <div className="featured-post-slide">

                        <div className="post-background" style={{backgroundImage: "url('/static/thumbs/featured/featured-3.jpg')" }}></div>

                        <div className="overlay"></div>			   		

                        <div className="post-content">
                          <ul className="entry-meta">
                            <li>August 27, 2016</li>
                            <li><Link href="#" className="author">Naruto Uzumaki</Link></li>					
                          </ul>	

                          <h1 className="slide-title"><Link href="single-standard.html" title="">Music Album Cover Designs for Inspiration</Link></h1>
                        </div>

                      </div>
                    </li>
                  </ul>
                </div>
                </div>
              </div>

              <article className="brick entry format-standard animate-this">

                  <div className="entry-thumb">
                      <Link href="single-standard.html" className="thumb-link">
                        <Image 
                          src="/static/thumbs/diagonal-building.jpg" 
                          alt="building" 
                          width={1200} 
                          height={800}
                          style={{ width: 'auto', height: 'auto' }} 
                        />
                      </Link>
                  </div>

                  <div className="entry-text">
                    <div className="entry-header">

                      <div className="entry-meta">
                        <span className="cat-links">
                          <Link href="#">Design</Link> 
                          <Link href="#">Photography</Link>               				
                        </span>			
                      </div>

                      <h1 className="entry-title"><Link href="single-standard.html">Just a Standard Format Post.</Link></h1>
                      
                    </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
                  </div>

                </article>

                <article className="brick entry format-standard animate-this">

                  <div className="entry-thumb">
                      <Link href="single-standard.html" className="thumb-link">
                        <Image 
                          src="/static/thumbs/ferris-wheel.jpg" 
                          width={1200} 
                          height={800} 
                          alt="ferris wheel" 
                          style={{ width: 'auto', height: 'auto' }} 
                        />                   
                      </Link>
                  </div>

                  <div className="entry-text">
                    <div className="entry-header">

                      <div className="entry-meta">
                        <span className="cat-links">
                          <Link href="#">Design</Link> 
                          <Link href="#">UI</Link>                			
                        </span>			
                      </div>

                      <h1 className="entry-title"><Link href="single-standard.html">This Is Another Standard Format Post.</Link></h1>
                      
                    </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
                  </div>
                  
                </article>

                <article className="brick entry format-audio animate-this">

                  <div className="entry-thumb">
                      <Link href="single-audio.html" className="thumb-link">
                        <Image 
                          src="/static/thumbs/concert.jpg" 
                          width={1200} 
                          height={800} 
                          alt="concert" 
                          style={{ width: 'auto', height: 'auto' }}
                        />                      
                      </Link>

                      <div className="audio-wrap">
                      <audio
                        id="player"
                        src="/media/AirReview-Landmarks-02-ChasingCorporate.mp3"
                        // width={1200}
                        // height={42}
                        controls
                        style={{ width: 'auto', height: 'auto' }}
                      >
                      </audio>
                      </div>
                  </div>

                  <div className="entry-text">
                    <div className="entry-header">
                      <div className="entry-meta">
                        <span className="cat-links">
                          <Link href="#">Design</Link> 
                          <Link href="#">Music</Link>                				
                        </span>			
                      </div>

                      <h1 className="entry-title"><Link href="single-audio.html">This Is a Audio Format Post.</Link></h1>
                      
                    </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
                  </div>
                  
                </article>

              <article className="brick entry format-quote animate-this" >

                  <div className="entry-thumb">                  
                    <blockquote>
                        <p>Good design is making something intelligible and memorable. Great design is making something memorable and meaningful.</p>

                        <cite>Dieter Rams</cite> 
                    </blockquote>	          
                  </div>   

                </article>

              <article className="brick entry animate-this">

                  <div className="entry-thumb">
                      <Link href="single-standard.html" className="thumb-link">
                        <Image 
                          src="/static/thumbs/shutterbug.jpg" 
                          width={1200} 
                          height={800} 
                          alt="Shutterbug" 
                          style={{ width: 'auto', height: 'auto' }} 
                        />                      
                      </Link>
                  </div>

                  <div className="entry-text">
                    <div className="entry-header">

                      <div className="entry-meta">
                        <span className="cat-links">
                          <Link href="#">Photography</Link> 
                          <Link href="#">html</Link>                				
                        </span>			
                      </div>

                      <h1 className="entry-title"><Link href="single-standard.html">Photography Skills Can Improve Your Graphic Design.</Link></h1>
                      
                    </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
                  </div>
                  
                </article> 

                <article className="brick entry animate-this" >

                  <div className="entry-thumb">
                      <Link href="single-standard.html" className="thumb-link">
                        <Image 
                          src="/static/thumbs/usaf-rocket.jpg" 
                          width={1200} 
                          height={800} 
                          alt="USAF rocket" 
                          style={{ width: 'auto', height: 'auto' }} 
                        />                      
                      </Link>
                  </div>

                  <div className="entry-text">
                    <div className="entry-header">

                      <div className="entry-meta">
                        <span className="cat-links">
                          <Link href="#">Branding</Link> 
                          <Link href="#">Mockup</Link>               				
                        </span>			
                      </div>

                      <h1 className="entry-title"><Link href="single-standard.html">The 10 Golden Rules of Clean Simple Design.</Link></h1>
                      
                    </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
                  </div>
                  
                </article>     	

                <article className="brick entry format-gallery group animate-this">

                  <div className="entry-thumb">

                      <div className="post-slider flexslider">
                  <ul className="slides">
                    <li>
                      <Image 
                        src="/static/thumbs/gallery/work1.jpg" 
                        width={1200} 
                        height={800} 
                        alt="work1" 
                        style={{ width: 'auto', height: 'auto' }} 
                      /> 
                    </li>
                    <li>
                      <Image 
                          src="/static/thumbs/gallery/work2.jpg" 
                          width={1200} 
                          height={800} 
                          alt="work2" 
                          style={{ width: 'auto', height: 'auto' }} 
                        /> 
                    </li>
                    <li>
                      <Image 
                        src="/static/thumbs/gallery/work3.jpg" 
                        width={1200} 
                        height={800} 
                        alt="work3" 
                        style={{ width: 'auto', height: 'auto' }} 
                      /> 
                    </li>
                  </ul>							
                </div> 

                  </div>

                  <div className="entry-text">
                    <div className="entry-header">

                      <div className="entry-meta">
                        <span className="cat-links">
                          <Link href="#">Branding</Link> 
                          <Link href="#">Wordpress</Link>               				
                        </span>			
                      </div>

                      <h1 className="entry-title"><Link href="single-gallery.html">Workspace Design Trends and Ideas.</Link></h1>
                      
                    </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
                  </div>
                  
                </article>

                <article className="brick entry format-link animate-this">

                  <div className="entry-thumb">
                      <div className="link-wrap">
                        <p>Looking for affordable &amp; reliable web hosting? We recommend Dreamhost.</p>
                        <cite>
                          <Link target="_blank" href="http://www.dreamhost.com/r.cgi?287326">http://www.dreamhost.com</Link>
                        </cite>
                    </div>	
                  </div>               
                  
                </article>


              <article className="brick entry animate-this">

                  <div className="entry-thumb">
                      <Link href="single-standard.html" className="thumb-link">
                        <Image 
                          src="/static/thumbs/diagonal-pattern.jpg" 
                          width={1200} 
                          height={800} 
                          alt="Pattern" 
                          style={{ width: 'auto', height: 'auto' }} 
                        /> 
                      </Link>
                  </div>

                  <div className="entry-text">
                    <div className="entry-header">

                      <div className="entry-meta">
                        <span className="cat-links">
                          <Link href="#">Design</Link> 
                          <Link href="#">UI</Link>                			
                        </span>			
                      </div>

                      <h1 className="entry-title"><Link href="single-standard.html">You Can See Patterns Everywhere.</Link></h1>
                      
                    </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
                  </div>
                  
                </article>

                <article className="brick entry format-video animate-this">

                  <div className="entry-thumb video-image">
                      <Link href="http://player.vimeo.com/video/14592941?title=0&amp;byline=0&amp;portrait=0&amp;color=F64B39" data-lity>
                        <Image 
                          src="/static/thumbs/ottawa-bokeh.jpg" 
                          width={1200} 
                          height={800} 
                          alt="bokeh" 
                          style={{ width: 'auto', height: 'auto' }} 
                        />                   
                      </Link>
                  </div>

                  <div className="entry-text">
                    <div className="entry-header">

                      <div className="entry-meta">
                        <span className="cat-links">
                          <Link href="#">Design</Link> 
                          <Link href="#">Branding</Link>               			
                        </span>			
                      </div>

                      <h1 className="entry-title"><Link href="single-video.html">This Is a Video Post Format.</Link></h1>
                      
                    </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
                  </div>
                  
                </article>

                <article className="brick entry animate-this">

                  <div className="entry-thumb">
                      <Link href="single-standard.html" className="thumb-link">
                        <Image 
                          src="/static/thumbs/lighthouse.jpg" 
                          width={1200} 
                          height={800} 
                          alt="Lighthouse" 
                          style={{ width: 'auto', height: 'auto' }} 
                        />                      
                      </Link>
                  </div>

                  <div className="entry-text">
                    <div className="entry-header">

                      <div className="entry-meta">
                        <span className="cat-links">
                          <Link href="#">Photography</Link> 
                          <Link href="#">Design</Link>
                        </span>			
                      </div>

                      <h1 className="entry-title"><Link href="single-standard.html">Breathtaking Photos of Lighthouses.</Link></h1>
                      
                    </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
                  </div>
                  
                </article>

                <article className="brick entry animate-this">

                  <div className="entry-thumb">
                      <Link href="single-standard.html" className="thumb-link">
                        <Image 
                          src="/static/thumbs/liberty.jpg" 
                          width={1200} 
                          height={800} 
                          alt="Liberty" 
                          style={{ width: 'auto', height: 'auto' }} 
                        />                      
                      </Link>
                  </div>

                  <div className="entry-text">
                    <div className="entry-header">

                      <div className="entry-meta">
                        <span className="cat-links">
                          <Link href="#">Branding</Link> 
                          <Link href="#">html</Link>                	
                        </span>			
                      </div>

                      <h1 className="entry-title"><Link href="single-standard.html">Designing With Black and White.</Link></h1>
                      
                    </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
                  </div>
                </article>
            </div>
        </div>
        
        <div className="row">
          
          <nav className="pagination">
              <span className="page-numbers prev inactive">Prev</span>
            <span className="page-numbers current">1</span>
            <Link href="#" className="page-numbers">2</Link>
              <Link href="#" className="page-numbers">3</Link>
              <Link href="#" className="page-numbers">4</Link>
              <Link href="#" className="page-numbers">5</Link>
              <Link href="#" className="page-numbers">6</Link>
              <Link href="#" className="page-numbers">7</Link>
              <Link href="#" className="page-numbers">8</Link>
              <Link href="#" className="page-numbers">9</Link>
            <Link href="#" className="page-numbers next">Next</Link>
            </nav>

        </div>
      </section>
    </MainLayout>
  );
};

export default Index;