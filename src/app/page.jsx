'use client'
import SearchStartup from '../Components/SearchStartup';
import Startups from '../Components/Startups';
import React, { useState } from 'react'

const Page = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', query);
    // You can add your actual search logic here
  };

  const handleReset = () => {
    setQuery('');
  };

  return (
    <div className='text-red-900 text-3xl pt-20 font-bold text-center'>
      <section className='pink_container'>
        <h1 className='heading'>
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className='sub-heading'>
          Submit Ideas, Vote on Pitches, and get Noticed in Virtual Competitions
        </p>
        <SearchStartup handleReset={handleReset} handleSubmit={handleSubmit} query={query} setQuery={setQuery} />
      </section>

      <section className='section_container'>
        <p className='text-30-semibold'>
          All Startups
        </p>
        <Startups />
      </section>
    </div>
  )
}

export default Page;
