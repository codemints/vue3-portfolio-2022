<template>
  <span
    v-for="(word, wordIndex) in contentData"
    :key="wordIndex"
    :class="getWordClass(wordIndex)"
  >
    <span
      v-for="(char, charIndex) in word.chars"
      :key="charIndex"
      :class="[
        getCharClass(charIndex, word.startingIndex),
        specialChars.includes(char) ? specialClass : '',
        extraClasses
      ]"
      :data-char="char.toLowerCase()"
      :ref="setRefs"
      @mouseover.stop.prevent="emit('hover', elementRefs[sequencedIndex(charIndex, word.startingIndex)])"
      @mouseout.stop.prevent="emit('unhover', elementRefs[sequencedIndex(charIndex, word.startingIndex)])"
    >
      {{ char }}
    </span>
    <span v-if="word.word !== splitContent.at(-1)" class="whitespace">&nbsp;</span>
  </span>
</template>

<script>
  import { ref, computed, onMounted } from 'vue'
  
  export default {
    
    props: [
      'content',
      'wordClass',
      'charClass',
      'specialChars',
      'specialClass',
      'extraClasses',
    ],

    emits: ['hover', 'unhover'],
    
    setup (props, { emit }) {
      const elementRefs = ref([])
      
      //METHODS
      const sequencedIndex = (index, startAt) => {
        return index + startAt
      }
      
      const getWordClass = (index) => {
        return `${props.wordClass} ${props.wordClass}__index-${index}`
      }
    
      const getCharClass = (index, startAt) => {
        return `${props.charClass} ${props.charClass}__index-${sequencedIndex(index, startAt)}`
      }

      const setRefs = el => {
        elementRefs.value.push(el)
      }
    
      //COMPUTED PROPERTIES
      const splitContent = computed(() => {
        return props.content.split(' ')
      })
    
      const contentData = computed(() => {
        const wordData = []
        let start = 0
        
        splitContent.value.forEach((item, index) => {
          start += item.length
          wordData.push({
            word: item,
            wordLength: item.length,
            startingIndex: start - item.length,
            chars: Array.from(item)
          })
        })
        return wordData
      })

      const compare = (word, at) => {
        console.log(word, at)
      }
      
      return {
        ...props,
        emit,
        sequencedIndex,
        getWordClass,
        getCharClass,
        splitContent,
        contentData,
        setRefs,
        elementRefs,
        compare
      }
    }
    
  }
  
</script>

<style lang="scss" scoped>

  .char {
    display: inline-block;
  }

</style>