const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
 #section .text, #section .image, #content .text, #content .image, #three .text, #three .image
  `,
  { interval: 40 }
)
