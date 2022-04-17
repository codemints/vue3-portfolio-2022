import { ref } from 'vue'

export const sections = ref([
  {
    title: 'site(intro)',
    route: 'home-route'
  },
  {
    title: 'about(me)',
    route: 'bio-route'
  },
  {
    title: 'my(work)',
    route: 'portfolio-route'
  },
  {
    title: 'dev(skills)',
    route: 'experience-route'
  },
  {
    title: 'contact(info)',
    route: 'contact-route'
  },
])

export const links = ref([
  // {
  //   name: 'twitter',
  //   icon: 'fa-twitter',
  //   url: 'https://www.twitter.com/codemints'
  // },
  {
    name: 'linkedin',
    icon: 'fa-linkedin-in',
    url: 'https://www.linkedin.com/in/codemints'
  },
  {
    name: 'codepen',
    icon: 'fa-codepen',
    url: 'https://www.codepen.io/codemints'
  },
  {
    name: 'github',
    icon: 'fa-github-alt',
    url: 'https://www.github.com/codemints'
  },
])