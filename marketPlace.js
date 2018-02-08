/* MarketPlace */
/* an application that gives the ability to purchase items and earn money, you can consider it a game if you want, for me it's a program I wrote just for practical purposes, and because I got bored */
/* version 1.0 */
/* features > 1) your balance decreases based on the item's price. */
/* features > 2) you'll get an error if there is no suffisant funds */
/* features > 3) you can see the full list of your virtual purchases */
$(document).ready(function() {
    var balance = {
        currentBalance: $('.balance'),
        selected: $('.balance'),
        startingBalance: $('.balance').text(5000)
    };
    var items = [$('#item-1 .details'), $('#item-2 .details'), $('#item-3 .details'), $('#item-4 .details')];
    
    var buy1 = $('.buy_1');
    var buy2 = $('.buy_2');
    var buy3 = $('.buy_3');
    var buy4 = $('.buy_4');
    
    var item_1 = {
        name: "Calculator",
        price: 50,
        selected: $('#item-1')
    };
    
    var item_2 = {
        name: "Iphone",
        price: 500,
        selected: $('#item-2')
    };
    
    var item_3 = {
        name: "Computer",
        price: 350,
        selected: $('#item-3')
    };
    
    var item_4 = {
        name: "Playstation4",
        price: 650,
        selected: $('#item-4')
    };
    
    var purchased = $('.purchased-list');
    
    var purchased_js_version = document.querySelector('.purchased-list');
    
    var err = $('.errorMessages');
    
    // sets the behaviour when the user clicks on one of the items
    item_1.selected.click(function() {
        items[0].css('display', 'block');
        items[1].css('display', 'none');
        items[2].css('display', 'none');
        items[3].css('display', 'none');
    });
    // purchases item1
    buy1.click(function() {
        if(balance.currentBalance.text() < item_1.price) {
                err.text("Required $" + item_1.price);
            }
        else {
        balance.currentBalance.text(balance.currentBalance.text() - item_1.price);
        if(balance.currentBalance.text() == false || balance.currentBalance.text() < 0) {
            err.text("you've wasted all your money!");
            buy1.css('display', 'none');
            buy2.css('display', 'none');
            buy3.css('display', 'none');
            buy4.css('display', 'none');
            balance.currentBalance.text(0);
        }
            purchased_js_version.innerHTML += item_1.name + " " + "$" + item_1.price + "<br>";
        }
        });
    
    item_2.selected.click(function() {
        items[0].css('display', 'none')
        items[1].css('display', 'block');
        items[2].css('display', 'none');
        items[3].css('display', 'none');
    });
    // purchases item1
    buy2.click(function() {
        if(balance.currentBalance.text() < item_2.price) {
                err.text("Required $" + item_2.price);
            }
        else {
        balance.currentBalance.text(balance.currentBalance.text() - item_2.price);
        if(balance.currentBalance.text() == false || balance.currentBalance.text() < 0) {
            err.text("you've wasted all your money!");
            buy1.css('display', 'none');
            buy2.css('display', 'none');
            buy3.css('display', 'none');
            buy4.css('display', 'none');
            balance.currentBalance.text(0);
        }
            purchased_js_version.innerHTML += item_2.name + " " + "$" + item_2.price + "<br>";
        }
        });
    
    item_3.selected.click(function() {
        items[0].css('display', 'none');
        items[1].css('display', 'none');
        items[2].css('display', 'block');
        items[3].css('display', 'none');
    });
    // purchases item1
    buy3.click(function() {
        if(balance.currentBalance.text() < item_3.price) {
                err.text("Required $" + item_3.price);
            }
        else {
        balance.currentBalance.text(balance.currentBalance.text() - item_3.price);
        if(balance.currentBalance.text() == false || balance.currentBalance.text() < 0) {
            err.text("you've wasted all your money!");
            buy1.css('display', 'none');
            buy2.css('display', 'none');
            buy3.css('display', 'none');
            buy4.css('display', 'none');
            balance.currentBalance.text(0);
        }
            purchased_js_version.innerHTML += item_3.name + " " + "$" + item_3.price + "<br>";
        }
        });
    
    item_4.selected.click(function() {
        items[0].css('display', 'none');
        items[1].css('display', 'none');
        items[2].css('display', 'none');
        items[3].css('display', 'block');
    });
    // purchases item1
    buy4.click(function() {
        if(balance.currentBalance.text() < item_4.price) {
                err.text("Required $" + item_4.price);
            }
        else {
        balance.currentBalance.text(balance.currentBalance.text() - item_4.price);
        if(balance.currentBalance.text() == false || balance.currentBalance.text() < 0) {
            err.text("you've wasted all your money!");
            buy1.css('display', 'none');
            buy2.css('display', 'none');
            buy3.css('display', 'none');
            buy4.css('display', 'none');
            balance.currentBalance.text(0);
        }
            purchased_js_version.innerHTML += item_4.name + " " + "$" + item_4.price + "<br>";
        }
        });
});
