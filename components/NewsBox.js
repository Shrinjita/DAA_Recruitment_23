import React from 'react';

const NewsBox = ({ title, imageSrc, content }) => {
  return (
    <div className="rounded-lg shadow-md p-4">
      <img src={imageSrc} alt={title} className="w-full h-auto rounded-t-lg" />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="mt-2">{content}</p>
    </div>
  );
};

export default NewsBox;
