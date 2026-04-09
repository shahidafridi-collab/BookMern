const booksData = [
  {
    "id": 1,
    "title": "The Psychology of Money",
    "description": "Timeless lessons on wealth, greed, and happiness exploring how people think about money and make financial decisions.",
    "category": "Finance",
    "price": 24.99,
    "rating": 4.8,
    "reviews": 15234,
    "isBestseller": true,
    "coverColor": "from-purple-500 to-pink-500"
  },
  {
    "id": 2,
    "title": "Atomic Habits",
    "description": "Transform your life with tiny changes and remarkable results. Learn how to build good habits and break bad ones.",
    "category": "Self Help",
    "price": 19.99,
    "rating": 4.9,
    "reviews": 98700,
    "isBestseller": true,
    "coverColor": "from-blue-500 to-cyan-500"
  },
  {
    "id": 3,
    "title": "The Silent Patient",
    "description": "A gripping psychological thriller about a woman's act of violence against her husband and the therapist obsessed with uncovering her motive.",
    "category": "Thriller",
    "price": 15.99,
    "rating": 4.6,
    "reviews": 45200,
    "isBestseller": false,
    "coverColor": "from-red-500 to-orange-500"
  },
  {
    "id": 4,
    "title": "Python Programming Guide",
    "description": "Complete guide to mastering Python from basics to advanced concepts with practical projects and exercises.",
    "category": "Technology",
    "price": 39.99,
    "rating": 4.7,
    "reviews": 8321,
    "isBestseller": false,
    "coverColor": "from-green-500 to-teal-500"
  },
  {
    "id": 5,
    "title": "Music Theory for Beginners",
    "description": "Learn the fundamentals of music, reading notes, chords, rhythm, and composition in this easy-to-follow guide.",
    "category": "Free",
    "price": 0,
    "rating": 4.5,
    "reviews": 12500,
    "isBestseller": false,
    "coverColor": "from-yellow-500 to-orange-500"
  },
  {
    "id": 6,
    "title": "JavaScript: The Good Parts",
    "description": "Discover the elegant parts of JavaScript and avoid the bad ones. Essential reading for serious developers.",
    "category": "Technology",
    "price": 29.99,
    "rating": 4.8,
    "reviews": 21500,
    "isBestseller": true,
    "coverColor": "from-yellow-600 to-amber-600"
  },
  {
    "id": 7,
    "title": "The Art of Happiness",
    "description": "Dalai Lama's timeless wisdom on finding true happiness and meaning in life through compassion and mindfulness.",
    "category": "Self Help",
    "price": 18.99,
    "rating": 4.9,
    "reviews": 34200,
    "isBestseller": true,
    "coverColor": "from-indigo-500 to-purple-500"
  },
  {
    "id": 8,
    "title": "Financial Freedom",
    "description": "Proven path to financial independence and early retirement through smart investing and passive income strategies.",
    "category": "Finance",
    "price": 27.99,
    "rating": 4.7,
    "reviews": 18900,
    "isBestseller": false,
    "coverColor": "from-emerald-500 to-green-600"
  },
  {
    "id": 9,
    "title": "Guitar Mastery",
    "description": "Complete guide to mastering guitar chords, scales, and techniques for beginners to advanced players.",
    "category": "Free",
    "price": 0,
    "rating": 4.6,
    "reviews": 8900,
    "isBestseller": false,
    "coverColor": "from-rose-500 to-red-500"
  },
  {
    "id": 10,
    "title": "Deep Work",
    "description": "Rules for focused success in a distracted world. Learn to concentrate deeply and produce valuable work.",
    "category": "Self Help",
    "price": 22.99,
    "rating": 4.8,
    "reviews": 27800,
    "isBestseller": false,
    "coverColor": "from-slate-600 to-gray-700"
  },
  {
    "id": 11,
    "title": "Rich Dad Poor Dad",
    "description": "What the rich teach their kids about money that the poor and middle class do not. Financial literacy classic.",
    "category": "Finance",
    "price": 16.99,
    "rating": 4.8,
    "reviews": 124500,
    "isBestseller": true,
    "coverColor": "from-amber-500 to-yellow-600"
  },
  {
    "id": 12,
    "title": "React - The Complete Guide",
    "description": "Master React.js including hooks, context API, redux, and server-side rendering with real-world projects.",
    "category": "Technology",
    "price": 44.99,
    "rating": 4.9,
    "reviews": 15600,
    "isBestseller": true,
    "coverColor": "from-cyan-500 to-blue-500"
  },
  {
    "id": 13,
    "title": "Vocal Training 101",
    "description": "Professional techniques to improve your singing voice, breathing control, and vocal range exercises.",
    "category": "Free",
    "price": 0,
    "rating": 4.5,
    "reviews": 6700,
    "isBestseller": false,
    "coverColor": "from-pink-500 to-rose-500"
  },
  {
    "id": 14,
    "title": "The 7 Habits of Highly Effective People",
    "description": "Powerful lessons in personal change and effectiveness that have transformed millions of lives worldwide.",
    "category": "Self Help",
    "price": 25.99,
    "rating": 4.9,
    "reviews": 87600,
    "isBestseller": true,
    "coverColor": "from-blue-600 to-indigo-600"
  },
  {
    "id": 15,
    "title": "Cryptocurrency Investing",
    "description": "Complete beginner's guide to Bitcoin, Ethereum, DeFi, and NFT investing strategies for 2024.",
    "category": "Finance",
    "price": 31.99,
    "rating": 4.6,
    "reviews": 12400,
    "isBestseller": false,
    "coverColor": "from-orange-500 to-red-500"
  },
  {
    "id": 16,
    "title": "Piano for Beginners",
    "description": "Step-by-step method to learn piano, read sheet music, and play your favorite songs quickly.",
    "category": "Free",
    "price": 0,
    "rating": 4.7,
    "reviews": 15300,
    "isBestseller": false,
    "coverColor": "from-violet-500 to-purple-500"
  },
  {
    "id": 17,
    "title": "Clean Code",
    "description": "Handbook of agile software craftsmanship. Writing clean, maintainable, and efficient code that works.",
    "category": "Technology",
    "price": 42.99,
    "rating": 4.9,
    "reviews": 34500,
    "isBestseller": true,
    "coverColor": "from-gray-700 to-slate-800"
  },
  {
    "id": 18,
    "title": "Think and Grow Rich",
    "description": "Classic guide to financial success using the power of thought, desire, and practical goal-setting.",
    "category": "Finance",
    "price": 14.99,
    "rating": 4.7,
    "reviews": 67800,
    "isBestseller": true,
    "coverColor": "from-gold-500 to-yellow-600"
  },
  {
    "id": 19,
    "title": "DJ Mixing Masterclass",
    "description": "Learn to mix like a pro, beatmatching, transitions, and using DJ software for amazing performances.",
    "category": "Free",
    "price": 0,
    "rating": 4.4,
    "reviews": 5200,
    "isBestseller": false,
    "coverColor": "from-fuchsia-500 to-pink-500"
  },
  {
    "id": 20,
    "title": "The Pragmatic Programmer",
    "description": "Journey to mastery. Tips, techniques, and practices for writing better software and advancing your career.",
    "category": "Technology",
    "price": 38.99,
    "rating": 4.9,
    "reviews": 28700,
    "isBestseller": false,
    "coverColor": "from-teal-500 to-emerald-500"
  }
]

export default booksData;