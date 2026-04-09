import React from 'react'

export default function Banner() {
  return (
    <>
        <div className='max-w-screen container mx-auto md:px-40 px-4 flex md:flex-row flex-col gap-5'>
            <div className='md:w-1/2 order-1 md:order-2'>
                <div className='md:mt-30 mt-12 space-y-12'>
                    <h1 className='text-3xl font-bold'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis laborum cum quae magnam assumenda quas!
                        <span className='text-pink-400'>Lorem ipsum dolor sit.</span>
                    </h1>
                    <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor accusamus dolorum similique dolore, ex numquam dolores sunt nobis et, earum illum veritatis doloribus eos iste? Corrupti reprehenderit voluptate itaque maiores.</p>
                    <label className='input input-bordered flex items-center gap-2 w-full h-15 px-3.5 py-2 rounded-md'>
                        <input type="email" name="" id="" placeholder='Email' viewBox="0 0 16 16" className='grow text-2xl'/>
                    </label>
                    <div className="validator-hint hidden">Enter valid email address</div>
                </div>

                <button className='text-3xl font-bold bg-pink-400 rounded-md px-3 py-2'>Submit</button>

            </div>
            <div className='md:w-1/2 md:mt-30 mt-12 max-h-screen md:order-2'>
                <img src="https://i.pinimg.com/1200x/9a/16/f1/9a16f1fec2232f36e6ad372d4ec57a9e.jpg" alt="" srcset="" className='rounded-2xl m-5 h-200' />
            </div>
        </div>
        
    </>
  )
}
