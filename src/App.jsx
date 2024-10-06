// import { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
// import SearchBar from './components/SearchBar';
// import Categories from './components/Categories';
// import ListingCard from './components/ListingCard';
// import Footer from './components/Footer';
// import './App.css';

// function App() {
//   // State to store listings
//   const [listings, setListings] = useState([]);

//   // State to store form input for new listing
//   const [newListing, setNewListing] = useState({
//     image: '',
//     title: '',
//     type: '',
//     guests: '',
//     bedrooms: '',
//     bathrooms: '',
//     price: '',
//     rating: ''
//   });

//   // State to track the selected category (can be used to filter listings)
//   const [selectedCategory, setSelectedCategory] = useState('');

//   // State for fetching status (to simulate loading)
//   const [isFetching, setIsFetching] = useState(true);

//   // Simulating fetching initial listings with useEffect
//   useEffect(() => {
//     // Simulate an API call to fetch initial listings
//     const initialListings = [
//       {
//         image: 'house1.jpg',
//         title: 'Beautiful Beachfront House',
//         type: 'Entire home',
//         guests: 6,
//         bedrooms: 3,
//         bathrooms: 2,
//         price: 250,
//         rating: 4.8
//       },
//       {
//         image: 'cabin1.jpg',
//         title: 'Cozy Cabin in the Woods',
//         type: 'Cabin',
//         guests: 4,
//         bedrooms: 2,
//         bathrooms: 1,
//         price: 150,
//         rating: 4.6
//       }
//     ];
    
//     setTimeout(() => {
//       // Simulate a delay and then update the state
//       setListings(initialListings);
//       setIsFetching(false); // Set fetching status to false after loading data
//     }, 2000); // Simulate a 2-second fetch delay
//   }, []); // Empty dependency array ensures this runs only once when the component mounts

