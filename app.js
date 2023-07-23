$( document ).ready(ready);

window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');

    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {
            document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');

            SwitchPage(page_id);
        });
    }
}

function SwitchPage (page_id) {
    console.log(page_id);

    const current_page = document.querySelector('.pages .page.is-active');
    current_page.classList.remove('is-active');

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
    next_page.classList.add('is-active');
}

const instruments = [
    {
        "name": "KEYBOARD PIANO",
        "price": 14600,
        "image": '../images/keyboard.jpg',
        "category": 'Percussion'
    },
    {
        "name": "ACUSTIC GUITAR",
        "price": 9400,
        "image": "../images/acustic_guitar.jpg",
        "category": 'String'
    },
    {
        "name": "DRUMS",
        "price": 25300,
        "image": "../images/drums.jpg",
        "category": 'Percussion'
    },
    {
        "name": "XYLOPHONE",
        "price": 17200,
        "image": "../images/xylophone.jpg",
        "category": 'Percussion'
    },
    {
        "name": "FLUTE",
        "price": 1900,
        "image": "../images/flute.jpg",
        "category": 'Wind'
    },
    {
        "name": "KALIMBA",
        "price": 3600,
        "image": "../images/kalimba.jpg",
        "category": 'Various'
    },
    {
        "name": "VIOLIN",
        "price": 15700,
        "image": "../images/violin.jpg",
        "category": 'String'
    },
    {
        "name": "PIANO",
        "price": 44600,
        "image": "../images/piano.jpg",
        "category": 'String'
    },
    {
        "name": "ELECTRIC GUITAR",
        "price": 24300,
        "image": "../images/electric_guitar.jpg",
        "category": 'Electric Guitar'
    },
    {
        "name": "STRAT ELECTRIC GUITAR",
        "price": 34000,
        "image": "../images/electric_guitar1.jpg",
        "category": 'Electric Guitar'
    },
    {
        "name": "GIBSON ELECTRIC GUITAR",
        "price": 22560,
        "image": "../images/electric_guitar2.jpg",
        "category": 'Electric Guitar'
    },
    {
        "name": "CELLO",
        "price": 37900,
        "image": "../images/cello.jpg",
        "category": 'String'
    },
    {
        "name": "BASS GUITAR",
        "price": 24200,
        "image": "../images/bass_guitar.jpg",
        "category": 'String'
    },
    {
        "name": "SAXOPHONE",
        "price": 15230,
        "image": "../images/saxophone.jpg",
        "category": 'Wind'
    },
    {
        "name": "HARMONICA",
        "price": 4600,
        "image": "../images/harmonica.jpg",
        "category": 'Wind'
    }
]

class Custumer {
    constructor(nombre, direccion, tarjeta) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.tarjeta = tarjeta;
    }
}


const charactersListString = document.getElementsByClassName('products__container_string bd-grid');
const charactersListElectric = document.getElementsByClassName('products__container_electric bd-grid');
const charactersListPercussion = document.getElementsByClassName('products__container_percussion bd-grid');
const charactersListWind = document.getElementsByClassName('products__container_wind bd-grid');
const charactersList = document.getElementsByClassName('products__container bd-grid');

/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


const loadsProducts = async () => {
    try {
        var newData = JSON.stringify(instruments)
        let products = JSON.parse(newData);
        displayProducts(products)
    } catch (err) {
        console.log('this is the error');
    }
};

const loadsProductsString = async () => {
    try {
        var newData = JSON.stringify(instruments)
        let products = JSON.parse(newData);
        const result = products.filter( ({ category }) => category === 'String' );

        displayProductsString(result)

    } catch (err) {
        console.log('this is the error');
    }
};

const loadsProductsElectric = async () => {
    try {
        var newData = JSON.stringify(instruments)
        let products = JSON.parse(newData);
        const result = products.filter( ({ category }) => category === 'Electric Guitar' );

        displayProductsElectric(result)
    } catch (err) {
        console.log('this is the error');
    }
};

