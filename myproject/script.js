function scrollToView(element) {
    console.log(element)
    document.querySelector(element).scrollIntoView({
        behavior: 'smooth'
    })
}