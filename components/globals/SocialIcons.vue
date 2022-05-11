<template>
  <div class="social__nav">
    <a
      v-for="link in links"
      :key="link.name"
      :href="link.url"
      target="_blank"
      :ref="setRefs"
      data-hover="grow"
    >
      <i class="[ fa-brands ]" :class="[ link.icon, names.icon ]"></i>
    </a>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { cNameRef as names } from 'state/class-names'
  import { links } from 'state/routed'
  import { siteLinks } from '@/stores/links'

  const { addItem } = siteLinks()
  const elementRefs = ref([])

  const setRefs = el => {
    elementRefs.value.push(el)
  }

  onMounted(() => {
    elementRefs.value.forEach(ref => addItem(ref, 'links'))
  })
</script>

<style lang="scss" scoped>
  .social__nav {
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    
    a {
      cursor: none;
    }
    
    i {
      font-size: 2.8rem;
    }
  }

</style>