export const getImage = (item) => {
  // uploads/2021-01-23T16:10:10.184Z00419031-01.jpg
  // http://ecommerce.hungvu.net/2021-01-23T16:10:10.184Z00419031-01.jpg
  const imageName = item.replace('uploads', '')
  return `http://ecommerce.hungvu.net/${imageName}`
}