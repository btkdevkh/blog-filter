const getPosts = async () => {
  const res = await fetch('./posts.json')
  const datas = await res.json()
  return datas
}

export default getPosts