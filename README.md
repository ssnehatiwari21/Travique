# Travique

<p align="center">
  <strong>Explore • Discover • Travel</strong><br>
  A full-stack travel accommodation and destination discovery platform.
</p>

<p align="center">
  <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80" alt="Travique Banner">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Express.js-green" alt="Node">
  <img src="https://img.shields.io/badge/MongoDB-Atlas-success" alt="MongoDB">
  <img src="https://img.shields.io/badge/Cloudinary-Image%20Storage-blue" alt="Cloudinary">
  <img src="https://img.shields.io/badge/Mapbox-Maps-orange" alt="Mapbox">
  <img src="https://img.shields.io/badge/MVC-Architecture-purple" alt="MVC">
</p>

---

## ✨ Overview

Travique is a modern travel accommodation platform inspired by Airbnb, designed to help users discover destinations, explore unique stays, and share travel experiences.

The application follows the **MVC (Model–View–Controller)** architecture and provides secure authentication, image uploads, interactive maps, and community-driven reviews.

---

## 🚀 Features

### 🔐 User Authentication

* User Registration & Login
* Secure Password Hashing
* Session-Based Authentication
* Protected Routes & Authorization

### 🏡 Listing Management

* Create New Listings
* Edit Existing Listings
* Delete Listings
* View Detailed Listing Information
* Upload Destination Images

### ⭐ Reviews & Ratings

* Add Reviews
* Delete Reviews
* Rating System
* Review Validation

### 🗺️ Interactive Maps

* Mapbox Integration
* Geocoding Support
* Location Visualization

### ☁️ Cloud Image Storage

* Cloudinary Integration
* Optimized Image Hosting
* Image Upload Management

### 📱 Responsive Design

* Mobile-Friendly Interface
* Bootstrap Components
* Clean & Modern UI

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* Bootstrap 5
* JavaScript
* EJS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* Passport.js
* Passport Local

### File Uploads

* Multer
* Cloudinary

### Maps & Geolocation

* Mapbox

---

## 🏗️ Architecture

Travique follows the **MVC Architecture**:

```text
Client Request
      │
      ▼
   Routes
      │
      ▼
 Controllers
      │
 ┌────┴────┐
 ▼         ▼
Models    Views
(MongoDB) (EJS)
```

This structure ensures:

* Better code organization
* Easier maintenance
* Scalability
* Separation of concerns

---

## 📂 Project Structure

```text
Travique/
│
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── views/
│   ├── listings/
│   ├── users/
│   ├── layouts/
│   └── includes/
│
├── public/
│   ├── css/
│   ├── js/
│   └── images/
│
├── utils/
├── middleware.js
├── cloudConfig.js
├── app.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/travique.git
cd travique
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
ATLASDB_URL=your_mongodb_connection_string

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_mapbox_access_token
```

### Run the Application

```bash
node app.js
```

or

```bash
npm start
```

Open:

```text
http://localhost:8080
```

---

## 📸 Screenshots

### Home Page

Add screenshot here:

```text
screenshots/home.png
```

### Listing Details

Add screenshot here:

```text
screenshots/listing-details.png
```

### Create Listing

Add screenshot here:

```text
screenshots/create-listing.png
```

---

## 🌱 Future Enhancements

* Wishlist Functionality
* Booking System
* Online Payments
* Travel Categories
* Advanced Search Filters
* User Dashboard
* Real-Time Notifications
* Favorite Destinations

---

## 🤝 Contributing

Contributions are welcome!

```bash
# Create feature branch
git checkout -b feature/new-feature

# Commit changes
git commit -m "Add new feature"

# Push branch
git push origin feature/new-feature
```

Then open a Pull Request.

---

## 📜 License

Distributed under the MIT License.

---

## 👩‍💻 Developer

**Sneha Tiwari**

Passionate about building scalable web applications and creating seamless user experiences.

---

<p align="center">
  <strong>🌍 Explore the World with Travique ✈️</strong>
</p>
