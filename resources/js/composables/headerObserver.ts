function headerObserver(element: HTMLElement): void {
  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting === false) {
        element.classList.add('sticky-header');
      } else {
        element.classList.remove('sticky-header');
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  observer.observe(document.getElementById('phantom'));
}

export default headerObserver;
