
// QUERY
const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')

// INSERT ELEMENTS
const getData = () => {
  header.innerHTML = '<img src="https://images.unsplash.com/photo-1611420955816-26ea0b944fb1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="Picture of a production quality film camera sitting on the floor" />'
  
  title.innerHTML = 'How to pick the right camera for production'
  
  excerpt.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, a!'
  
  profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/50.jpg" />'
  
  name.innerHTML = 'Jill Due'
  date.innerHTML = 'Oct 08, 2021'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))

  animated_bg_text.forEach((bg) => bg.classList.remove('animated-bg-text'))
}

// INSERT AFTER 2.5 SECONDS
setTimeout(getData, 2500)