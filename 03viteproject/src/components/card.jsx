import React from 'react'

// export default function Card(props) {
export default function Card({username, btn_txt = "Visit Me"}) {
  // console.log(props);
  // console.log(props.username);
  console.log(username);
  
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent">
        </div>

        <div className="absolute bottom-4 left-4 text-left">
          {/* <h1 className="text-lg font-semibold text-white">{props.username}</h1> */}
          <h1 className="text-lg font-semibold text-white">{username}</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            {/* {props.btn_txt || "Visit Profile"} &rarr; */}
            {btn_txt} &rarr;
          </button>
        </div>
    </div>
  )
}
