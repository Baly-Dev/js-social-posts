// Milestone 1
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const postContainer = document.querySelector('.posts-list')

// milestone 2
posts.forEach((e, i) => {

    // post creation
    let post = document.createElement('div')
    post.classList.add('post')

    // post header
    let postHeader = document.createElement('div')
    post.classList.add('post__header')

    postHeader.innerHTML = `<div class="post-meta">                    
                                <div class="post-meta__icon">
                                    <img class="profile-pic" src="${e.author.image}" alt="Phil Mangione">                    
                                </div>
                                <div class="post-meta__data">
                                    <div class="post-meta__author">${e.author.name}</div>
                                    <div class="post-meta__time">4 mesi fa</div>
                                </div>                    
                            </div>`

    // post body
    let postBody = document.createElement('div')

    postBody.innerHTML = `<div class="post__text">${e.content}</div>
                            <div class="post__image">
                                <img src="${e.media}" alt="">
                            </div>
    `

    // post footer
    let postFooter = document.createElement('div')
    postFooter.classList.add('post_footer')

    postFooter.innerHTML =`<div class="likes js-likes">
                                <div class="likes__cta">
                                    <a class="like-button  js-like-button" href="#" data-postid="${i}">
                                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                        <span class="like-button__label">Mi Piace</span>
                                    </a>
                                </div>
                                <div class="likes__counter">
                                    Piace a <b id="like-counter-${i}" class="js-likes-counter">80</b> persone
                                </div>
                            </div>
    `

    // append elemnts to DOM
    postContainer.append(post)
    post.append(postHeader, postBody, postFooter)

    
})


// milestone 3
const btnLike = document.querySelectorAll('.like-button')
const likeCounter = document.querySelectorAll('.js-likes-counter')
const likedPosts = []

btnLike.forEach((e, i) => {
    let clickCheck = false

    e.addEventListener('click', (event) => {

        event.preventDefault()

        let likeValue = parseInt(likeCounter[i].innerHTML)
        if (clickCheck == false){
            likeValue++
            clickCheck = true
        }

        likeCounter[i].innerHTML = likeValue
        e.classList.add('like-button--liked')
    })
})
