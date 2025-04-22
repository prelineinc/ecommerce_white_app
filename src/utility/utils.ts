import { onBeforeUnmount, onMounted, ref } from "vue"

export const isMobile = () => {
  return window.innerWidth < 768
}
export const useMobileDetection = () => {
  const isMobile = ref(window.innerWidth < 768)

  onMounted(() => {
    window.addEventListener('resize', handleResize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
  })

  const handleResize = () => {
    isMobile.value = window.innerWidth < 768
  }

  return { isMobile }
}
export const getBrowser = () => {
  return navigator.userAgent
}

export const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

export const getOS = () => {
  const userAgent = navigator.userAgent
  if (userAgent.indexOf('Windows') !== -1) {
    return 'Windows'
  } else if (userAgent.indexOf('Mac') !== -1) {
    return 'Mac'
  } else if (userAgent.indexOf('Linux') !== -1) {
    return 'Linux'
  } else if (userAgent.indexOf('Android') !== -1) {
    return 'Android'
  } else if (userAgent.indexOf('iPhone') !== -1 || userAgent.indexOf('iPad') !== -1) {
    return 'iOS'
  } else {
    return 'Unknown'
  }
}
