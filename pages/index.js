import React from 'react';
import Header from '../components/Header';
import NewsBox from '../components/NewsBox';

const newsData = [
  {
    title: 'Bitcoin Hits New Record',
    imageSrc: 'https://example.com/bitcoin.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  // Add more news items...
];

const HomePage = () => {
  return (
    <div className="container mx-auto py-8">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {newsData.map((newsItem, index) => (
          <NewsBox
            key={index}
            title={newsItem.title}
            imageSrc={newsItem.imageSrc}
            content={newsItem.content}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
