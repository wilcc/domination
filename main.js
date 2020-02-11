function image(id,link){
    const target = document.querySelector('#' + id);
    // target.src = link;
    target.src = `${link}`;
    
    // const source = document.querySelector()
    
}

image('image-1','https://cdn.vox-cdn.com/thumbor/6tuMUPxwQb3qREUej971MoBl_8E=/0x0:600x350/1820x1213/filters:focal(252x127:348x223):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63386642/A_Consensus_sm.0.jpg');
image('image-2','https://image.shutterstock.com/image-photo/holidays-halloween-concept-image-pumpkin-600w-1525007798.jpg')
image('image-3','https://image.shutterstock.com/image-photo/top-view-woman-photographer-working-600w-1398389924.jpg')


function line(){
// const toBe = document.querySelector('ul')
// const toBe = document.querySelector('ul').firstChild.text

// li.firstChild.strike()
l1.style.textDecoration = 'line-through'
}
line()

function remove(){
    const list = document.querySelector('ul')
    list.removeChild(list.lastElementChild);

}
remove()
remove()

// PART 2
function phone (img){
    const load = document.querySelector('ul')
    load.appendChild(img)
}
// phone('hi how are you')
const newImg = document.createElement('img')
newImg.src = 'https://i.pinimg.com/236x/5d/c0/b7/5dc0b7f8497520fd9c0c0bccd740907e.jpg'
phone(newImg)

function adjust(img){
    img.height = '30'
}
adjust(newImg)

function hide(element){
    // const element = document.querySelector('element')
    element.className += 'invisible'

}
hide(newImg)
// form.className += ' invisible'
function resize(id,size){
    const loco = document.querySelector('#' + id)
    loco.style.fontSize = `${size}`
}
resize('lorem','100px');
// PART 3
function newLi(text){
    const tex = document.createElement('li')
    tex.innerText = text
    return tex
}
let test = newLi('how are you')

phone(test)

function twoAction(size,text){

    const head = document.createElement('h' + `${size}`)
    // head.style.
    head.innerText = text
    return head
}
let test2 = twoAction(3,'i dont know')
phone(test2)