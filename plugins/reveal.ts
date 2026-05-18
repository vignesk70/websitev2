type RevealBinding =
  | number
  | {
      delay?: number
      distance?: number
      threshold?: number
      once?: boolean
    }

type RevealElement = HTMLElement & {
  __revealObserver?: IntersectionObserver
}

const getOptions = (value?: RevealBinding) =>
  typeof value === 'number' ? { delay: value } : (value ?? {})

const getSSRProps = (binding: { value?: RevealBinding }) => {
  const options = getOptions(binding.value)
  const style: string[] = []

  if (options.delay) {
    style.push(`--reveal-delay:${options.delay}ms`)
  }

  if (options.distance) {
    style.push(`--reveal-distance:${options.distance}px`)
  }

  return {
    class: 'reveal-on-scroll',
    style: style.join(';')
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    getSSRProps,
    mounted(el: RevealElement, binding: { value?: RevealBinding }) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.classList.add('is-visible')
        return
      }

      const options = getOptions(binding.value)

      el.classList.add('reveal-on-scroll')

      if (options.delay) {
        el.style.setProperty('--reveal-delay', `${options.delay}ms`)
      }

      if (options.distance) {
        el.style.setProperty('--reveal-distance', `${options.distance}px`)
      }

      const once = options.once ?? true
      const threshold = options.threshold ?? 0.16

      el.__revealObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) {
              if (!once) {
                entry.target.classList.remove('is-visible')
              }
              continue
            }

            entry.target.classList.add('is-visible')

            if (once) {
              el.__revealObserver?.disconnect()
            }
          }
        },
        {
          threshold
        }
      )

      el.__revealObserver.observe(el)
    },
    unmounted(el: RevealElement) {
      el.__revealObserver?.disconnect()
    }
  })
})
