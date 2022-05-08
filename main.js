window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurretSection(home)
  activateMenuAtCurretSection(services)
  activateMenuAtCurretSection(about)
  activateMenuAtCurretSection(contact)
}

function activateMenuAtCurretSection(section) {

  // linha alvo
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  // quais dados vou precisa?

  // o topo da seção
  const sectionTop = section.offsetTop

  // a altura da seção 
  const sectionHeight = section.offsetHeight

  // o topo da seção chegou ou ultrapassou a linha alvo?
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // verificar se a base está abaixo da linha alvo
  //quais dados vou precisar?

  //a seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight

  //o final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
  
  // limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
  menuElement.classList.add('active')
  }

}























function showNavOnScroll(){
    if (scrollY > 0) {
      navigation.classList.add('scroll')
    } else {
      navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll(){
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    navigation.classList.remove('show')
  }
}

function openMenu(){
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
  #home,
  #home img, 
  #home .stats, 
  #services,
  #sevices header,
  #services .cards,
  #about,
  #about header,
  #about .content`)

