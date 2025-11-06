
// Normalize location names (e.g., "chandigarh" → "Chandigarh")
export const normalizeLocation = (location) => {
  if (!location) return '';
  
  const locationMap = {
    chandigarh: 'Chandigarh',
    mohali: 'Mohali',
    panchkula: 'Panchkula',
    // add more mappings as needed
  };
  
  const lowerCaseLoc = location.toLowerCase();
  return locationMap[lowerCaseLoc] || location;
};

// Validate if location is supported
export const isValidLocation = (location) => {
  const validLocations = ['chandigarh', 'mohali', 'panchkula', 'all'];
  return validLocations.includes(location.toLowerCase());
};

// Get display name for location
export const getDisplayLocation = (location) => {
  return location === 'all' 
    ? 'All Locations' 
    : normalizeLocation(location);
};