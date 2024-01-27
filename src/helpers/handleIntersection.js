export const handleIntersection = entries => {
  entries.forEach(entry => {
    const isIntersecting = entry.isIntersecting;

    if (isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
};
