const geocodeLocation = async (location, country) => {
  try {
    const query = `${location}, ${country}`;

    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`,
      {
        headers: {
          "User-Agent": "Travique/1.0"
        }
      }
    );

    const data = await response.json();

    if (data && data.length > 0) {
      return {
        latitude: parseFloat(data[0].lat),
        longitude: parseFloat(data[0].lon)
      };
    }

    return {
      latitude: 20,
      longitude: 0
    };
  } catch (error) {
    console.log("Geocoding error:", error);

    return {
      latitude: 20,
      longitude: 0
    };
  }
};

module.exports = { geocodeLocation };