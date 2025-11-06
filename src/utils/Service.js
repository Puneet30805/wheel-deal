export const formatResult = (rows) => {
  const listings = {};

  rows.forEach((row) => {
    const car = row.carListing;
    const image = row.carImages;

    if (!car) return;

    // Initialize the car entry if it doesn't exist yet
    if (!listings[car.id]) {
      listings[car.id] = {
        ...car,
        images: [],
      };
    }

    // Push the image URL if it exists
    if (image?.imageUrl) {
      listings[car.id].images.push(image.imageUrl);
    }
  });

  // Convert object to array
  return Object.values(listings);
};
