const card = document.querySelectorAll('.card')

card.forEach(el => {
  el.addEventListener('mouseenter', ()=> {el.classList.add('active')})
})

card.forEach(el => {
  el.addEventListener('mouseleave', ()=> {
    el.classList.remove('active')
    
  })
})