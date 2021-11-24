function fastfood() {
    
    document.getElementById("restaurant-selection-page-row-1-header").innerHTML = "Fast Food";
    
    document.getElementById("restaurant-selection-page-row-1-image-1").src="./images/fast-food-buffalo-wild-wings.jpg";
    document.getElementById("restaurant-selection-page-row-1-image-1-caption").innerHTML ="Buffalo Wild Wings";
    
    document.getElementById("restaurant-selection-page-row-1-image-2").src="./images/fast-food-tacos-el-norte.jpg";
    document.getElementById("restaurant-selection-page-row-1-image-2-caption").innerHTML ="Tacos El Norte";

    document.getElementById("restaurant-selection-page-row-1-image-3").src="./images/fast-food-wendy's.jpg";
    document.getElementById("restaurant-selection-page-row-1-image-3-caption").innerHTML ="Wendy's";

    var row2header = document.getElementById("restaurant-selection-page-row-2-header");
    row2header.parentNode.removeChild(row2header);
    
    document.getElementById("restaurant-selection-page-row-2-image-1").src="./images/fast-food-mcdonald's.jpg";
    document.getElementById("restaurant-selection-page-row-2-image-1-caption").innerHTML ="McDonald's";
    
    document.getElementById("restaurant-selection-page-row-2-image-2").src="./images/fast-food-burger-king.jpg";
    document.getElementById("restaurant-selection-page-row-2-image-2-caption").innerHTML ="Burger King";

    document.getElementById("restaurant-selection-page-row-2-image-3").src="./images/fast-food-panda-express.jpg";
    document.getElementById("restaurant-selection-page-row-2-image-3-caption").innerHTML ="Panda Express";

    var row3header = document.getElementById("restaurant-selection-page-row-3-header");
    row3header.parentNode.removeChild(row3header);

    document.getElementById("restaurant-selection-page-row-3-image-1").src="./images/fast-food-jersey-mike's-subs.jpg";
    document.getElementById("restaurant-selection-page-row-3-image-1-caption").innerHTML ="Jersey Mike's Subs";
    
    document.getElementById("restaurant-selection-page-row-3-image-2").src="./images/fast-food-tender-shack.jpg";
    document.getElementById("restaurant-selection-page-row-3-image-2-caption").innerHTML ="Tender Shack";

    document.getElementById("restaurant-selection-page-row-3-image-3").src="./images/fast-food-it's-just-wings.jpg";
    document.getElementById("restaurant-selection-page-row-3-image-3-caption").innerHTML ="It's Just Wings";

    var row4header = document.getElementById("restaurant-selection-page-row-4-header");
    row4header.parentNode.removeChild(row4header);

    document.getElementById("restaurant-selection-page-row-4-image-1").src="./images/fast-food-mod-pizza.jpg";
    document.getElementById("restaurant-selection-page-row-4-image-1-caption").innerHTML ="MOD Pizza";
    
    document.getElementById("restaurant-selection-page-row-4-image-2").src="./images/fast-food-steak-'n-shake.jpg";
    document.getElementById("restaurant-selection-page-row-4-image-2-caption").innerHTML ="Steak N' Shake";

    document.getElementById("restaurant-selection-page-row-4-image-3").src="./images/fast-food-jimmy-john's-sandwiches.jpg";
    document.getElementById("restaurant-selection-page-row-4-image-3-caption").innerHTML ="Jimmy John's Sandwiches";
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


