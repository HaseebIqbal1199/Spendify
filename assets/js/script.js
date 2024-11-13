const productContainer = document.querySelector('.products')

let ProductsName = [
    "acre-of-farmland",
    "air-jordans",
    "airpods",
    "amazon-echo",
    "apache-helicopter",
    "auto-rickshaw",
    "big-mac",
    "bike",
    "boeing-747",
    "book",
    "coca-cola-pack",
    "cruise-ship",
    "designer-handbag",
    "diamond-ring",
    "drone",
    "ferrari",
    "flip-flops",
    "ford-f-150",
    "formula-1-car",
    "gaming-console",
    "gold-bar",
    "horse",
    "hot-tub",
    "jet-ski",
    "kitten",
    "biryani",
    "m1-abrams",
    "make-a-movie",
    "mansion",
    "mcdonalds-franchise",
    "mona-lisa",
    "monster-truck",
    "movie-ticket",
    "puppy",
    "Iphone-15-Pro-Max",
    "rolex",
    "single-family-home",
    "skyscraper",
    "superbowl-ad",
    "tesla",
    "video-game",
    "yacht",
    "Google",
    "Microsoft",
    "Meta",
    "year-of-netflix"
]
let pricesInUSD = [
    "49180",            // acre-of-farmland
    "148",              // air-jordans
    "230",              // airpods
    "115",              // amazon-echo
    "20000000",         // apache-helicopter
    "983",              // auto-rickshaw
    "3.6",              // big-mac
    "49.2",             // bike
    "600000000",        // boeing-747
    "3.3",              // book
    "2",                // coca-cola-pack
    "262295000",        // cruise-ship
    "1639",             // designer-handbag
    "4918",             // diamond-ring
    "655",              // drone
    "262295",           // ferrari
    "3.3",              // flip-flops
    "49180",            // ford-f-150
    "3278000",          // formula-1-car
    "328",              // gaming-console
    "196721",           // gold-bar
    "3278",             // horse
    "16393",            // hot-tub
    "6557",             // jet-ski
    "164",              // kitten
    "1.6",              // biryani
    "226230000",        // m1-abrams
    "26229500",         // make-a-movie
    "1639344",          // mansion
    "983607",           // mcdonalds-franchise
    "1540983607",       // mona-lisa
    "98361",            // monster-truck
    "3.3",              // movie-ticket
    "230",              // puppy
    "1967",             // Iphone-15-Pro-Max
    "49180",            // rolex
    "983607",           // single-family-home
    "655738000",        // skyscraper
    "14754100",         // superbowl-ad
    "98361",            // tesla
    "32.8",             // video-game
    "4918000",          // yacht
    "163934426000",     // Google
    "147540984000",     // Microsoft
    "104918032800",     // Meta
    "110"              // year-of-netflix
];


let ProductImageUrl =
    ["./assets/img/acre-of-farmland.jpg",
        "./assets/img/air-jordans.jpg",
        "./assets/img/airpods.jpg",
        "./assets/img/amazon-echo.jpg",
        "./assets/img/apache-helicopter.jpg",
        "./assets/img/auto-rickshaw.jpg",
        "./assets/img/big-mac.jpg",
        "./assets/img/bike.jpg",
        "./assets/img/boeing-747.jpg",
        "./assets/img/book.jpg",
        "./assets/img/coca-cola-pack.jpg",
        "./assets/img/cruise-ship.jpg",
        "./assets/img/designer-handbag.jpg",
        "./assets/img/diamond-ring.jpg",
        "./assets/img/drone.jpg",
        "./assets/img/ferrari.jpg",
        "./assets/img/flip-flops.jpg",
        "./assets/img/ford-f-150.jpg",
        "./assets/img/formula-1-car.jpg",
        "./assets/img/gaming-console.jpg",
        "./assets/img/gold-bar.jpg",
        "./assets/img/horse.jpg",
        "./assets/img/hot-tub.jpg",
        "./assets/img/jet-ski.jpg",
        "./assets/img/kitten.jpg",
        "./assets/img/biryani.jpg",
        "./assets/img/m1-abrams.jpg",
        "./assets/img/make-a-movie.jpg",
        "./assets/img/mansion.jpg",
        "./assets/img/mcdonalds-franchise.jpg",
        "./assets/img/mona-lisa.jpg",
        "./assets/img/monster-truck.jpg",
        "./assets/img/movie-ticket.jpg",
        "./assets/img/puppy.jpg",
        "./assets/img/Iphone-15-Pro-Max.jpg",
        "./assets/img/rolex.jpg",
        "./assets/img/single-family-home.jpg",
        "./assets/img/skyscraper.jpg",
        "./assets/img/superbowl-ad.jpg",
        "./assets/img/tesla.jpg",
        "./assets/img/video-game.jpg",
        "./assets/img/yacht.jpg",
        "./assets/img/google.jpg",
        "./assets/img/microsoft.jpg",
        "./assets/img/meta.jpg",
        "./assets/img/year-of-netflix.jpg"
    ]

