import React from 'react'
import RectangleBar from './RectangleBar'

const Card = ({heading, data}) => {

  return (
    <div className='flex flex-col border border-gray-300 w-full shadow-xl gap-3 py-2 rounded-sm'>

      {/* top bar where the heading is */}
        <div className='py-3 px-3 text-xs md:text-sm border-b border-gray-300 w-full font-bold'>
            Win Rate by {heading}: {data[0].rightPercentage+"%"}
        </div>
        
        {/* mapping the data for rectangular bars */}
        <div className='flex flex-col items-center gap-1 py-4 px-2'>
            {data.map((item,i) => {
              return (
                <RectangleBar
                  key={i}
                  sideLabel={item.label}
                  middleValue={item.middleValue}
                  bottomValue={item.bottomValue}
                  rightPercentage={item.rightPercentage}
                  percentage = {item.percentage}
                />
              );
            })}
        </div>

    </div>
  )
};

export default Card;