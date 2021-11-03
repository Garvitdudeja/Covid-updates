import React from 'react'
import { ProgressBar, Card } from 'react-bootstrap'

export default function AboutMe() {
    return (
        <>
        <div className="w-10/12 m-auto">
            <div className="flex flex-col md:flex-row mt-5 gap-3 justify-center">
                <div className="w-3/4 m-auto px-4">
                    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--_HBZhuhF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/nweeqf97l2md3tlqkjyt.jpg"
                        alt="" className="w-80" />
                </div>
                <div className="text-center">
                    <h1 className="text-3xl font-bold">
                        My Name Is Garvit Dudeja & I Am A Full-Stack Web Developer
                    </h1>
                    <h1 className="text-2xl "> The alternative to good design is always bad design. There is no such thing as no design.</h1>
                </div>
            </div>
            <div className="flex flex-col md:flex-row m-auto">
                <div className="w-4/5 m-auto">
                    <h1 className="text-6xl p-2 hover:underline ">
                        <span className="text-yellow-300">My</span> Skills
                    </h1>
                    <div className="flex flex-col gap-2 ml-2 pt-5">
                        <div className="flex flex-row justify-between">
                            <h1 className="text-xl">HTML</h1>
                            <h1 className="text-xl">85%</h1>
                        </div>
                        <ProgressBar variant="warning" now={85} className=" h-5" />
                        <div className="flex flex-row justify-between">
                            <h1 className="text-xl">CSS</h1>
                            <h1 className="text-xl">95%</h1>
                        </div>
                        <ProgressBar variant="warning" now={95} className=" h-5" />
                        <div className="flex flex-row justify-between">
                            <h1 className="text-xl">JavaScript</h1>
                            <h1 className="text-xl">90%</h1>
                        </div>
                        <ProgressBar variant="warning" now={90} className=" h-5" />
                        <div className="flex flex-row justify-between">
                            <h1 className="text-xl">REACT</h1>
                            <h1 className="text-xl">80%</h1>
                        </div>
                        <ProgressBar variant="warning" now={80} className=" h-5" />
                        <div className="flex flex-row justify-between">
                            <h1 className="text-xl">Mongo DB</h1>
                            <h1 className="text-xl">75%</h1>
                        </div>
                        <ProgressBar variant="warning" now={75} className=" h-5" />
                    </div>
                </div>
                <div className="sm:mt-7 flex flex-row flex-wrap gap-4 mt-5 justify-evenly">

                    <div className="border-2 border-yellow-300 ">
                        <div className="">
                            <img src="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png" alt="" className="p-4 h-48 m-auto" />
                            <h1 className="text-center text-2xl">REACT</h1>
                        </div>
                    </div>
                    <div className="border-2 border-yellow-300 ">
                        <div className="">
                            <img src="https://www.w3.org/html/logo/downloads/HTML5_1Color_Black.png" alt="" className="p-4 h-48 m-auto" />
                            <h1 className="text-center text-2xl">HTML and CSS</h1>
                        </div>
                    </div>
                    <div className="border-2 border-yellow-300 ">
                        <div className="">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Javascript-shield.png" alt="" className="p-4 h-48 m-auto" />
                            <h1 className="text-center text-2xl">Java Script</h1>
                        </div>
                    </div>                    <div className="border-2 border-yellow-300 ">
                        <div className="">
                            <img src="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png" alt="" className="p-4 w-48 h-48 m-auto" />
                            <h1 className="text-center text-2xl">Mongo DB</h1>
                        </div>
                    </div>

                </div>
            </div>
            </div>

        </>
    )
}
