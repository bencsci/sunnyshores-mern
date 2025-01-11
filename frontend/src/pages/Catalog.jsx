import React, { useContext, useState } from "react";
import { ShopContext } from "../context/shopContext";
import ProductCatalog from "../components/ProductCatalog";

const Catalog = () => {
  const { products } = useContext(ShopContext);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOption, setSortOption] = useState("relevant");
  const [searchTerm, setSearchTerm] = useState("");

  // Categories for filtering
  const categories = ["Shirts", "Surf", "Accessories", "Footwear", "Swimwear"];

  // Updates the selectedCategories based on check box changes
  const handleCheckboxChange = (category) => {
    if (selectedCategories.includes(category)) {
      // Removes the category when unchecked
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      // Add the category when checked
      setSelectedCategories([...selectedCategories, category]); // Merge the array
    }
  };

  // Clear all filters
  const handleClearAll = () => {
    setSelectedCategories([]);
  };

  // Filter products based on selected categories
  const filteredProducts =
    selectedCategories.length === 0
      ? products
      : products.filter((product) =>
          // get the products that have the same category tag
          selectedCategories.includes(product.category)
        );

  // Search for products by name
  const searchedProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Apply sorting to the searched products
  const sortedProducts = searchedProducts.sort((a, b) => {
    if (sortOption === "priceLowHigh") {
      return a.price - b.price;
    } else if (sortOption === "priceHighLow") {
      return b.price - a.price;
    }
    return 0; // Relevant (default order)
  });

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Catalogue</h1>

      {/* Search Section */}
      <div className="mb-8">
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold mb-4">Search Products</h2>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

      {/* Filter & Sort Section */}
      <div className="bg-white shadow rounded p-4 mb-8">
        <div className="flex flex-col md:flex-row md:justify-between items-start gap-4">
          {/* Filter by Category */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Filter by Category</h2>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <label
                  key={category}
                  className="flex items-center space-x-2 cursor-pointer text-sm bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded shadow transition"
                >
                  <input
                    type="checkbox"
                    value={category}
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCheckboxChange(category)}
                    className="form-checkbox h-5 w-5 text-teal-600 cursor-pointer"
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
            <button
              className="mt-4 text-teal-600 hover:underline text-sm"
              onClick={handleClearAll}
            >
              Clear All
            </button>
          </div>

          {/* Sort Dropdown */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Sort By</h2>
            <select
              value={sortOption}
              onChange={(sortOption) => setSortOption(sortOption.target.value)}
              className="border border-gray-300 rounded px-4 py-2 text-sm bg-gray-50 hover:bg-gray-100 transition"
            >
              <option value="relevant">Relevant</option>
              <option value="priceLowHigh">Price - Low to High</option>
              <option value="priceHighLow">Price - High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sortedProducts.map((product) => (
          <ProductCatalog
            key={product._id}
            id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
