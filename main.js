import getPosts from './fetch.js'
import generate from './generate.js';
import filter from './filter.js';

(function() {
  const postsContainer = document.querySelector('.posts-container')

  let skeleton = `
    <div class="post-card">
      <div>
        <div class="tags">
          <span class="skeleton></span>
          <span class="skeleton></span>
        </div>
        <div class="skeleton date"></div>
      </div>

      <div class="post-body">
        <h3 class="skeleton post-title"></h3>

        <div class="post-content">
          <div class="post-content-header">
            <div class="skeleton>
              
            </div>
            <div>
              <h4 class="skeleton></h4>
              <div class="skeleton ocuppation"><small</small></div>
            </div>
          </div>

          <div class="post-content-body">
            <p class="skeleton"></p>
            <p class="skeleton"></p>
            <p class="skeleton"></p>
            <p class="skeleton"></p>
            <p class="skeleton"></p>
          </div>
        </div>
      </div>

      <a href="#" class="skeleton></a>
    </div>
  `;
  
  postsContainer.innerHTML = skeleton

  getPosts()
    .then(datas => {
      postsContainer.innerHTML = generate(datas)

      const searchTerm = document.querySelector('#search')
      const posts = document.querySelectorAll('.post-card')
      
      searchTerm.addEventListener('keyup', () => {
        if(searchTerm.value === '') {
          postsContainer.innerHTML = generate(datas)
        } else {
          postsContainer.innerHTML = generate(filter(datas, searchTerm.value))
        }
      })
    })
    .catch(err => console.log(err))
})()
