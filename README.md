 /mnt/user-data/outputs/README.md << 'EOF'
# Travique

> Explore · Discover · Travel

A full-stack travel accommodation platform where users can discover destinations, create listings, share reviews, and manage their travel experiences.

![Travique](https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80)

---

## Features

| Feature | Description |
|---|---|
| 🔐 Authentication | Register, login, secure sessions with Passport.js |
| 🏡 Listings | Create, edit, delete, and view travel listings |
| ⭐ Reviews | Add and delete reviews with star ratings |
| 🗺️ Maps | Interactive maps with Mapbox geocoding |
| ☁️ Images | Cloud image uploads via Cloudinary |
| 📱 Responsive | Mobile-friendly Bootstrap UI |

---

## Tech Stack

**Frontend** — HTML5, CSS3, Bootstrap 5, EJS, JavaScript

**Backend** — Node.js, Express.js

**Database** — MongoDB, Mongoose

**Auth** — Passport.js, Passport Local Strategy

**Cloud** — Cloudinary, Multer

**Maps** — Mapbox

---

## Project Structure

```
Travique/
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── views/
│   ├── listings/
│   ├── users/
│   ├── layouts/
│   └── includes/
├── public/
│   ├── css/
│   ├── js/
│   └── images/
├── utils/
├── middleware.js
├── cloudConfig.js
├── app.js
└── .env
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/travique.git
cd travique
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_mapbox_access_token
```

### 4. Start the server

```bash
node app.js
```

Visit `http://localhost:8080`

---

## Environment Variables

| Variable | Description |
|---|---|
| `ATLASDB_URL` | MongoDB Atlas connection string |
| `SECRET` | Session secret key |
| `CLOUD_NAME` | Cloudinary cloud name |
| `CLOUD_API_KEY` | Cloudinary API key |
| `CLOUD_API_SECRET` | Cloudinary API secret |
| `MAP_TOKEN` | Mapbox access token |

---

## Roadmap

- [ ] Booking system
- [ ] Payment gateway
- [ ] Wishlist feature
- [ ] Advanced search filters
- [ ] Real-time notifications
- [ ] Travel categories

---

## Contributing

1. Fork the repository
2. Create a feature branch — `git checkout -b feature/NewFeature`
3. Commit your changes — `git commit -m "Add NewFeature"`
4. Push to the branch — `git push origin feature/NewFeature`
5. Open a Pull Request

---

## License

This project is licensed under the MIT License.

---

Built with ❤️ by **Sneha Tiwari**
EOF
Output

exit code 0
Done

You are out of free messages