//   // Handle form input change for new listing
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewListing({
//       ...newListing,
//       [name]: value
//     });
//   };

//   // Handle form submission to add a new listing
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setListings([...listings, newListing]); // Add the new listing to the existing listings
//     setNewListing({
//       image: '',
//       title: '',
//       type: '',
//       guests: '',
//       bedrooms: '',
//       bathrooms: '',
//       price: '',
//       rating: ''
//     }); // Reset the form after submission
//   };

//   // Handle category change (to filter listings)
//   useEffect(() => {
//     if (selectedCategory) {
//       // Simulate fetching data based on selected category
//       const filteredListings = listings.filter(
//         (listing) => listing.type.toLowerCase() === selectedCategory.toLowerCase()
//       );
//       setListings(filteredListings);
//     }
//   }, [selectedCategory, listings]); // This effect runs when `selectedCategory` changes or listings change

//   return (
//     <div className="App">
//       <Navbar />
//       <SearchBar />
      
//       {/* Category selection */}
//       <Categories setSelectedCategory={setSelectedCategory} />

//       {/* Listing Form */}
//       <div className="new-listing-form">
//         <h2>Add New Listing</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="image"
//             value={newListing.image}
//             onChange={handleInputChange}
//             placeholder="Image URL"
//             required
//           />
//           <input
//             type="text"
//             name="title"
//             value={newListing.title}
//             onChange={handleInputChange}
//             placeholder="Title"
//             required
//           />
//           <input
//             type="text"
//             name="type"
//             value={newListing.type}
//             onChange={handleInputChange}
//             placeholder="Type (e.g., Entire home, Private room)"
//             required
//           />
//           <input
//             type="number"
//             name="guests"
//             value={newListing.guests}
//             onChange={handleInputChange}
//             placeholder="Number of guests"
//             required
//           />
//           <input
//             type="number"
//             name="bedrooms"
//             value={newListing.bedrooms}
//             onChange={handleInputChange}
//             placeholder="Number of bedrooms"
//             required
//           />
//           <input
//             type="number"
//             name="bathrooms"
//             value={newListing.bathrooms}
//             onChange={handleInputChange}
//             placeholder="Number of bathrooms"
//             required
//           />
//           <input
//             type="number"
//             name="price"
//             value={newListing.price}
//             onChange={handleInputChange}
//             placeholder="Price per night"
//             required
//           />
//           <input
//             type="number"
//             name="rating"
//             value={newListing.rating}
//             onChange={handleInputChange}
//             placeholder="Rating"
//             required
//           />
//           <button type="submit">Add Listing</button>
//         </form>
//       </div>

//       {/* Render Listings */}
//       <div className="listings-container">
//         {isFetching ? (
//           <p>Loading listings...</p>
//         ) : listings.length > 0 ? (
//           listings.map((listing, index) => (
//             <ListingCard key={index} {...listing} />
//           ))
//         ) : (
//           <p>No listings available for this category.</p>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default App;
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import ListingCard from './components/ListingCard';
import Footer from './components/Footer';
import './App.css';

function App() {
  // State to store listings
  const [listings, setListings] = useState([]);

  // State to store form input for new listing
  const [newListing, setNewListing] = useState({
    image: '',
    title: '',
    type: '',
    guests: '',
    bedrooms: '',
    bathrooms: '',
    price: '',
    rating: ''
  });

  // State to track the selected category (can be used to filter listings)
  const [selectedCategory, setSelectedCategory] = useState('');

  // State for fetching status (to simulate loading)
  const [isFetching, setIsFetching] = useState(true);

  // Simulating fetching initial listings with useEffect
  useEffect(() => {
    const initialListings = [
      {
        image: 'https://th.bing.com/th/id/OIP.V1x9sLVmQa4Xm162keZ1eQHaEW?rs=1&pid=ImgDetMain',
        title: 'Beautiful Beachfront House',
        type: 'Entire home',
        guests: 6,
        bedrooms: 3,
        bathrooms: 2,
        price: 250,
        rating: 4.8
      },
      {
        image: 'https://i.pinimg.com/736x/70/dc/0a/70dc0abfecfaad59cebdc4b771c3353a.jpg',
        title: 'Cozy Cabin in the Woods',
        type: 'Cabin',
        guests: 4,
        bedrooms: 2,
        bathrooms: 1,
        price: 150,
        rating: 4.6
      }
    ];

    setTimeout(() => {
      setListings(initialListings);
      setIsFetching(false); // Set fetching status to false after loading data
    }, 2000); // Simulate a 2-second fetch delay
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Handle form input change for new listing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewListing({
      ...newListing,
      [name]: value
    });
  };

  // Handle form submission to add a new listing
  const handleSubmit = (e) => {
    e.preventDefault();
    setListings([...listings, newListing]); // Add the new listing to the existing listings
    setNewListing({
      image: '',
      title: '',
      type: '',
      guests: '',
      bedrooms: '',
      bathrooms: '',
      price: '',
      rating: ''
    }); // Reset the form after submission
  };

  // Handle category change (to filter listings)
  useEffect(() => {
    if (selectedCategory) {
      const filteredListings = listings.filter(
        (listing) => listing.type.toLowerCase() === selectedCategory.toLowerCase()
      );
      setListings(filteredListings);
    }
  }, [selectedCategory, listings]); // This effect runs when `selectedCategory` changes or listings change

  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      
      {/* Category selection */}
      <Categories setSelectedCategory={setSelectedCategory} />

      {/* Listing Form */}
      <div className="new-listing-form">
        <h2>Add New Listing</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <input
              type="text"
              name="image"
              value={newListing.image}
              onChange={handleInputChange}
              placeholder="Image URL"
              required
            />
            <input
              type="text"
              name="title"
              value={newListing.title}
              onChange={handleInputChange}
              placeholder="Title"
              required
            />
          </div>
          <div className="input-row">
            <input
              type="text"
              name="type"
              value={newListing.type}
              onChange={handleInputChange}
              placeholder="Type (e.g., Entire home, Private room)"
              required
            />
            <input
              type="number"
              name="guests"
              value={newListing.guests}
              onChange={handleInputChange}
              placeholder="Number of guests"
              required
            />
          </div>
          <div className="input-row">
            <input
              type="number"
              name="bedrooms"
              value={newListing.bedrooms}
              onChange={handleInputChange}
              placeholder="Number of bedrooms"
              required
            />
            <input
              type="number"
              name="bathrooms"
              value={newListing.bathrooms}
              onChange={handleInputChange}
              placeholder="Number of bathrooms"
              required
            />
          </div>
          <div className="input-row">
            <input
              type="number"
              name="price"
              value={newListing.price}
              onChange={handleInputChange}
              placeholder="Price per night"
              required
            />
            <input
              type="number"
              name="rating"
              value={newListing.rating}
              onChange={handleInputChange}
              placeholder="Rating"
              required
            />
          </div>
          <button type="submit">Add Listing</button>
        </form>
      </div>

      {/* Render Listings */}
      <div className="listings-container">
        {isFetching ? (
          <p>Loading listings...</p>
        ) : listings.length > 0 ? (
          listings.map((listing, index) => (
            <ListingCard key={index} {...listing} />
          ))
        ) : (
          <p>No listings available for this category.</p>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
