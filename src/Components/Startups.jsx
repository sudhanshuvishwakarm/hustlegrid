'use client'
import React from 'react'
import Link from 'next/link'
const dummyData = [
  {
    _id: '1',
    title: 'AI-Powered Marketing Tool',
    description: 'An innovative AI-driven platform for marketing automation.',
    category: 'AI',
    image: 'https://img.freepik.com/free-photo/person-using-tablet_53876-13420.jpg?t=st=1744453733~exp=1744457333~hmac=2f3655081d23e95239c0f76c1e9be7b86f33c8c608ba70ffe4629d68524f567f&w=1380',
    views: 128,
    _createdAt: '2025-04-12',
    author: {
      _id: '101',
      name: 'Jane Doe',
    },
  },
  {
    _id: '2',
    title: 'Sustainable Fashion Startup',
    description: 'Eco-friendly clothing made with love and sustainability.',
    category: 'Fashion',
    image: 'https://assets.bosch.com/media/global/stories/technology_report_tech_compass_2024/tech-compass-2024-stage.jpg',
    views: 96,
    _createdAt: '2025-04-11',
    author: {
      _id: '102',
      name: 'John Smith',
    },
  },
  {
    _id: '3',
    title: 'Sustainable Fashion Startup',
    description: 'Eco-friendly clothing made with love and sustainability.',
    category: 'Fashion',
    image: 'https://blog.ipleaders.in/wp-content/uploads/2016/08/2015-11-29-1448821418-4718017-startupglossary.jpg',
    views: 96,
    _createdAt: '2025-04-11',
    author: {
      _id: '102',
      name: 'John Smith',
    },
  },
  {
    _id: '4',
    title: 'AI-Powered Marketing Tool',
    description: 'An innovative AI-driven platform for marketing automation.',
    category: 'AI',
    image: 'https://img.freepik.com/free-photo/innovation-creative-design-development-ideas-concept_53876-15871.jpg?t=st=1744454090~exp=1744457690~hmac=213ae7ee81b3256cf898c165ecca3e153a910d5df38e212aaa8165acce04228a&w=1380',
    views: 128,
    _createdAt: '2025-04-12',
    author: {
      _id: '101',
      name: 'Jane Doe',
    },
  },
  {
    _id: '5',
    title: 'Sustainable Fashion Startup',
    description: 'Eco-friendly clothing made with love and sustainability.',
    category: 'Fashion',
    image: 'https://cdn.techinasia.com/wp-content/uploads/2021/07/1626143867_2f0f43c98db1689a720bbab64152fc03_v1626143866_xlarge.webp',
    views: 96,
    _createdAt: '2025-04-11',
    author: {
      _id: '102',
      name: 'John Smith',
    },
  },
  {
    _id: '6',
    title: 'Sustainable Fashion Startup',
    description: 'Eco-friendly clothing made with love and sustainability.',
    category: 'Fashion',
    image: 'https://img.freepik.com/free-photo/real-estate-mortgage-loan-concept_53876-134027.jpg?t=st=1744453944~exp=1744457544~hmac=00302abe4d41421bdc4850b7578c566f570bf40a8b0fbf8bcb007913f038404a&w=826',
    views: 96,
    _createdAt: '2025-04-11',
    author: {
      _id: '102',
      name: 'John Smith',
    },
  },
]

const Startups = () => {
  return (
    <ul className="mt-7 card_grid">
      {dummyData.map((post) => (
        <li key={post._id} className="startup-card group">
          <div className="flex flex-between">
            <div className="flex-between">
              <p className="startup-card_date">{post._createdAt}</p>
            </div>
            <div className="flex justify-center items-center gap-1.5">
              <i className="fa-solid fa-eye text-primary"></i>
              <span className="text-20-medium">{post.views}</span>
            </div>
          </div>

          <div className="flex-between mt-5 gap-5">
            <div className="flex-1">
              <div className="flex-between">
                <div>
                  <Link href={`/user/${post.author._id}`}>
                    <p className="text-16-medium text-start line-clamp-1">{post.author.name}</p>
                  </Link>
                  <Link href={`/startup/${post._id}`}>
                    <h3 className="text-start text-26-semibold line-clamp-1">{post.title}</h3>
                  </Link>
                </div>

                <Link href={`/user/${post.author._id}`}>
                  <img
                    src={post.image}
                    alt="placeholder"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </Link>
              </div>

              <Link href={`/startup/${post._id}`}>
                <p className="text-start startup-card_desc">{post.description}</p>
                <img src={post.image} alt="startup" className="startup-card_img" />
              </Link>

              <div className="flex-between gap-3 mt-5">
                <Link href={`/?query=${post.category.toLowerCase()}`}>
                  <p className="text-16-medium">{post.category}</p>
                </Link>

                <Link href={`/startup/${post._id}`}>
                  <button className="startup-card_btn">Details</button>
                </Link>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Startups
