const formatResult = (rows) => {
  const listings = {};

  rows.forEach((row) => {
    const car = row.carListing;
    const image = row.carImages;

    if (!car) return;

    if (!listings[car.id]) {
      listings[car.id] = {
        ...car,
        images: [],
      };
    }

    if (image?.imageUrl) {
      listings[car.id].images.push(image.imageUrl);
    }
  });

  return Object.values(listings);
};