function snippet(name, url, price) {
    let productCardSnippet =
        `
                    <div class="productCard">
                        <div class="productImage">
                            <img src="${url}" alt="" srcset="">
                        </div>
                        <div class="productTitle">
                            <h2>${name}</h2>
                        </div>
                        <div class="productWorth">
                            <h3>${price}</h3>
                        </div>
                        <div class="productSubDiv">
                            <div class="sellBtn">
                                <button type="button">Sell</button>
                            </div>
                            <div class="quantity">
                                <input type="text" value="0">
                            </div>
                            <div class="buyBtn">
                                <button type="button">Buy</button>
                            </div>
                        </div>
                    </div>
    `
    return productCardSnippet
}

for (let i = 0; i < ProductsName.length; i++) {
    productContainer.innerHTML += snippet((((ProductsName[i]).charAt(0).toUpperCase()) + ProductsName[i].slice(1).replaceAll("-", " ")), ProductImageUrl[i], Number(pricesInUSD[i]).toFixed())
}


const buyBtn = document.querySelectorAll('.buyBtn button')
const sellBtn = document.querySelectorAll('.sellBtn button')
const quantity = document.querySelectorAll('.quantity input')

buyBtn.forEach((e, relQ) => {
    e.addEventListener("click", () => {
        quantity[relQ].value = (Number(quantity[relQ].value)) + 1;
        reCalculateNetWorth()
        if (Number(quantity[relQ].value) > 0) {
            sellBtn[relQ].style.background = 'linear-gradient(180deg, #f53b82, #f53b57)'
            sellBtn[relQ].style.color = '#fff'
            console.log("if block", relQ);

        } else {
            sellBtn[relQ].style.background = 'var(--_mainColor)'
            sellBtn[relQ].style.color = '#000000'
            console.log("else block", relQ);

        }
    })
});
sellBtn.forEach((e, relQ) => {
    e.addEventListener("click", () => {
        if (Number(quantity[relQ].value)) {
            quantity[relQ].value = (Number(quantity[relQ].value)) - 1
        }

        reCalculateNetWorth()

        if (Number(quantity[relQ].value) > 0) {
            sellBtn[relQ].style.background = 'linear-gradient(180deg, #f53b82, #f53b57)'
            sellBtn[relQ].style.color = '#fff'
            console.log("if block", relQ);

        } else {
            sellBtn[relQ].style.background = 'var(--_mainColor)'
            sellBtn[relQ].style.color = '#000000'
            console.log("else block", relQ);

        }
    })
});
function BillSnippet(name, quantity, cost) {
    return `
    <div class="entry">
        <p>${name}</p>
        <p>${quantity}</p>
        <p>${cost}</p>
        <p>${cost * quantity}</p>
    </div>
    `
}
const bill = document.querySelector('.bill')
const billicon = document.querySelector('.billicon')
const minimize_bill = document.querySelector('.minimize-bill')
bill.addEventListener("scroll", (dets) => {
    if (bill.style.display = "block") {
        const currentScrollHeight = dets.target.scrollTop;
        console.log(currentScrollHeight);
        bill.scrollTop = currentScrollHeight;
    }

})
let items_qty = {}
let items_name = []
let items_cost = []
const purchasedItemsContainer = document.querySelector('.purchasedItems')
billicon.addEventListener("click", () => {
    const cost = document.querySelectorAll('.productCard .productWorth h3')
    const Qty = document.querySelectorAll('.productCard .productSubDiv .quantity input')

    Qty.forEach((e, relName) => {
        if (Number(e.value)) {
            items_qty[ProductsName[relName]] = Number(e.value)
            items_name.push(ProductsName[relName])
            items_cost.push(pricesInUSD[relName])
        }
    });
    console.log("itemsqty", items_qty, "Name", items_name);
    for (let i = 0; i < items_name.length; i++) {
        purchasedItemsContainer.innerHTML += BillSnippet(items_name[i], items_qty[items_name[i]], items_cost[i])
        console.log("done");

    }
    bill.style.display = "block"

})
minimize_bill.addEventListener("click", () => {
    bill.style.display = "none"
    items_qty = {}
    items_name = []
    purchasedItemsContainer.innerHTML = `
        <div class="fieldnames">
                        <h4>Name</h4>
                        <h4>Qty</h4>
                        <h4>Cost</h4>
                        <h4>Total</h4>
                    </div>
        `
})

function Tot(x, y) {
    return x * y;
}
function reCalculateNetWorth() {
    let sum = 0;
    for (let i = 0; i < ProductsName.length; i++) {
        let tem = Tot((quantity[i].value), pricesInUSD[i])
        sum += tem;
    }

    let res = 230000000000 - sum;
    document.querySelector('.networth span').innerHTML = (res).toFixed(0)
    console.log(res);

    if (Number(document.querySelector('.networth span').innerHTML) < 0) {
        alert("Elon is now gaareeb")
        document.querySelector('.networth span').innerHTML = "????????????"
    }
}

