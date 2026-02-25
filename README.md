# TripNest - Travel Booking Platform

A modern, responsive travel booking application built with React.js that helps users discover and book amazing travel experiences around the world.

## 🌟 Features

- **Destination Discovery**: Browse popular travel destinations with detailed information
- **Tour Listings**: Comprehensive tour packages with pricing, ratings, and reviews
- **Advanced Search**: Filter tours by location, price, and preferences
- **Photo Gallery**: Interactive gallery with lightbox functionality
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Built with Bootstrap 5 and custom styling
- **Smooth Navigation**: React Router for seamless page transitions

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1
- **Styling**: Bootstrap 5.3.3, Custom CSS
- **Routing**: React Router DOM 6.23.1
- **Image Gallery**: Yet Another React Lightbox
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/abidazamkhan-26/tournest.git

# Navigate to project directory
cd tournest

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 🚀 Development

### Available Scripts

- `npm start` - Run development server on http://localhost:3000
- `npm run build` - Build production version
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Project Structure

```
src/
├── components/          # Reusable components
│   ├── Common/        # Header, Footer, Breadcrumbs
│   ├── Cards/         # Product cards, Tour cards
│   ├── Banner/        # Hero banner
│   ├── AdvanceSearch/  # Search functionality
│   ├── Features/      # Feature highlights
│   ├── Gallery/       # Photo gallery
│   └── PopularPlace/  # Popular destinations
├── pages/             # Page components
│   ├── Home/          # Homepage
│   ├── Tours/         # Tours listing
│   ├── TourDetails/   # Tour details page
│   ├── Booking/       # Booking page
│   ├── Contact/       # Contact page
│   └── About/         # About page
├── assets/            # Static assets
│   └── images/        # Image files
└── utils/             # Utility functions and data
```

## 🌐 Deployment

### Production Deployment

The app is configured for deployment with PM2 on port 3008:

```bash
# Build the application
npm run build

# Deploy with PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=your_api_url
REACT_APP_ENV=production
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Author

**Abid Khan Azam**
- GitHub: [@abidazamkhan-26](https://github.com/abidazamkhan-26)
- Email: tripnest@gmail.com

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React.js team for the amazing framework
- Bootstrap for the responsive UI components
- All contributors who helped build this project

---

**TripNest** - Your Gateway to Amazing Travel Experiences ✈️🌍