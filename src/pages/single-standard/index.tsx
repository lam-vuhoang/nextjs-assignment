import MainLayout from "@/components/Layout/MainLayout";
import Image from 'next/image';
import Link from "next/link";

const Index: React.FC = () => {
  return (
    <MainLayout>
      <section id="content-wrap" className="blog-single">
   	    <div className="row">
   		    <div className="col-twelve">
   			    <article className="format-standard">  

              <div className="content-media">
                <div className="post-thumb">
                  <Image 
                    src="/static/thumbs/single/single-01.jpg" 
                    alt="single-blog" 
                    width={1200} 
                    height={800} 
                    style={{ width: '100%', height: 'auto' }} 
                  /> 
                </div>  
              </div>
              <div className="primary-content">

                <h1 className="page-title">Hey, This Is A Standard Format Post.</h1>	

                <ul className="entry-meta">
                  <li className="date">September 06, 2016</li>						
                  <li className="cat"><a href="">Wordpress</a><a href="">Design</a></li>				
                </ul>						

                <p className="lead">Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint.</p> 

                <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
                </p>

                <p>
                  <Image 
                    src="/static/shutterbug.jpg" 
                    alt="shutterbug" 
                    width={1200} 
                    style={{ width: '100%', height: 'auto' }} 
                    height={800} 
                  />
                </p>

                <h2>Large Heading</h2>

                <p>Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus <a href="http://#">omnis voluptas assumenda est</a> id quod maxime placeat facere possimus, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et.</p>

                <blockquote><p>This is a simple example of a styled blockquote. A blockquote tag typically specifies a section that is quoted from another source of some sort, or highlighting text in your post.</p></blockquote>

                <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed..</p>

                <h3>Smaller Heading</h3>

                <p>Quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>

                <p>Quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>

                <pre><code>
                  {`code {
                    font-size: 1.4rem;
                    margin: 0 .2rem;
                    padding: .2rem .6rem;
                    white-space: nowrap;
                    background: #F1F1F1;
                    border: 1px solid #E1E1E1;	
                    border-radius: 3px;
                  }`}
                </code></pre>

                <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.</p>

                <ul>
                  <li>Donec nulla non metus auctor fringilla.
                    <ul>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                  </li>
                  <li>Donec nulla non metus auctor fringilla.</li>
                  <li>Donec nulla non metus auctor fringilla.</li>
                </ul>

                <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed..</p>

                <p className="tags">
                  <span>Tagged in :</span>
                  <a href="#">orci</a><a href="#">lectus</a><a href="#">varius</a><a href="#">turpis</a>
                </p>

                <div className="author-profile">
                  <Image 
                    src="/static/avatars/user-05.jpg" 
                    alt="" 
                    height={800} 
                    width={1200} 
                    style={{ width: '100%', height: 'auto' }} 
                  />

                  <div className="about">
                    <h4><a href="#">Jonathan Smith</a></h4>
                  
                    <p>Alias aperiam at debitis deserunt dignissimos dolorem doloribus, fuga fugiat impedit laudantium magni maxime nihil nisi quidem quisquam sed ullam voluptas voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>

                    <ul className="author-social">
                      <li><a href="#">Facebook</a></li>
                      <li><a href="#">Twitter</a></li>
                      <li><a href="#">GooglePlus</a></li>
                      <li><a href="#">Instagram</a></li>
                    </ul>
                  </div>
                </div>   
              </div>
              <div className="pagenav group">
                <div className="prev-nav">
                  <a href="#" rel="prev">
                    <span>Previous</span>
                    Tips on Minimalist Design 
                  </a>
                </div>
              </div>
              <div className="next-nav">
                  <a href="#" rel="next">
                    <span>Next</span>
                    Less Is More 
                  </a>
              </div>
				    </article>
          </div>
			  </div>

        <div className="comments-wrap">
          <div id="comments" className="row">
            <div className="col-full">

              <h3>5 Comments</h3>

                <ol className="commentlist">

                    <li className="depth-1">

                      <div className="avatar">
                          <Image 
                            width={50} 
                            height={50} 
                            className="avatar" 
                            src="/static/avatars/user-01.jpg" 
                            alt="" 
                            style={{ width: '100%', height: 'auto' }} 
                          />
                      </div>

                      <div className="comment-content">

                        <div className="comment-info">
                            <cite>Itachi Uchiha</cite>

                            <div className="comment-meta">
                              <time className="comment-time" dateTime="2014-07-12T23:05">Jul 12, 2014 @ 23:05</time>
                              <span className="sep">/</span><a className="reply" href="#">Reply</a>
                            </div>
                        </div>

                        <div className="comment-text">
                            <p>Adhuc quaerendum est ne, vis ut harum tantas noluisse, id suas iisque mei. Nec te inani ponderum vulputate,
                            facilisi expetenda has et. Iudico dictas scriptorem an vim, ei alia mentitum est, ne has voluptua praesent.</p>
                        </div>

                      </div>

                    </li>

                    <li className="thread-alt depth-1">

                      <div className="avatar">
                        <Image 
                          width={50} 
                          height={50} 
                          className="avatar" 
                          src="/static/avatars/user-04.jpg" 
                          alt="" 
                          style={{ width: '100%', height: 'auto' }} 
                        />
                      </div>

                      <div className="comment-content">

                        <div className="comment-info">
                            <cite>John Doe</cite>

                            <div className="comment-meta">
                              <time className="comment-time" dateTime="2014-07-12T24:05">Jul 12, 2014 @ 24:05</time>
                              <span className="sep">/</span><a className="reply" href="#">Reply</a>
                            </div>
                        </div>

                        <div className="comment-text">
                            <p>Sumo euismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei. Esse euismod
                            urbanitas ut sed, et duo scaevola pericula splendide. Primis veritus contentiones nec ad, nec et
                            tantas semper delicatissimi.</p>                        
                        </div>

                      </div>

                      <ul className="children">

                          <li className="depth-2">

                            <div className="avatar">
                                <Image 
                                  width={50} 
                                  height={50} 
                                  className="avatar" 
                                  src="/static/avatars/user-03.jpg" 
                                  alt="" 
                                  style={{ width: '100%', height: 'auto' }} 
                                />
                            </div>

                            <div className="comment-content">

                              <div className="comment-info">
                                  <cite>Kakashi Hatake</cite>

                                  <div className="comment-meta">
                                    <time className="comment-time" dateTime="2014-07-12T25:05">Jul 12, 2014 @ 25:05</time>
                                    <span className="sep">/</span><a className="reply" href="#">Reply</a>
                                  </div>
                              </div>

                              <div className="comment-text">
                                  <p>Duis sed odio sit amet nibh vulputate
                                  cursus a sit amet mauris. Morbi accumsan ipsum velit. Duis sed odio sit amet nibh vulputate
                                  cursus a sit amet mauris</p>
                              </div>

                            </div>

                            <ul className="children">

                                <li className="depth-3">

                                  <div className="avatar">
                                      <Image 
                                        width={50} 
                                        height={50} 
                                        className="avatar" 
                                        src="/static/avatars/user-04.jpg" 
                                        alt="" 
                                        style={{ width: '100%', height: 'auto' }} 
                                      />
                                  </div>

                                  <div className="comment-content">

                                    <div className="comment-info">
                                        <cite>John Doe</cite>

                                        <div className="comment-meta">
                                          <time className="comment-time" dateTime="2014-07-12T25:15">July 12, 2014 @ 25:15</time>
                                          <span className="sep">/</span><a className="reply" href="#">Reply</a>
                                        </div>
                                    </div>

                                    <div className="comment-text">
                                        <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est
                                        etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                                    </div>

                                  </div>

                                </li>

                            </ul>

                          </li>

                      </ul>

                    </li>

                    <li className="depth-1">

                      <div className="avatar">
                          <Image 
                            width="50" 
                            height="50" 
                            className="avatar" 
                            src="/static/avatars/user-02.jpg" 
                            alt="" 
                            style={{ width: '100%', height: 'auto' }} 
                          />
                      </div>

                      <div className="comment-content">

                        <div className="comment-info">
                            <cite>Shikamaru Nara</cite>

                            <div className="comment-meta">
                              <time className="comment-time" dateTime="2014-07-12T25:15">July 12, 2014 @ 25:15</time>
                              <span className="sep">/</span><a className="reply" href="#">Reply</a>
                            </div>
                        </div>

                        <div className="comment-text">
                            <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                        </div>

                      </div>

                    </li>

                </ol>

                <div className="respond">

                  <h3>Leave a Comment</h3>

                  <form name="contactForm" id="contactForm" method="post" action="">
                    <fieldset>
                      <div className="form-field">
                      <input name="cName" type="text" id="cName" className="full-width" placeholder="Your Name" value="" />
                      </div>

                      <div className="form-field">
                      <input name="cEmail" type="text" id="cEmail" className="full-width" placeholder="Your Email" value="" />
                      </div>

                      <div className="form-field">
                      <input name="cWebsite" type="text" id="cWebsite" className="full-width" placeholder="Website"  value="" />
                      </div>

                      <div className="message form-field">
                          <textarea name="cMessage" id="cMessage" className="full-width" placeholder="Your Message" ></textarea>
                      </div>

                      <button type="submit" className="submit button-primary">Submit</button>

                    </fieldset>
                </form>
                </div>
            </div>
          </div>
        </div>

      </section> 
    </MainLayout>
  );
};

export default Index;