import React from 'react';

// --- 1. INTERNAL STYLES (CSS-in-JS) ---
// We define styles here to avoid needing a separate .css file
const styles = {
  appContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    padding: '40px',
    backgroundColor: '#f0f2f5',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif'
  },
  card: {
    width: '280px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  imageContainer: {
    width: '100%',
    height: '180px',
    backgroundColor: '#ddd',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  badge: (inStock) => ({
    position: 'absolute',
    top: '10px',
    right: '10px',
    padding: '5px 10px',
    borderRadius: '15px',
    color: '#fff',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    backgroundColor: inStock ? '#2ecc71' : '#e74c3c', // Green if stock, Red if not
    zIndex: 10,
  }),
  content: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1, // Ensures footer pushes to bottom
  },
  title: {
    fontSize: '1.2rem',
    margin: '0 0 10px 0',
    color: '#333',
  },
  desc: {
    fontSize: '0.9rem',
    color: '#666',
    lineHeight: '1.4',
    marginBottom: '20px',
  },
  footer: {
    marginTop: 'auto', // Pushes footer to bottom of card
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #eee',
    paddingTop: '15px',
  },
  price: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  button: (inStock) => ({
    padding: '8px 16px',
    borderRadius: '6px',
    border: 'none',
    color: '#fff',
    fontWeight: '600',
    cursor: inStock ? 'pointer' : 'not-allowed',
    backgroundColor: inStock ? '#3498db' : '#bdc3c7', // Blue if stock, Grey if not
  })
};

// --- 2. THE CHILD COMPONENT (ProductCard) ---
const ProductCard = ({ image, name, price, description, inStock }) => {
  return (
    <div style={styles.card}>
      {/* Conditional Badge */}
      <div style={styles.badge(inStock)}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </div>

      <div style={styles.imageContainer}>
        <img src={image} alt={name} style={styles.image} />
      </div>

      <div style={styles.content}>
        <h2 style={styles.title}>{name}</h2>
        <p style={styles.desc}>{description}</p>
        
        <div style={styles.footer}>
          {/* Using toFixed(2) as required */}
          <span style={styles.price}>${price.toFixed(2)}</span>
          
          <button 
            disabled={!inStock} 
            style={styles.button(inStock)}
            onClick={() => alert(`Added ${name} to cart!`)}
          >
            {inStock ? 'Add to Cart' : 'Sold Out'}
          </button>
        </div>
      </div>
    </div>
  );
};

// --- 3. THE PARENT COMPONENT (App) ---
const App = () => {
  // Data for the assignment
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 199.5,
      description: "Premium noise-cancelling headphones with 20h battery life.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      inStock: true
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 299.00,
      description: "Track your fitness and stay connected on the go.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      inStock: false // This will show 'Out of Stock' style
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 89.99,
      description: "Lightweight mesh shoes perfect for long distance running.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      inStock: true
    }
  ];

  return (
    <div style={styles.appContainer}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          image={product.image}
          inStock={product.inStock}
        />
      ))}
    </div>
  );
};

export default App;
