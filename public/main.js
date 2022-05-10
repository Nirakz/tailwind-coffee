// Athor: Nirakz

const topMenu = document.getElementById('dori-top-menu')
const toggleTopMenuIcon = document.getElementById('dori-toggle-top-menu-icon')

document.addEventListener('click', (e) => {
  if (toggleTopMenuIcon.contains(e.target)) {
    topMenu.classList.toggle('dori-topmenu-expanded')
    topMenu.classList.toggle('hidden')
  } else {
    if(topMenu.classList.contains('dori-topmenu-expanded')) {
      topMenu.classList.remove('dori-topmenu-expanded')
      topMenu.classList.add('hidden')
    }
  }
})
