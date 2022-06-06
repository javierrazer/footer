window.onscroll = function() {
    if (document.scrolltop > 5) {
        document.querySelector('.go-top-container')
            .classList.add('show')

    }
}