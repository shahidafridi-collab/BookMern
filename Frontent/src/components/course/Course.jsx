import React, { useEffect, useState } from 'react';
import { Link } from 'react-router'; // Ensure this matches your router version

// Move sub-components outside the main component
const BookCard = ({ book }) => {
    return (
        <div className="flex-none md:w-80 w-full mx-5 my-5 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group bg-white dark:bg-slate-900">
            <div className="relative">
                <img
                    src={book.image || 'https://cms.buybooksindia.com/uploads/books/9789348457226-1772257007.png'}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={book.title}
                />
                {book.isBestseller && (
                    <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                        ⭐ Bestseller
                    </div>
                )}
            </div>
            <div className="p-4">
                <h3 className="font-bold text-lg mb-1 line-clamp-1">{book.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{book.author}</p>
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

export default function Course() {
    const [booksData, setBook] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getBook = async () => {
            try {

                const res = await fetch('https://bookwala.onrender.com/book');
                
                if (!res.ok) {
                    throw new Error('Failed to Fetch');
                }
                const data = await res.json();
                setBook(data);
            } catch (error) {
                console.error("Fetch error:", error);
            } finally {
                setLoading(false);
            }
        };
        getBook();
    }, []);
    console.log(booksData);

    return (
        <div className='min-h-screen md:px-40 px-4'>
            <div className='items-center justify-center flex flex-col'>
                <h1 className='text-4xl font-bold mt-15 text-center'>
                    We're delighted to have you <span className='text-pink-500'>here!</span>
                </h1>
                <p className='text-xl mt-10 text-center'>
                    Explore our extensive collection of books across various categories.
                </p>
                <Link to='/'>
                    <button className='text-xl font-bold mt-10 bg-pink-600 text-white rounded-xl px-4 py-1.5 hover:bg-pink-700 transition-colors'>
                        Back
                    </button>
                </Link>
            </div>

            <div className='flex md:flex-row mt-12 flex-col md:overflow-x-auto whitespace-nowrap scrollbar-hide pb-10'>
                {loading ? (
                    <p className="text-center w-full">Loading books...</p>
                ) : (
                    booksData.map((item) => (
                        <div key={item._id || item.id} className="inline-block shrink-0">
                            <BookCard book={item} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}