import React from 'react'
import Navbar from '../components/Navbar'
const Courses = () => {
  const posts = [
    {
        title: "Cloud computing",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJzWzTUm8enYQrVhmHkmSyVtM7izAAWE_-TQ&s",
        questions:"5 questions (s)",


    },
    {
      title: "Data Base",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwxSD9Qg7IPwqCVFepnvfA-v0ydWTluEEwqg&s",
      questions:"7 questions (s)"

  },
    {
      title: "Frontend",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Qkc-dcq-cxiNh9h8kpP_D8t9erwmZ56ZJg&s",
      questions:"5 questions (s)"

  },
  {
    title: "Cryptography",
    questions:"5 questions (s)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-lYSXPGYtAwGr9mFlxuRkiwsUvkzd9SrzFA&s",

  },
]
  return (
    
      <div className='className=" mx-auto text-[#c40094] flex flex-col gap-6 bg-black px-8 pt-2 pb-8'>
        <Navbar/>
        <section >
            <div className="text-center  pt-3">
                <h1 className="text-3xl font-semibold">
                   My <span className='text-white'>Quizizz</span> 
                </h1>
                <p className="mt-3 text-gray-500  text-3xl text-bold ">
                    "Quiz It, Prove It!"
                </p>
            </div>
            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {
                    posts.map((items, key) => (
                        <article className=" w-10/12 mx-auto mt-4 shadow-lg border border-[#c40094] text-white rounded-md duration-300 hover:shadow-sm" key={key}>
                            <a href={items.href} >
                              <div className='p-4'>
                              <img src={items.img} loading="lazy" alt={items.title}  className="w-full h-48 rounded-t-md" />
                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                    <div className="ml-3">
                                        <span className="block ">{}</span>
                                        <span className="block text-sm">{items.date}</span>
                                    </div>
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl ">
                                        {items.title}
                                    </h3>
                                    <p className=" text-sm mt-1">{items.questions}</p>
                                </div>
                              </div>
                                
                            </a>
                        </article>
                    ))
                }
            </div>
        </section>

    
      </div>
    
  )
}

export default Courses
