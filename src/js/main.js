// LEFT MENU NAVIGATION
const menuItems = document.querySelectorAll('.menu__link');
const subMenuList = document.querySelectorAll('.sub-menu__list');
const navigation = document.querySelector('.menu');
// LEFT MENU NAVIGATION
// MAIN MENU NAVIGATION
const mainMenuList = document.querySelector('.main-menu__list');
const mainMenuDescriptionList = document.querySelector('.main-menu__description.description');
const mainMenuDescriptionItem = document.querySelectorAll('.description__item');
const mainMenuItem = document.querySelectorAll('.main-menu__title');
// MAIN MENU NAVIGATION


// LEFT MENU NAVIGATION
navigation.addEventListener('click', event => {
    const target = event.target;

    if (target && target.classList.contains('menu__link')) {
        menuItems.forEach( (item, index) => {
            if (item == target) {
                subMenuList[index].classList.toggle('sub-menu__list--active')
            }  
            
        }) 
    }
})
// LEFT MENU NAVIGATION
// MAIN MENU TABS



function showDescriptionItem(index = 0) {
    mainMenuDescriptionItem[index].classList.add('description__item--active')
}
function cloeseDescriptionItem() {
    mainMenuDescriptionItem.forEach( item => {
        if (item.classList.contains('description__item--active')) {
            item.classList.remove('description__item--active')
        }
    })
}

console.log(mainMenuItem)

mainMenuList.addEventListener('click', event => {
    const target = event.target;
    console.log(target)
    if (target && target.classList.contains('main-menu__title')) {
        mainMenuItem.forEach( (item, index) => {
            if (item == target) {
                cloeseDescriptionItem()
                console.log(index)
                showDescriptionItem(index)
            }
        })
    }
})


showDescriptionItem()


// MAIN MENU TABS