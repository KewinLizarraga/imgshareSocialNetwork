// Likes
const btnLike = document.getElementById('btn-like')
if (btnLike) {
  btnLike.addEventListener('click', async (e) => {
    e.preventDefault()
    const image_id = btnLike.getAttribute('data-id')
    const url = `http://localhost:3000/images/${image_id}/like`
    const sendLike = await fetch(url, {
      method: 'POST'
    })
    if (sendLike.ok) {
      const data = await sendLike.json()
      const likesCount = document.getElementsByClassName('likes-count')
      likesCount[0].textContent = data.likes
    }
  })
}

// Delete image
const btnDelete = document.getElementById('btn-delete')
if (btnDelete) {
  btnDelete.addEventListener('click', async (e) => {
    e.preventDefault()
    const image_id = btnDelete.getAttribute('data-id')
    const url = `http://localhost:3000/images/${image_id}`
    const response = confirm('Desea eliminar ?')
    
    if (response) {
      const sendDelete = await fetch(url, {
        method: 'DELETE'
      })
      if (sendDelete.ok) {
        window.location.href = 'http://localhost:3000/home'
      }
    }
  })
}

// Toggle Comment
const btnPostComment = document.getElementById('btn-comment')
if (btnPostComment) {
  const block = document.getElementById('post-comment')
  block.style.display = 'none'
  btnPostComment.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('Click en Post Comment');
    block.style.display = (block.style.display == 'none') ? 'block' : 'none';
  })
}