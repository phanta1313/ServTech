function categoryBtn1(){
    $('#category1').toggleClass('hide');
}

function categoryBtn2(){
    $('#category2').toggleClass('hide');
}


function categoryBtn3(){
    $('#category3').toggleClass('hide');
}

function filter1(){
    $('#filter1').toggleClass('hide');
}

function filter2(){
    $('#filter2').toggleClass('hide');
}

function filter3(){
    $('#filter3').toggleClass('hide');
}

function openBasket(){
    let basket_win = document.getElementById('basket-win')
    let all_except_basket = document.querySelector('main')

    basket_win_result = (basket_win.style.display == 'flex') ? basket_win.style.display = 'none' : 
    basket_win.style.display = 'flex';

    basket_win = basket_win_result

    all_except_basket.style.display = 'none'

}

function goBack(){
    document.getElementById('basket-win').style.display = 'none';
    document.querySelector('main').style.display = 'block'
}

category1 = {

}





