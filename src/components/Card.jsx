import React from 'react';

const Card = (props) => {
  const imageUrl = props.imageUrl;
  const title = props.title;
  const value = props.value;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* image for graph */}
      <img className="w-full" src={imageUrl} alt="Card" />
      {/* title of data */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 justify-center">{title}</div>
      </div>
      <div className='w-24 h-8 font-semibold justify-center flex border-2 border-red-500 ml-4'> 
        {value}
        {/* values display */}
      </div>
    </div>
  );
};

export default Card;
