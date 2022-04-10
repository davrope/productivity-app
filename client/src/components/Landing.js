import productivityimg from '../imgs/unsplashprod.avif';
import {BsGithub, BsTwitter} from 'react-icons/bs';

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
            <div className='ui inverted vertical masthead center aligned segment' style={{height:'80vh'}}>
                <div className='ui text container' style={{marginBottom:'5em'}}>
                    <h1 className='ui inverted header' style={{marginTop: '3em', marginBottom:'0em', fontSize:'4em', fontWeight:'normal'}}>Projectsdav: a productivity app</h1>
                    <h2>Track your time and manage your projects</h2>
                    <a className='ui huge primary button' style={{backgroundColor:'#0fd27a', color:'black'}} href='/auth/google'>
                        Get Started
                        <i className='right arrow icon'>

                        </i>
                    </a>
                </div>
            </div>

            <div className='ui vertical stripe segment' style={{padding:'8em 0em'}}>
                <div className='ui middle aligned stackable grid container'>
                    <div className='row'>
                        <div className='eight wide column'>
                            <h3 className='ui header' style={{fontSize:'2em'}}>More than a to-do list</h3>
                            <p style={{fontSize:'1.33em'}}>Get your things done by making a project and creating a to-do list for each one. User the done and not done filter
                            </p>
                            <h3 className='ui header' style={{fontSize:'2em'}}>It's all about time</h3>
                            <p style={{fontSize:'1.33em'}}>Data is the new gold: Track the time you spend on each project with a timer. </p>
                        </div>
                        <div className='six wide right floated column'>
                            <img className='ui large bordered rounded image' src={productivityimg} alt='A women with a laptop' />
                            <p>Photo by <a href="https://unsplash.com/@surface?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Surface</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                            </p>
                        </div>
                        
                    </div>
                    <div className='row'>
                        <div className='center aligned column'>
                            <a className='ui huge button' href='/auth/google'>Check it out</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='ui vertical stripe quote segment'>
                <div className='ui equal width stackable internally celled grid'>
                    <div className='center aligned row'>
                        <div className='column' style={{padding:'5em'}}>
                            <h3 style={{fontSize:'2em'}}>“Ordinary people think merely of spending time, great people think of using it.”</h3>
                            <p style={{fontSize:'1.33em'}}>- Arthur Schopenhauer, German philosopher</p>
                        </div>
                        <div className='column' style={{padding:'5em'}}>
                            <h3 style={{fontSize:'2em'}}>"Sometimes a simple app with few but key features can make the difference"</h3>
                            <p style={{fontSize:'1.33em'}}>
                                {/* <img className='ui avatar image'/> */}
                                <b>David Rodríguez </b>
                                Projectsdav Developer
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='ui vertical stripe segment' style={{padding:'8em 0em'}}>
                <div className='ui text container'>
                    <h3 className='ui header' style={{fontSize:'2em'}}>
                        About productivity
                    </h3>
                    <p style={{fontSize:'1.33em'}}>
                        Sometimes your projects will be large, and you'll have to work as a team and that's when you use complex project managers apps. But there are cases where you just want to work on a personal project and don't need a lot to get the things done. That's where you want to use Projectsdav.
                    </p>
                    {/* <a className='ui large button'>Read More</a> */}

                    <h4 className='ui horizontal header divider'>
                        {/* <a href="#">CASE STUDIES</a> */}
                        EXTERNAL REFERENCES FOR PRODUCTIVITY
                    </h4>

                    <h3 className='ui header' style={{fontSize:'2em'}}>
                        Need some inspiration?
                    </h3>
                    <p style={{fontSize:'1.33em'}}>
                        Finding motivation to get the things done can be difficult. We share with you a list of some articles we believe can help you learn more about productivity, including different strategies and approaches.
                        <br></br>
                        <ul>
                            <li><a href='https://www.wsj.com/articles/how-to-be-more-productive-at-work-and-manage-your-time-effectively-11610743524'target="_blank" >How to be more productive at work and manage your time effectively</a> By Allison Pohle.</li>
                            <li><a href='https://www.inc.com/john-rampton/15-ways-to-increase-productivity-at-work.html'target="_blank">15 Ways to Increase Productivity at Work</a> by John Rampton. </li>
                            <li><a href='https://www.lifehack.org/articles/featured/50-ways-to-increase-your-productivity.html' target="_blank">50 Ways to Increase Productivity and Achieve More in Less Time</a> by Leon Ho.</li> 
                        </ul>

                    </p>
                    {/* <a className='ui large button' >Read More</a> */}
                </div>
            </div>

            <div className='ui inverted vertical footer segment' style={{padding:'4em 0em'}}>
                <div className='ui stackable inverted divided equal height stackable grid'>
                    <div className='three wide column'>
                        <h4 className='ui inverted header'>Coded by:</h4>
                        <div className='ui inverted link list'>
                            <p className='item' href="#">
                                David Rodríguez Pérez, 2022
                            </p>
                            {/* <a className='item' href="#">
                                Contact us
                            </a>
                            <a className='item' href="#">
                                Our mission
                            </a> */}
                        </div>
                    </div>
                    <div className='three wide column'>
                        <h4 className='ui inverted header'>Contact</h4>
                        <div className='ui inverted link list'>
                            
                            <a className='item' href="https://github.com/davrope">
                            <BsGithub/> Github
                            </a>
                            
                            <a className='item' href="https://twitter.com/davroper">
                            <BsTwitter/>  Twitter
                            </a>
                        </div>
                    </div>
                    {/* <div className='seven wide column'>
                        <h4 className='ui inverted header'>Footer Header</h4>
                        <p>
                            Extra space for a call to action inside the footer that could help re-engage users.
                        </p>
                    </div> */}
                </div>
            </div>

        </div>
    </div>
  )
}

export default Landing