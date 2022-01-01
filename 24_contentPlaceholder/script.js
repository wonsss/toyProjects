const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1641030267989-e91eab7ada61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60" alt="" />';
  title.innerHTML = 'Lorem ipsum dolor sit amet.';
  excerpt.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, ea.';
  profileImg.innerHTML = '<img src="https://randomuser.me/api/portraits/men/22.jpg" alt="" />';
  name.innerHTML = 'Marco Jang';
  date.innerHTML = 'Jan, 01, 2022';

  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
  animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}

setTimeout(getData, 500);
