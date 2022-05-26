const filter = (posts, searchTerm) => {
  return posts.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));
}

export default filter
