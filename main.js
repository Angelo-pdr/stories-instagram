class SlideStories{
    constructor(id){
        this.slide = document.querySelector(`[data-slide="${id}"]`)
        this.active = 0

        this.init()
    }

    activeSlide(index){
        this.active = index

        this.items.forEach(item => item.classList.remove('active'))
        this.items[index].classList.add('active')

        this.thumbItems.forEach(item => item.classList.remove('active'))
        this.thumbItems[index].classList.add('active')

        this.autoSlide()
    }

    next(){
        if( this.active < this.items.length - 1){
            this.activeSlide(this.active + 1)
        }else{
            this.activeSlide(0)
        }
    }

    prev(){
        if( this.active > 0){
            this.activeSlide(this.active - 1)
        }else{
            this.activeSlide(this.items.length - 1)
        }
    }

    addThumbsItems(){
        this.items.forEach(item =>  this.thumb.innerHTML +=`<span></span>` )
        this.thumbItems = Array.from(this.thumb.children)
    }

    autoSlide(){
        clearTimeout(this.timeout)
        this.timeout = setTimeout(this.next, 5000)
    }

    addNavigation(){
        const nextBtn = this.slide.querySelector('.slide__nav__next')
        const prevtBtn = this.slide.querySelector('.slide__nav__prev')
        nextBtn.addEventListener('click', this.next)
        prevtBtn.addEventListener('click', this.prev)
    }

    init(){
        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
        this.items = this.slide.querySelectorAll('.slide__items > *')
        this.thumb = this.slide.querySelector('.slide__nav__thumb')
        this.addThumbsItems()
        this.addNavigation()
        this.activeSlide(0)
    }
}

new SlideStories('slide')