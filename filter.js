const filter = (posts, searchTerm) => {
  return posts.filter(p => {
    const allTexts = [
      p.title, 
      p.summery,
      p.user.name[0].firstName,
      p.meta.tags.map(t => t)
    ].join('')

    return allTexts.toLowerCase().includes(searchTerm.toLowerCase())
  });
}

export default filter
