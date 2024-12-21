import { useState, useEffect } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';

const Sidebar = () => {
    const [brands, setBrands] = useState([]);
    const [types, setTypes] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState('All');
    const [selectedType, setSelectedType] = useState('All');
    const [sortOrder, setSortOrder] = useState('Ascending');
    const [searchQuery, setSearchQuery] = useState('');
  
    // Fetch brands and types from the database
    useEffect(() => {
      const fetchData = async () => {
        try {
          const brandsResponse = await axios.get('http://localhost:8081/api/products/brands'); // Replace with your API endpoint
          setBrands(['All', ...brandsResponse.data.map(brand => brand.name)]);
          const typesResponse = await axios.get('http://localhost:8081/api/products/types'); // Replace with your API endpoint
          setTypes(['All', ...typesResponse.data.map(type => type.name)]);
        } catch (error) {
          console.error('Error fetching data', error);
        }
      };
      fetchData();
    }, []);
  
    // Handle filter and sort
    const handleFilterAndSort = () => {
      // Fetch filtered and sorted data from the backend (or apply logic to existing data)
      console.log({
        searchQuery,
        sortOrder,
        selectedBrand,
        selectedType,
      });
    };

    return (


<div className="offcanvas offcanvas-start show text-bg-tertiary mt" tabIndex="-1" id="offcanvasDark" aria-labelledby="offcanvasDarkLabel">

  <div className="offcanvas-body">
    
    


  <div className="p-3 bg-light">
      <Form>
        {/* Search */}
        <Form.Group controlId="searchProducts">
          <Form.Control
            type="text"
            placeholder="Search products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Form.Group>

        {/* Sort By Name */}
        <Form.Group className=''>
          <Form.Label className="mt-3 fw-semibold ">Sort by Name</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Ascending"
              name="sortOrder"
              value="Ascending"
              checked={sortOrder === 'Ascending'}
              onChange={(e) => setSortOrder(e.target.value)}
            />
            <Form.Check
              type="radio"
              label="Descending"
              name="sortOrder"
              value="Descending"
              checked={sortOrder === 'Descending'}
              onChange={(e) => setSortOrder(e.target.value)}
            />
          </Col>
        </Form.Group>

        {/* Brands */}
        <Form.Group>
          <Form.Label className="mt-3 fw-semibold">Brands</Form.Label>
          {brands.map((brand, index) => (
            <Form.Check
              key={index}
              type="radio"
              label={brand}
              name="brands"
              value={brand}
              checked={selectedBrand === brand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            />
          ))}
        </Form.Group>

        {/* Types */}
        <Form.Group>
          <Form.Label className="mt-3 fw-semibold" >Types</Form.Label>
          {types.map((type, index) => (
            <Form.Check
              key={index}
              type="radio"
              label={type}
              name="types"
              value={type}
              checked={selectedType === type}
              onChange={(e) => setSelectedType(e.target.value)}
            />
          ))}
        </Form.Group>

        {/* Apply Filter Button */}
        <Button
          className="mt-3"
          variant="primary"
          onClick={handleFilterAndSort}
        >
          Apply Filters
        </Button>
      </Form>
    </div>












  </div>
</div>


);
};

export default Sidebar;












 
    