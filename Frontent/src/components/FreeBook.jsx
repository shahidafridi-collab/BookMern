import React, { useRef, useState } from 'react';
import { useEffect } from 'react';


// Horizontal Scrollable Book Card Component
const BookCard = ({ book }) => {
  return (
    <div className="flex-none w-64 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="relative">
        <img 
          src='https://cms.buybooksindia.com/uploads/books/9789348457226-1772257007.png' 
          alt={book.title}
          className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {book.isBestseller && (
          <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
            ⭐ Bestseller
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0  p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold  text-lg mb-1 line-clamp-1">{book.title}</h3>
        <p className="text-white-600 text-sm mb-2">{book.author}</p>
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            ))}
          </div>
          <span className=" text-sm ml-1">{book.rating}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-orange-500">${book.price}</span>
          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
            {book.category}
          </span>
        </div>
      </div>
    </div>
  );
};

// Horizontal Scroll Component 1: Simple Scroll
const HorizontalScrollSimple = ({ title, books }) => {
  const scrollContainerRef = useRef(null);

  

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={() => scroll('left')}
            className="bg-white-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};


// Main Component with all variations
const HorizontalScrollBooks = () => {
  // Split books into different categories

  const [book, setbook] = useState([]);

  useEffect(() => {
    const getbook = async ()=> {
      try{
        const res = await fetch('https://bookwala.onrender.com/book');
        if(!res.ok){
         throw new Error('Failed to Fetch');
        }
        const data = await res.json();
        const freeBook = data.filter(b => b.category === 'Free');
        setbook(freeBook);
      }catch(error){
        console.error(error, "Fetch error");
      }

    }
    getbook();
  },[]);
  // console.log(book);
  // const sciFiBooks = booksData.filter(b => b.category === 'free');

  return (
    <div className="min-h-scree py-8">
      <div className="max-w-7xl mx-auto px-4">
       
        
        <div className="mb-16">
          <HorizontalScrollSimple title="✨ Bestsellers (Button Navigation)" books={book} />
        </div>
      
      </div>
    </div>
  );
};

// CSS to hide scrollbar (add to your global CSS or Tailwind config)
const scrollbarHideStyles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`;

export default HorizontalScrollBooks;