import React from 'react'

export default function MyProjects() {
    return (
        <>
            <div className="text-4xl text-center pt-10">My projects</div>
            <div className="text-xl lg:text-3xl p-1 text-center ">I am currently Learning <br></br>
                <span className="font-bold underline ">Full Stack Web development.</span>
                <br></br> I started learning MERN 3 months ago
                and these are my some of the projects.
            </div>
            <a href="https://college-data.vercel.app/" target="_blank"  >
            <div className="shadow-2xl p-2 w-11/12 m-auto
              hover:bg-verdant-green hover:text-mellow-yellow ">
                <h1 className="text-center  p-4 text-3xl font-bold">Teachers Data</h1>
                <div className="flex sm:flex-col ">
                    <div className="sm:w-60 sm:h-auto m-auto h-80 w-96">
                        <iframe src="https://college-data.vercel.app/" frameborder="0" 
                        className="h-full w-full"></iframe>
                    </div>
                    <div className='w-11/12 pb-3 m-auto' >
                        <h1 className="text-center text-xl lg:text-3xl md:pb-3">
                            This Web page gets the data of each Teacher one by one from GOOGLE Scholar 
                            Web page and displays collectively

                        </h1>
                        <ul className='w-11/12 pt-3 m-auto text-center text-xl lg:text-3xl font-bold'>
                            <li> React</li>
                            <li>Application Programming Interface (API)</li>
                        </ul>
                    </div>
                </div>
            </div>
            </a>
            <a href="https://book-myshow-shape-ai.vercel.app/" target="_blank" >
            <div className="shadow-2xl p-2 w-11/12 m-auto hover:bg-verdant-green hover:text-mellow-yellow">
                <h1 className="text-center  p-4 text-3xl font-bold">Book My Show Clone</h1>
                <div className="flex sm:flex-col ">
                    <div className="sm:w-60 sm:h-auto m-auto h-80 w-96">
                        <img src="https://download.pingcap.com/images/blog/bookmyshow-homepage.png"
                            alt="Punjabi University Patiala" className=" h-full w-full" />
                    </div>
                    <div className='w-11/12 pb-3 m-auto' >
                        <h1 className="text-center text-xl lg:text-3xl md:pb-3">
                            The objective of creating this WebPage was to learn about
                        </h1>
                        <ul className='w-11/12 pt-3 m-auto text-center text-xl lg:text-3xl font-bold'>
                            <li>React</li>
                            <li>Application Programming Interface (API)</li>
                            <li>Payment Gateway</li>
                        </ul>
                    </div>
                </div>
            </div>
            </a>

            <a href="https://tasky-shape-ai.vercel.app/" target="_blank"  >
            <div className="shadow-2xl p-2 w-11/12 m-auto  hover:bg-verdant-green hover:text-mellow-yellow">
                <h1 className="text-center  p-4 text-3xl font-bold">Task Management App</h1>
                <div className="flex sm:flex-col ">
                    <div className="sm:w-60 sm:h-auto m-auto h-80 w-96">
                        <iframe src="https://tasky-shape-ai.vercel.app/" frameborder="0" 
                        className="h-full w-full"></iframe>
                    </div>
                    <div className='w-11/12 pb-3 m-auto' >
                        <h1 className="text-center text-xl lg:text-3xl md:pb-3">
                            The objective of creating this WebPage was to learn about
                        </h1>
                        <ul className='w-11/12 pt-3 m-auto text-center text-xl lg:text-3xl font-bold'>
                            <li>DOM Manupulation</li>
                            <li>Bootstrap</li>
                            <li>Local Storage</li>
                        </ul>
                    </div>
                </div>
            </div>
            </a>
            <a href="https://zomato-webpage-iota.vercel.app/" target="_blank"  >
            <div className="shadow-2xl p-2 w-11/12 m-auto  hover:bg-verdant-green hover:text-mellow-yellow">
                <h1 className="text-center  p-4 text-3xl font-bold">Zomato Front End Clone</h1>
                <div className="flex sm:flex-col ">
                    <div className="sm:w-60 sm:h-auto m-auto h-80 w-96">
                        <iframe src="https://zomato-webpage-iota.vercel.app/" frameborder="0" 
                        className="h-full w-full"></iframe>
                    </div>
                    <div className='w-11/12 pb-3 m-auto' >
                        <h1 className="text-center text-xl lg:text-3xl md:pb-3">
                            The objective of creating this WebPage was to learn about
                            basics of
                        </h1>
                        <ul className='w-11/12 pt-3 m-auto text-center text-xl lg:text-3xl font-bold'>
                            <li> HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                </div>
            </div>
            </a>
        </>
    )
}
