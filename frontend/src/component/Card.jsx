import React from 'react'
import RectangleBar from './rectangleBar'

const Card = ({heading, data}) => {

  return (
    <div className='flex flex-col border border-gray-300 w-full shadow-xl gap-3 py-2 rounded-sm'>
        <div className='py-3 px-3 text-xs md:text-sm border-b border-gray-300 w-full font-bold'>
            Win Rate by {heading}: {data[0].rightPercentage || "no data"}
        </div>
        <div className='flex flex-col w-full gap-1 py-4 px-6'>
            {data.length >0 && data.map((item,index) => {
                return <RectangleBar 
                key={index} 
                label={item.label}
                acv={item.acv}
                count={item.count}
                diffRate={item.diffRate}
                diffacvRate={item.diffacvRate}
                bottomValue={item.bottomValue}
                rightPercentage={item.rightPercentage}
                />
            })}
        </div>
    </div>
  )
};

export default Card