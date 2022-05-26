const generate = (posts) => {
  let html = ''
  posts.forEach(data => {
    html += `
      <div class="post-card">
        <div>
          <div class="tags">
            <span>CSS</span>
            <span>JS</span>
          </div>
          <div class="date">2/10/22</div>
        </div>
  
        <div class="post-body">
          <h3 class="post-title">${data.title}</h3>
  
          <div class="post-content">
            <div class="post-content-header">
              <div>
                <img src="https://picsum.photos/200" alt="people">
              </div>
              <div>
                <h4>${data.user.name[0].firstName}</h4>
                <div class="ocuppation"><small>Developer JS</small></div>
              </div>
            </div>
  
            <div class="post-content-body">
              ${data.summary}
            </div>
          </div>
        </div>
  
        <a href="#">Read Post</a>
      </div>
    `
  })

  return html
}

export default generate