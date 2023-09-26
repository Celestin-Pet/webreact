import React from 'react';
import image1 from '../components/image1.jpeg';
import image2 from '../components/image2.jpeg';
import image3 from '../components/image4.jpeg';

const blogData = [
  {
    title: 'Experience Excellence with Our Tour Company',
    content:
      'Looking for the best tour company with exceptional services? Your search ends here. We craft personalized itineraries, provide expert guides, and ensure seamless logistics. Join us for the journey of a lifetime.',
    imageUrl: image1,
  },
  {
    title: 'Elevating Your Travel Experience',
    content:
      'Welcome to a tour company that takes serving tourists to a whole new level. We enhance your travel experience by providing top-notch services. Join us and discover a new standard in tourism service.',
    imageUrl: image2,
  },
  {
    title: 'Discover the Top Tour Company',
    content:
      'Our tour guides are knowledgeable and passionate about creating remarkable experiences for you. They bring history, culture, and local insights to life, ensuring a deeper understanding of the places you visit.',
    imageUrl: image3,
  },
];

const Blog = () => {
  return (
    <div className="mt-8 bg-gray-100">
      <section data-aos="fade-up">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-gray-600 uppercase font-bold">Latest Blog Posts</h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-gray-600"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-gray-600">Read Our Latest Articles</h2>
        </div>

        <div className="p-16" data-aos="fade-in" data-aos-delay="600">
          <div className="flex space-x-4 overflow-x-auto">
            {blogData.map((blog, index) => (
              <div
                key={index}
                className="p-4 bg-green-50 rounded-lg w-80 transition-all ease-in-out hover:scale-105 hover:shadow-lg"
              >
                <img src={blog.imageUrl} alt={blog.title} className="mb-4 mx-auto rounded-md max-h-32" />
                <h3 className="text-lg font-semibold text-indigo-400 text-sm">{blog.title}</h3>
                <p className="mt-2 text-gray-700 text-sm">{blog.content.substr(0, 100)}...</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
