import React from 'react';
import Box from '../component/Box';

function All({ filter }) {
  const allPosts = [
    { head: "My Crazy Ride in Tech", data: "How my unexpected firing leads to career redemption and valuable life lessons in the unpredictable world of tech.", category: "Life" },
    { head: "How to Add a View Counter in Next.js 14", data: "Learn how to add a view counter to your Next.js 14 app using Partial Pre-Rendering and Upstash Redis.", category: "Passion" },
    { head: "Do quality open-source contribution", data: "Learn how to contribute to open-source and make meaningful contributions.", category: "Passion" },
    { head: "Rejections don't define you", data: "Chase your dreams relentlessly.", category: "Life" },
    { head: "A Rollercoaster Ride with Arc", data: "Ups, downs, and final thoughts.", category: "Thoughts" },
    { head: "How I got into Coding", data: "Explored design, YouTube, studied Computer Applications, found passion in web development.", category: "Life" },
    { head: "How to Approach Front-End?", data: "IIADR for the win.", category: "Passion" }
  ];

  const filteredPosts = filter === 'All' ? allPosts : allPosts.filter(post => post.category === filter);

  return (
    <div>
      {filteredPosts.map((post, index) => (
        <div key={index} className='mt-4'>
          <Box head={post.head} data={post.data} />
        </div>
      ))}
    </div>
  );
}

export default All;
