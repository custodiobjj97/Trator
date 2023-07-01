// is function for show menu mobile

function initMenuMobile() {
    const toggle = document.querySelector('.toggle')
    function activeToggle(e) {
        if (e.type === 'touchstart') {
            e.preventDefault()
        }
        const menu = document.querySelector('.list-menu')
        menu.classList.toggle('active')
    }

    toggle.onclick = activeToggle
    toggle.ontouchstart = activeToggle
  
}

initMenuMobile()

// is function for slide touch

function initSlide() {
    const cardWrapper = document.querySelector('.cardWrapper')
    const cardBounding = cardWrapper.getBoundingClientRect()
    const imgAndLink = cardWrapper.querySelectorAll('img,p,a')
    
    let initPos = 0
    let currScroll = 0
    let clicked = false

    imgAndLink.forEach(item => item.setAttribute('draggable', false))

        cardWrapper.onmousedown = function (e) {
        cardWrapper.classList.add('grab')
        initPos = e.clientX - cardBounding.left
        currScroll = cardWrapper.scrollLeft
        clicked = true
    }
    
    cardWrapper.onmousemove = function (e) {
        if (clicked) {
            const xPos = e.clientX - cardBounding.left
            cardWrapper.scrollLeft= currScroll + - (xPos - initPos)
        }
    }

    cardWrapper.onmouseup = onImgAndLeave
    cardWrapper.onmouseleave = onImgAndLeave

    function onImgAndLeave() {
        cardWrapper.classList.remove('grab')
        clicked= false
    }
    

}

initSlide()