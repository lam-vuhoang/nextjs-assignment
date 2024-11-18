import MainLayout from "@/components/Layout/MainLayout";
import Image from 'next/image';
import Link from "next/link";

const Index: React.FC = () => {
  return (
    <MainLayout>
      <section id="page-header">
        <div className="row current-cat">
          <div className="col-full">
            <h1>Category: Photography</h1>
          </div>   		
        </div>
      </section>

      <section id="bricks" className="with-top-sep">
        <div className="row masonry">
            <div className="bricks-wrapper">

              <div className="grid-sizer"></div>

              <article className="brick entry format-standard animate-this">

                  <div className="entry-thumb">
                      <Link href="single-standard.html" className="thumb-link">
                        <Image 
                          src="/static/thumbs/diagonal-building.jpg" 
                          width={1200} 
                          height={800} 
                          alt="building" 
                          style={{ width: '100%', height: 'auto' }} 
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
                          style={{ width: '100%', height: 'auto' }} 
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
                          style={{ width: '100%', height: 'auto' }} 
                        />                      
                      </Link>

                      <div className="audio-wrap">
                        <audio id="player2" src="/media/AirReview-Landmarks-02-ChasingCorporate.mp3" controls={true}></audio>                  	
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

              <article className="brick entry format-quote animate-this">

                  <div className="entry-thumb">                  
                    <blockquote>
                        <p>Good design is making something intelligible and memorable. Great design is making something memorable and meaningful.</p>

                        <cite>Dieter Rams</cite> 
                    </blockquote>	          
                  </div>   

                </article>

              <article className="brick entry format-standard animate-this">

                  <div className="entry-thumb">
                      <Link href="single-standard.html" className="thumb-link">
                        <Image 
                          src="/static/thumbs/shutterbug.jpg" 
                          width={1200} 
                          height={800} 
                          alt="Shutterbug" 
                          style={{ width: '100%', height: 'auto' }} 
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

                <article className="brick entry format-standard animate-this">

                  <div className="entry-thumb">
                      <Link href="single-standard.html" className="thumb-link">
                        <Image 
                          src="/static/thumbs/usaf-rocket.jpg" 
                          width={1200} 
                          height={800} 
                          alt="USAF rocket" 
                          style={{ width: '100%', height: 'auto' }} 
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
                            alt="work1" 
                            width={1200} 
                            height={800} 
                            style={{ width: '100%', height: 'auto' }} 
                          /> 
                        </li>
                        <li>
                          <Image 
                            src="/static/thumbs/gallery/work2.jpg" 
                            alt="work2" 
                            width={1200} 
                            height={800} 
                            style={{ width: '100%', height: 'auto' }} 
                          /> 
                        </li>
                        <li>
                          <Image 
                            src="/static/thumbs/gallery/work3.jpg" 
                            alt="work3" 
                            width={1200} 
                            height={800} 
                            style={{ width: '100%', height: 'auto' }} 
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
                          alt="Pattern" 
                          width={1200} 
                          height={800} 
                          style={{ width: '100%', height: 'auto' }} 
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
                          alt="bokeh" 
                          width={1200} 
                          height={800} 
                          style={{ width: '100%', height: 'auto' }} 
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

                <article className="brick entry format-standard animate-this">

                  <div className="entry-thumb">
                      <Link href="single-standard.html" className="thumb-link">
                        <Image 
                          src="/static/thumbs/lighthouse.jpg" 
                          alt="Lighthouse" 
                          width={1200} 
                          height={800} 
                          style={{ width: '100%', height: 'auto' }} 
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

                <article className="brick entry format-standard animate-this">

                  <div className="entry-thumb">
                      <Link href="single-standard.html" className="thumb-link">
                        <Image 
                          src="/static/thumbs/liberty.jpg" 
                          alt="Liberty" 
                          width={1200} 
                          height={800} 
                          style={{ width: '100%', height: 'auto' }} 
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