const loadsProductsPercussion = async () => {
    try {
        var newData = JSON.stringify(instruments)
        let products = JSON.parse(newData);
        const result = products.filter( ({ category }) => category === 'Percussion' );

        displayProductsPercussion(result)
    } catch (err) {
        console.log('this is the error');
    }
};

const loadsProductsWind = async () => {
    try {
        var newData = JSON.stringify(instruments)
        let products = JSON.parse(newData);
        const result = products.filter( ({ category }) => category === 'Wind' );

        displayProductsWind(result)
    } catch (err) {
        console.log('this is the error');
    }
};

const displayProducts = (products) => {
    const htmlString = products
    .map((product) => {
        return `
        <div class="products__content">
            <img src="${product.image}" alt="" class="products__img">
            <h3 class="products__title">${product.name}</h3>
            <span class="products__category">${product.category}</span>
            <span class="products__preci">$${product.price}</span>
            <a href="#" class="button products__button"><i class='bx bx-heart'></i></a>
         </div>
        `
        ;
    }).join('');
    charactersList[0].innerHTML = htmlString;
};

const displayProductsString = (products) => {
    const htmlString = products
    .map((product) => {
        return `
        <div class="products__content">
            <img src="${product.image}" alt="" class="products__img">
            <h3 class="products__title">${product.name}</h3>
            <span class="products__category">${product.category}</span>
            <span class="products__preci">$${product.price}</span>
            <a href="#" class="button products__button"><i class='bx bx-heart'></i></a>
         </div>
        `
        ;
    }).join('');
    charactersListString[0].innerHTML = htmlString;
};

const displayProductsElectric = (products) => {
    const htmlString = products
    .map((product) => {
        return `
        <div class="products__content">
            <img src="${product.image}" alt="" class="products__img">
            <h3 class="products__title">${product.name}</h3>
            <span class="products__category">${product.category}</span>
            <span class="products__preci">$${product.price}</span>
            <a href="#" class="button products__button"><i class='bx bx-heart'></i></a>
         </div>
        `
        ;
    }).join('');
    charactersListElectric[0].innerHTML = htmlString;
};

const displayProductsPercussion = (products) => {
    const htmlString = products
    .map((product) => {
        return `
        <div class="products__content">
            <img src="${product.image}" alt="" class="products__img">
            <h3 class="products__title">${product.name}</h3>
            <span class="products__category">${product.category}</span>
            <span class="products__preci">$${product.price}</span>
            <a href="#" class="button products__button"><i class='bx bx-heart'></i></a>
         </div>
        `
        ;
    }).join('');
    charactersListPercussion[0].innerHTML = htmlString;
};

const displayProductsWind = (products) => {
    const htmlString = products
    .map((product) => {
        return `
        <div class="products__content">
            <img src="${product.image}" alt="" class="products__img">
            <h3 class="products__title">${product.name}</h3>
            <span class="products__category">${product.category}</span>
            <span class="products__preci">$${product.price}</span>
            <a href="#" class="button products__button"><i class='bx bx-heart'></i></a>
         </div>
        `
        ;
    }).join('');
    charactersListWind[0].innerHTML = htmlString;
};

loadsProducts();
loadsProductsString();
loadsProductsElectric();
loadsProductsPercussion();
loadsProductsWind();

