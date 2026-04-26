import { useHead } from '@unhead/vue'
import { computed } from 'vue'

export const useSeo = (options) => {
  const title = computed(() => options.title || '')
  const description = computed(() => options.description || '')
  const keywords = computed(() => options.keywords || '')

  useHead({
    title: title,

    meta: [
      // Schema.org
      { itemprop: 'headline', content: title },

      // Open Graph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },

      // Twitter
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },

      // Стандартные
      { name: 'description', content: description, itemprop: 'description' },
      { name: 'keywords', content: keywords },
    ]
  })
}
