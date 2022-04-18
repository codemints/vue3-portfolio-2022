import { ref } from 'vue'

export const sectionRoutes = ref([
  {
    title: 'site(intro)',
    scrollTo: 'intro',
    route: null,
  },
  {
    title: 'about(me)',
    scrollTo: 'about',
    route: null,
  },
  {
    title: 'my(work)',
    scrollTo: 'portfolio',
    route: null,
  },
  {
    title: 'dev(skills)',
    scrollTo: 'experience',
    route: null,
  },
  {
    title: 'contact(info)',
    scrollTo: 'contact',
    route: null,
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