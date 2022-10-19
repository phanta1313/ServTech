function categoryBtn1(){
    let category1 = document.getElementById('category1');
    let filter1 = document.getElementById('filter1');

    let category1_result = (category1.style.display == 'block') ? category1.style.display = 'none' :
    category1.style.display = 'block';

    category1 = category1_result
    
    filter1.style.display = 'none'
}

function categoryBtn2(){
    let category2 = document.getElementById('category2') 
    let filter2 = document.getElementById('filter2')

    let category2_result = (category2.style.display == 'block') ? category2.style.display = 'none' :
    category2.style.display = 'block';

    category2 = category2_result
    
    filter2.style.display = 'none'
}


function categoryBtn3(){
    let category3 = document.getElementById('category3') 
    let filter3 = document.getElementById('filter3')

    let category3_result = (category3.style.display == 'block') ? category3.style.display = 'none' : 
    category3.style.display = 'block';

    category3 = category3_result
    
    filter3.style.display = 'none'
}

function filter1(){
    let filter1 = document.getElementById('filter1') 

    let filter1_result = (filter1.style.display == 'block') ? filter1.style.display = 'none' : 
    filter1.style.display = 'block';

    filter1 = filter1_result
}

function filter2(){
    let filter2 = document.getElementById('filter2') 

    let filter2_result = (filter2.style.display == 'block') ? filter2.style.display = 'none' : 
    filter2.style.display = 'block';

    filter2 = filter2_result
}

function filter3(){
    let filter3 = document.getElementById('filter3') 

    let filter3_result = (filter3.style.display == 'block') ? filter3.style.display = 'none' : 
    filter3.style.display = 'block';

    filter3 = filter3_result
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





