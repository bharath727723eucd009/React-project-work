import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Grid, Card, CardContent, CardMedia, Button, Container, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Snackbar, Box, Rating, TextField, InputAdornment } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import MuiAlert from '@mui/material/Alert';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function App() {
  const [cart, setCart] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const products = [
    { id: 1, name: 'Mens Graphic Tees', price: '₹999', image: 'https://img.freepik.com/free-photo/t-shirt-painting-indoors-still-life_23-2150572789.jpg?uid=R161039446&ga=GA1.1.552906696.1701337082&semt=ais_hybrid', rating: 4 },
    { id: 2, name: 'Pasha Bridal Necklace', price: '₹32000', image: 'https://img.freepik.com/free-photo/luxury-shine-diamonds-digital-art_23-2151695045.jpg?uid=R161039446&ga=GA1.1.552906696.1701337082', rating: 5 },
    { id: 3, name: 'Axor Bumblebee helmet ', price: '₹4499', image: 'https://img.freepik.com/free-photo/motorcycle-safety-helmet_23-2151531264.jpg?uid=R161039446&ga=GA1.1.552906696.1701337082', rating: 3 },
    { id: 4, name: '4*4 Window Curtain', price: '₹1700', image: 'https://img.freepik.com/free-photo/curtain-with-sunlight_1339-4061.jpg?uid=R161039446&ga=GA1.1.552906696.1701337082&semt=ais_hybrid', rating: 4 },
    { id: 5, name: 'Luker table lamp', price: '₹399', image: 'https://img.freepik.com/free-photo/modern-photorealistic-lamp-design_23-2151038960.jpg?uid=R161039446&ga=GA1.1.552906696.1701337082', rating: 3 },
    { id: 6, name: 'Lord Ganesha toy', price: '₹800', image: 'https://img.freepik.com/free-photo/cartoon-3d-image-hindu-deity-ganesha_125540-4223.jpg?uid=R161039446&ga=GA1.1.552906696.1701337082', rating: 5 },
    { id: 7, name: 'Milton 1L Water Bottle', price: '₹598', image: 'https://img.freepik.com/free-photo/photorealistic-water-bottles_23-2151049012.jpg?uid=R161039446&ga=GA1.1.552906696.1701337082&semt=ais_hybrid', rating: 4 },
    { id: 8, name: 'Safari xx spacious Bag', price: '₹2777', image: 'https://img.freepik.com/free-photo/image-blue-school-bag-white-background_125540-3456.jpg?uid=R161039446&ga=GA1.1.552906696.1701337082&semt=ais_hybrid', rating: 3 },
    { id: 9, name: 'Yamaha mt15 Miniature', price: '₹1100', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zk_RtACyrXToBw9WWJDSJI9SbR5oYqp6Yg&s', rating: 5 },
    { id: 10, name: 'vivo U-Series', price: '₹51000', image: 'https://img.freepik.com/free-vector/realistic-phones-different-views_52683-28436.jpg?uid=R161039446&ga=GA1.1.552906696.1701337082', rating: 4 },
    { id: 11, name: 'Rayon Printed Anarkali', price: '₹699', image: 'https://img.freepik.com/free-photo/young-woman-with-shopping-bags-beautiful-dress_1303-17549.jpg?uid=R161039446&ga=GA1.1.552906696.1701337082&semt=ais_hybrid', rating: 3 },
    { id: 12, name: '12kg Weightlift Dumbell', price: '₹7500', image: 'https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114183.jpg?uid=R161039446&ga=GA1.1.552906696.1701337082', rating: 2 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    setSnackbarOpen(true);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCartOpen = () => {
    setCartOpen(true);
  };

  const handleCartClose = () => {
    setCartOpen(false);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <div>
      {/* AppBar with Aesthetic Gradient */}
      <AppBar
        position="static"
        style={{
          background: 'linear-gradient(135deg, #6e45e2, #88d3ce)', // Aesthetic gradient
        }}
      >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Bkart.in {/* website name */}
          </Typography>
          {/* Search Bar */}
          <TextField
            variant="outlined"
            placeholder="Search…"
            size="small"
            style={{
              background: '#fff',
              borderRadius: 4,
              flexGrow: 1,
              marginRight: 16,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button color="inherit">Home</Button>
          <Button color="inherit">Products</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Contact Us</Button>
          <IconButton color="inherit" onClick={handleCartOpen}>
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose}>Home</MenuItem>
        <MenuItem onClick={handleMenuClose}>Products</MenuItem>
        <MenuItem onClick={handleMenuClose}>Contact Us</MenuItem>
      </Menu>

      {/* Shopping Cart Dialog */}
      <Dialog open={cartOpen} onClose={handleCartClose}>
        <DialogTitle>Shopping Cart</DialogTitle>
        <DialogContent>
          {cart.length === 0 ? (
            <Typography>Your cart is empty.</Typography>
          ) : (
            cart.map((item, index) => (
              <Typography key={index}>{item.name} - {item.price}</Typography>
            ))
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCartClose} color="primary">Close</Button>
          {cart.length > 0 && <Button color="primary">Checkout</Button>}
        </DialogActions>
      </Dialog>

      {/* Hero Section */}
      <Box sx={{ background: 'linear-gradient(to right, #6e45e2, #88d3ce)', padding: '50px 0', textAlign: 'center', color: '#fff' }}>
        <Typography variant="h3" gutterBottom>Welcome to Bkart.in</Typography>
        <Typography variant="h5" gutterBottom>Discover amazing products at affordable prices!</Typography>
        <Button variant="contained" style={{ background: '#fff', color: '#000' }}>Shop Now</Button>
      </Box>

      {/* Products Grid */}
      <Container style={{ marginTop: '20px' }}>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}> {/* Smaller product boxes */}
              <Card sx={{ boxShadow: 3, borderRadius: 2, transition: '0.3s', '&:hover': { boxShadow: 6 } }}>
                <CardMedia
                  component="img"
                  height="200" // Increased height
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div"> {/* Smaller product name */}
                    {product.name}
                  </Typography>
                  <Rating value={product.rating} readOnly />
                  <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1, marginBottom: 1 }}>
                    {product.price}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      variant="contained"
                      style={{
                        background: '#88d3ce', // Green color from the gradient
                        color: '#fff',
                        fontSize: '12px', // Smaller text size
                        padding: '5px 10px' // Smaller button
                      }}
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      variant="contained"
                      style={{
                        background: '#6e45e2', // Blue color from the gradient
                        color: '#fff',
                        fontSize: '12px', // Smaller text size
                        padding: '5px 10px' // Smaller button
                      }}
                    >
                      Shop
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Snackbar for Add to Cart Notification */}
      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
        <MuiAlert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Added to Cart
        </MuiAlert>
      </Snackbar>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#000', color: '#fff', padding: '20px 0', textAlign: 'center' }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">About Us</Typography>
              <Typography variant="body2">We are committed to providing the best products at the most affordable prices.</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">Contact Us</Typography>
              <Typography variant="body2">Email: support@bkart.in</Typography> {/* Updated email */}
              <Typography variant="body2">Phone: 8754365691</Typography> {/* Updated phone number */}
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">Follow Us</Typography>
              <IconButton color="inherit"><InstagramIcon /></IconButton>
              <IconButton color="inherit"><TwitterIcon /></IconButton>
              <IconButton color="inherit"><FacebookIcon /></IconButton>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default App;
