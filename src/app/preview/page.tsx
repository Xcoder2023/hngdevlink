import React from 'react'

const page = () => {
  return (
    <>
      <div>
        <div className='bg-[#633CFF] flex flex-col h-[357px] rounded-b-3xl placeholder:'>
          <div className='bg-[#ffff] flex justify-between items-center p-2 rounded-xl my-10 w-[85%] mx-auto'>
            <button className='border border-[#633CFF] text-[#633CFF] h-[46px] w-[159px] rounded-lg py-[11px] px-[27px]'>Back to Editor</button>
            <button className='text-[#FFFFFF] bg-[#633CFF] py-[11px] px-[27px] h-[46px] w-[133px] rounded-lg'>Share Link</button>
          </div>
        </div>
        <div className='w-[349px] h-[569px] rounded-3xl bg-[#FFFFFF] py-[48px] px-[56px] mx-auto shadow-xl relative bottom-36 flex flex-col items-center gap-10'>
          <div className='flex flex-col items-center gap-5'>
            <div className='w-[104px] h-[104px] rounded-full border-[4px] border-[#633CFF] bg-[#EEEEEE]'></div>
            <h2 className='font-bold text-[32px] text-[#333333]'>Ben Wright</h2>
            <p className='text-[#888888] text-[16px] font-normal'>ben@example.com</p>
          </div>
          <div className='flex flex-col gap-5'>
          <div className='w-[237px] h-[56px] bg-[#1A1A1A] rounded-lg p-[16px]'></div>
          <div className='w-[237px] h-[56px] bg-[#EE3939] rounded-lg p-[16px]'></div>
          <div className='w-[237px] h-[56px] bg-[#2D68FF] rounded-lg p-[16px]'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page