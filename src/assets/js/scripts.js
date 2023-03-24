const activeNavbarItem = (numItem) => {
  const items = document.querySelectorAll('.navBarItem')
  items.forEach((item) => {
    item.classList.remove('active')
  })
  document.querySelector('#menuLink-' + numItem).classList.add('active')

  localStorage.setItem('activeNavBarItem', numItem)
  const width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  )
  if (width <= 991) {
    btnCloseNavBar()
  }
}

const btnCloseNavBar = () => {
  document.querySelector('#btnCloseNavBar').click()
}

export { activeNavbarItem, btnCloseNavBar }
