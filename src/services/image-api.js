export const fetchImages = (query, pageNumber) => {
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${pageNumber}&per_page=12&key=14062645-02e0e5cefe0f6e0703dab69b4`,
  )
    .then(res => res.json())
    .then(data => data.hits);
};
