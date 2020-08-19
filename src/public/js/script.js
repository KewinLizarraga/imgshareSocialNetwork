// Likes
const like = document.getElementById('btn-like')
like.addEventListener('click', async (e) => {
  e.preventDefault()
  const image_id = like.getAttribute('data-id')
  const url = `http://localhost:3000/images/${image_id}/like`
  const enviando = await fetch(url, {
    method: 'POST'
  })
  if (enviando.ok) {
    const data = await enviando.json()
    const likesCount = document.getElementsByClassName('likes-count')
    likesCount[0].textContent = data.likes
  }
})