function ready() {
    let removeCartItemButtons = document.getElementsByClassName('btn-danger');
    
    for(let i=0; i < removeCartItemButtons.length; i++) {
        let button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem)
    }

    let quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for(let i=0; i < removeCartItemButtons.length; i++) {
        let input = quantityInputs[i];
        input.addEventListener('change', quantityChanged)
    }

    let addToCartButtons = document.getElementsByClassName('button products__button')
    
    for(let i=0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked)
    }

    let confirmPurchase = document.getElementById('confirm-purchase')
    confirmPurchase.addEventListener('click', function(e) {
        var owner = $('#owner');
        var cardNumber = $('#cardNumber');
        var CVV = $("#cvv");
   
        $("#exito").css('display', 'none');

        e.preventDefault();
    
        var isCardValid = $.payform.validateCardNumber(cardNumber.val());
        var isCvvValid = $.payform.validateCardCVC(CVV.val());
    
        if(owner.val().length < 5){
            alert("Wrong owner name");
        } else if (!isCardValid) {
            alert("Wrong card number");
        } else if (!isCvvValid) {
            alert("Wrong CVV");
        } else {
            owner[0].value = '';
            cardNumber[0].value = '';
            CVV[0].value = '';
            const URLGET = "https://jsonplaceholder.typicode.com/posts"
            $.post(URLGET,$("#formdata").serialize(),function(res){
                if(res){
                    alert("Envio exitoso");
                    $("#exito").delay(500).fadeIn("slow");      // Si hemos tenido éxito, hacemos aparecer el div "exito" con un efecto fadeIn lento tras un delay de 0,5 segundos.
                }
            });
        }
    })

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
}

function removeCartItem(event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    let button = event.target
    let shopItems = button.parentElement.parentElement
    let name = shopItems.getElementsByClassName('products__title')[0].innerText
    let image = shopItems.getElementsByClassName('products__img')[0].src
    let price = shopItems.getElementsByClassName('products__preci')[0].innerText.replace('$','')
    addItemToCart(name, image, price)
    event.preventDefault()
    updateCartTotal()
}

function addItemToCart(name, image, price) {
    let cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    let cartItems = document.getElementsByClassName('cart-items')[0]
    let cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (let i=0; i < cartItemNames.length; i++){
        if(cartItemNames[i].innerText == name) {
            alert('This item is already added to the cart')
            return
        }
    }
    let cartRowContents = `
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${image}" width="100" height="100">
        <span class="cart-item-title">${name}</span>
     </div>
    <span class="cart-price cart-column">$${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button">REMOVE</button>
    </div>
    `
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',quantityChanged)
}

function purchaseClicked() {
    $("#exito").css('display', 'none');
    let total = document.getElementsByClassName('cart-total-price')[0].innerText.replace('$','')
    if(total > 0){
        document.getElementById("purchase").href = "#fourth"
        payment();
    }
    let cartItems = document.getElementsByClassName('cart-items')[0];
    while(cartItems.hasChildNodes()) {
     cartItems.removeChild(cartItems.firstChild)
     }
    updateCartTotal()
}

function payment() {
    var owner = $('#owner');
    var cardNumber = $('#cardNumber');
    var cardNumberField = $('#card-number-field');
    var CVV = $("#cvv");
    var mastercard = $("#mastercard");
    var confirmButton = $('#confirm-purchase');
    var visa = $("#visa");
    var amex = $("#amex");

    // Usamos la payform library para validar los campos de pago

    cardNumber.payform('formatCardNumber');
    CVV.payform('formatCardCVC');


    cardNumber.keyup(function() {

        amex.removeClass('transparent');
        visa.removeClass('transparent');
        mastercard.removeClass('transparent');

        if ($.payform.validateCardNumber(cardNumber.val()) == false) {
            cardNumberField.addClass('has-error');
        } else {
            cardNumberField.removeClass('has-error');
            cardNumberField.addClass('has-success');
        }

        if ($.payform.parseCardType(cardNumber.val()) == 'visa') {
            mastercard.addClass('transparent');
            amex.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'amex') {
            mastercard.addClass('transparent');
            visa.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'mastercard') {
            amex.addClass('transparent');
            visa.addClass('transparent');
        }
    });
}

function confirmClicked() {

}

function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('cart-items')[0];
    let cartRows = cartItemContainer.getElementsByClassName('cart-row');
    let total = 0
    for(let i=0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('cart-price')[0];
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        let price = parseFloat(priceElement.innerText.replace('$',''))
        let quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}




