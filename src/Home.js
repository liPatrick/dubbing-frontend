import React, { useState, useEffect } from 'react'
import axios from "axios";

function Home() {

    const [data, setData] = useState(null)
    const [input, setInput] = useState("")

    const divStyle = {
        width: '100%',
        height: '100%',
        //backgroundColor: '#E5FCFF',
        //backgroundImage: `url(${imgMyimageexample})`,
        backgroundSize: 'cover'
    }

    const getAPI = () => {
        axios.post('https://90c9-2601-645-8001-c130-5900-6a3c-a1f6-be8.ngrok-free.app/b/get/api', {
            "input": input
        })
            .then((response) => {
                const res = response.data
                setData(res)
            })
    }

    return (
        <div className="flex min-h-screen items-center justify-start bg-white" style={divStyle}>
            <div className="mx-auto w-full max-w-lg">
                <h1 className="text-center text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-customPurp to-customGreen">Quick Dubber </h1>
                <p className="mt-3"></p>
                <form className="mt-14">
                    <div className="grid gap-6 sm:grid-cols-2">
                        {/*<div className="relative z-0">*/}
                        {/*    <input type="text" name="name"*/}
                        {/*           className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"*/}
                        {/*           placeholder=" "/>*/}
                        {/*    <label*/}
                        {/*        className="absolute top-3 -z-10 origin-[0] -translate-y-6 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Name</label>*/}
                        {/*</div>*/}
                        {/*<div className="relative z-0">*/}
                        {/*    <input type="text" name="email"*/}
                        {/*           className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"*/}
                        {/*           placeholder=" "/>*/}
                        {/*    <label*/}
                        {/*        className="absolute top-3 -z-10 origin-[0] -translate-y-6 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Email</label>*/}
                        {/*</div>*/}
                        <div className="relative z-0 col-span-2">
                            <input value={input} onInput={e => setInput(e.target.value)} name="message" rows="5"
                                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                placeholder=" "></input>
                            <label
                                className="absolute top-3 -z-10 origin-[0] -translate-y-6 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                                Enter a youtube link to get dubbed!
                            </label>
                        </div>
                    </div>
                    <div className="flex content-center">
                        <button onClick={() => getAPI()} type="button"
                            className="bg-customPurp flex-auto mt-5 rounded-md bg-black px-10 py-2 text-white">
                            Get Dubbed Video
                        </button>
                    </div>
                    <div className="flex content-center">
                        {data != null && <div><p>{data.api}</p><p>{data.description}</p></div>}
                        {/*{data != null && <Tags props={data}/>}*/}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Home;