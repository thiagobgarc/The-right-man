import React from 'react'

export const AboutText = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
        <span className='mt-[2rem] mb-[1rem] md:w-[100%] sm:w-[12rem]'>
            <p className='text-2xl text-gray-700 italic'>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            </p>
        </span>

        <span className='mb-[1rem] md:w-[100%] sm:w-[12rem]'>
            <p className='text-xl text-gray-700 text-semibold text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu mauris sit amet libero lobortis suscipit. Pellentesque scelerisque purus tortor, et lobortis quam aliquet ac. Etiam elementum ac ligula volutpat condimentum. Praesent id lacus ut libero efficitur molestie. Ut volutpat lacus non metus maximus ullamcorper. Aenean diam sapien, cursus ut sapien eu, bibendum rutrum neque. Donec eu velit euismod, sollicitudin magna quis, euismod erat.
            </p>
        </span>

        <span className='mb-[3rem] md:w-[100%] sm:w-[12rem]'>
            <p className='text-xl text-gray-700 text-semibold text-center'>
            Etiam ut gravida massa. Suspendisse potenti. Duis in fermentum nunc, id rhoncus ex. In hac habitasse platea dictumst. Aenean tristique vitae lectus non mattis. Nullam pretium consequat tortor, ac blandit massa sollicitudin eu. Etiam lobortis porta volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Sed in turpis in urna molestie dignissim vel at turpis. Sed at rutrum metus. Donec nec lorem est.
            </p>
        </span>
    </section>
  )
}
