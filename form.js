function fastfood() {
    const fastFoodItems = [
        {
            image: "./images/fast-food-buffalo-wild-wings.jpg",
            name: "Buffalo Wild Wings"
        },
        {
            image: "./images/fast-food-tacos-el-norte.jpg",
            name: "Tacos El Norte"
        },
        {
            image: "./images/fast-food-wendy's.jpg",
            name: "Wendy's"
        },
        {
            image: "./images/fast-food-mcdonald's.jpg",
            name: "McDonald's"
        },
        {
            image: "./images/fast-food-burger-king.jpg",
            name: "Burger King"
        },
        {
            image: "./images/fast-food-panda-express.jpg",
            name: "Panda Express"
        },
        {
            image: "./images/fast-food-jersey-mike's-subs.jpg",
            name: "Jersey Mike's Subs"
        },
        {
            image: "./images/fast-food-tender-shack.jpg",
            name: "Tender Shack"
        },
        {
            image: "./images/fast-food-it's-just-wings.jpg",
            name: "It's Just Wings"
        },
        {
            image: "./images/fast-food-mod-pizza.jpg",
            name: "MOD Pizza"
        },
        {
            image: "./images/fast-food-steak-'n-shake.jpg",
            name: "Steak N' Shake"
        },
        {
            image: "./images/fast-food-jimmy-john's-sandwiches.jpg",
            name: "Jimmy John's Sandwiches"
        }
    ];

    let fastFoodHtml = '';
    for (let i = 1; i <= fastFoodItems.length; i += 1) {
        fastFoodHtml += `
            <p>
                <figure>
                    <img id="restaurant-selection-page-row-1-image-${i}" src="${fastFoodItems[i - 1].image}">
                    <figcaption class="restaurant-selection-page-row-1-image-captions-format" id="restaurant-selection-page-row-1-image-1-caption">
                        ${fastFoodItems[i - 1].name}
                    </figcaption>
                </figure>
            </p>
        `;
    }

    document.querySelector('.restaurant-selection-page-row-1-format').innerHTML = fastFoodHtml;
    document.getElementById("restaurant-selection-page-row-1-header").innerHTML = "Fast Food";
    

    var row2header = document.getElementById("restaurant-selection-page-row-2-header");
    row2header.parentNode.removeChild(row2header);
    var row2images = document.getElementById("restaurant-selection-page-row-2");
    row2images.parentNode.removeChild(row2images);

    var row3header = document.getElementById("restaurant-selection-page-row-3-header");
    row3header.parentNode.removeChild(row3header);
    var row3images = document.getElementById("restaurant-selection-page-row-3");
    row3images.parentNode.removeChild(row3images);

    var row4header = document.getElementById("restaurant-selection-page-row-4-header");
    row4header.parentNode.removeChild(row4header);
    var row4images = document.getElementById("restaurant-selection-page-row-4");
    row4images.parentNode.removeChild(row4images);
}

function disablefirstbutton() {
    document.getElementById("firstbutton").disabled = true;
    document.getElementById("secondbutton").disabled = false;
}

function disablesecondbutton() {
    document.getElementById("secondbutton").disabled = true;
    document.getElementById("firstbutton").disabled = false;
}

function button1active() {
    changeColor ('yellow');
}

function changeColor(color) {
    document.button1active.style.background = color;
}
function comingsoonmsg(){
    window.alert("Coming Soon");
}