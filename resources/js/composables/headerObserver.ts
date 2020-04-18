function headerObserver (element: HTMLElement): void {
  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 1
  }

  const callback = (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        element.classList.add('sticky-header')
      }
    })
  }
  const observer = new IntersectionObserver(callback, options)
  observer.observe(element)
}

export default headerObserver
