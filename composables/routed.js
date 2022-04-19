import { ref } from 'vue'
import vuejsLight from 'img/footer-ico-light-06.png'
import vuejsDark from 'img/footer-ico-dark-06.png'
import nuxtLight from 'img/footer-ico-light-08.png'
import nuxtDark from 'img/footer-ico-dark-08.png'
import netlifyLight from 'img/footer-ico-light-05.png'
import netlifyDark from 'img/footer-ico-dark-05.png'
import vuexLight from 'img/footer-ico-light-07.png'
import vuexDark from 'img/footer-ico-dark-07.png'
import supabaseLight from 'img/footer-ico-light-02.png'
import supabaseDark from 'img/footer-ico-dark-02.png'
import sassLight from 'img/footer-ico-light-04.png'
import sassDark from 'img/footer-ico-dark-04.png'
import tailwindLight from 'img/footer-ico-light-03.png'
import tailwindDark from 'img/footer-ico-dark-03.png'
import faLight from 'img/footer-ico-light-01.png'
import faDark from 'img/footer-ico-dark-01.png'
import gsapLight from 'img/footer-ico-light-09.png'
import gsapDark from 'img/footer-ico-dark-09.png'

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

export const tech = ref([
  {
    name: 'vuejs',
    iconLight: vuejsLight,
    iconDark: vuejsDark,
    url: 'https://vuejs.org/',
  },
  {
    name: 'nuxt',
    iconLight: nuxtLight,
    iconDark: nuxtDark,
    url: 'https://v3.nuxtjs.org/',
  },
  {
    name: 'netlify',
    iconLight: netlifyLight,
    iconDark: netlifyDark,
    url: 'https://vuejs.org/',
  },
  {
    name: 'vuex',
    iconLight: vuexLight,
    iconDark: vuexDark,
    url: 'https://vuex.vuejs.org/',
  },
  {
    name: 'supabase',
    iconLight: supabaseLight,
    iconDark: supabaseDark,
    url: 'https://supabase.com/',
  },
  {
    name: 'sass',
    iconLight: sassLight,
    iconDark: sassDark,
    url: 'https://sass-lang.com/',
  },
  {
    name: 'tailwind',
    iconLight: tailwindLight,
    iconDark: tailwindDark,
    url: 'https://tailwindcss.com/',
  },
  {
    name: 'fa',
    iconLight: faLight,
    iconDark: faDark,
    url: 'https://fontawesome.com/',
  },
  {
    name: 'gsap',
    iconLight: gsapLight,
    iconDark: gsapDark,
    url: 'https://greensock.com/gsap/',
  },
])