// import React from 'react';

// const Landing = ()=>{
//     return(
//         <div style = {{textAlign: 'center'}}>
//             <h1>
//                 Lappital productivity app!
//             </h1>
//             Manage your projects with a pomodoro time tracker.

//         </div>
//     )
// }

// export default Landing;

import React from 'react'

const Landing = () => {
  return (
    <div className='pushable'>
        <div className='pusher'>
            <div className='ui inverted vertical masthead center aligned segment'>
                <div className='ui text container'>
                    <h1 className='ui inverted header' style={{marginTop: '3em', marginBottom:'0em', fontSize:'4em', fontWeight:'normal'}}>Lappital productivity manager</h1>
                    <h2>Track your time and manage your projects</h2>
                    <div className='ui huge primary button' style={{backgroundColor:'#0fd27a', color:'black'}}>
                        Get Started
                        <i className='right arrow icon'>
                            {/* ::before */}
                        </i>
                    </div>
                </div>
            </div>

            <div className='ui vertical stripe segment' style={{padding:'8em 0em'}}>
                <div className='ui middle aligned stackable grid container'>
                    <div className='row'>
                        <div className='eight wide column'>
                            <h3 className='ui header' style={{fontSize:'2em'}}>We help companies and companions</h3>
                            <p style={{fontSize:'1.33em'}}>We can give your company super powers to do things that they never thought possible. Let us delight your customers and empower your needs... through pure data analytics
                            </p>
                            <h3 className='ui header' style={{fontSize:'2em'}}>We make bananas that can dance</h3>
                            <p style={{fontSize:'1.33em'}}>Yes that's right, you thought it was the stuff of dreams, but even bannaas can be bioengineered</p>
                        </div>
                        <div className='six wide right floated column'>
                            <img className='ui large bordered rounded image'/>
                        </div>
                        
                    </div>
                    <div className='row'>
                        <div className='center aligned column'>
                            <a className='ui huge button' >Check Them Out</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='ui vertical stripe quote segment'>
                <div className='ui equal width stackable internally celled grid'>
                    <div className='center aligned row'>
                        <div className='column' style={{padding:'5em'}}>
                            <h3 style={{fontSize:'2em'}}>"What a company"</h3>
                            <p style={{fontSize:'1.33em'}}>That is what they all say about us</p>
                        </div>
                        <div className='column' style={{padding:'5em'}}>
                            <h3 style={{fontSize:'2em'}}>"I shouldn't have gone with their competitor"</h3>
                            <p style={{fontSize:'1.33em'}}>
                                <img className='ui avatar image'/>
                                <b>Nan</b>
                                Chief Fun Officer Acme Toys
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='ui vertical stripe segment' style={{padding:'8em 0em'}}>
                <div className='ui text container'>
                    <h3 className='ui header' style={{fontSize:'2em'}}>
                        Breaking the grid, grabs your attention
                    </h3>
                    <p style={{fontSize:'1.33em'}}>
                        Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.
                    </p>
                    <a className='ui large button'>Read More</a>

                    <h4 className='ui horizontal header divider'>
                        <a href="#">CASE STUDIES</a>
                    </h4>

                    <h3 className='ui header' style={{fontSize:'2em'}}>
                        Did we tell you about our bananas?
                    </h3>
                    <p style={{fontSize:'1.33em'}}>
                        Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but its really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.

                    </p>
                    <a className='ui large button'>I'm Still Quite Interested</a>
                </div>
            </div>

            <div className='ui inverted vertical footer segment' style={{padding:'4em 0em'}}>
                <div className='ui stackable inverted divided equal height stackable grid'>
                    <div className='three wide column'>
                        <h4 className='ui inverted header'>About</h4>
                        <div className='ui inverted link list'>
                            <a className='item' href="#">
                                Sitemap
                            </a>
                            <a className='item' href="#">
                                Contact us
                            </a>
                            <a className='item' href="#">
                                Our mission
                            </a>
                        </div>
                    </div>
                    <div className='three wide column'>
                        <h4 className='ui inverted header'>Services</h4>
                        <div className='ui inverted link list'>
                            <a className='item' href="#">
                                Pre order
                            </a>
                            <a className='item' href="#">
                                FAQ
                            </a>
                            <a className='item' href="#">
                                How To Access
                            </a>
                        </div>
                    </div>
                    <div className='seven wide column'>
                        <h4 className='ui inverted header'>Footer Header</h4>
                        <p>
                            Extra space for a call to action inside the footer that could help re-engage users.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Landing