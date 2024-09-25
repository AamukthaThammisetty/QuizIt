import React from 'react'
import { useState } from 'react'
const Navbar = () => {
  const [state, setState] = useState(false)
  const navigation = [
    { title: "Home", path: "javascript:void(0)" },
    { title: "About", path: "javascript:void(0)" },
    { title: "Servcices", path: "javascript:void(0)" },
    { title: "Contact", path: "javascript:void(0)" }
]
  return (
    <div>
      <header>
              <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
                  <div className="flex text-2xl font-bold justify-between">
                      <a href="javascript:void(0)">
                          <h1>QuizIt.</h1>
                      </a>

                  </div>
                  <ul className={`flex-1 justify-between mt-12 md:flex md:mt-0 ${state ? '' : 'hidden'}`}>
                      <div className="order-1 flex-1 justify-end items-center space-y-5 md:flex md:space-x-6 md:space-y-0">
                          {
                              navigation.map((item, idx) => (
                                  <li className="" key={idx}>
                                      <a href={item.path}>{item.title}</a>
                                  </li>
                              ))
                          }
                      </div>
                  </ul>
              </nav>
          </header>
    </div>
  )
}

export default Navbar
