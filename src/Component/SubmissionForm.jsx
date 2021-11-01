import React from 'react'

export default function SubmissionForm() {
    return (
        <form className="flex flex-col bg-blue-100 lg:m-20 sm:m-3 p-2 ">
            <label >
                <h1 className="p-2 text-xl"> Name : </h1>
                <input type="text" name="name" placeholder="Your full name"
                    className="w-full h-7 focus:outline-none border-gray-50 border-2 p-2 px-4" />
            </label>
            <label >
                <h1 className="p-2 text-xl"> Email ID :</h1>
                <input type="text" name="name" placeholder="xyz@example.com"
                    className="w-full h-7 focus:outline-none border-gray-50 border-2 p-2 px-4" />
            </label>
            <label >
                <h1 className="p-2 text-xl"> Message </h1>
                <textarea type="text" name="name" placeholder="message ....."
                    className="w-full focus:outline-none border-gray-50 border-2 p-2 px-4 h-24" 
                    row="4" ></textarea>
            </label>

            {/*Submit Button */}
            <div className="flex justify-around p-4">
                <button className=" bg-green-300 px-2 py-1 hover:bg-green-600 rounded-md">Submit</button>
            </div>
        </form>
    )
}
