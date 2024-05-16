'use client';

import React, { useEffect, useState } from 'react';
import './profile-nav.scss';

export const ProfileNav = () => {
  const [posts, setPosts] = useState();

  const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const movies = await response.json();
    return movies;
  };

  useEffect(() => {
    fetchPosts().then((incomingPosts) => {
      setPosts(incomingPosts);
    });
  }, []);

  console.log(posts);

  return <aside>Customer Center</aside>;
};
