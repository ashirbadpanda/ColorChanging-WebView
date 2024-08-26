let h1 = document.querySelector("h1")
let p1 = document.querySelector("p1")


if (window.innerWidth < 1024) {
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=1024');
}

function violet(){
    h1.style.backgroundColor="violet"
    
}

function indigo(){
    h1.style.backgroundColor="indigo"
}

function blue(){
    h1.style.backgroundColor="blue"
}

function green(){
    h1.style.backgroundColor="green"
}

function yellow(){
    h1.style.backgroundColor="yellow"
}

function red(){
    h1.style.backgroundColor="red"
}