function randomNumber(min, max) {
         return Math.floor(Math.random() * (max - min) + min); //метод подсчёта случайного числа в диапазоне
}
describe('Тестирование главной гугла', function () {
   
   it('1.Смена аватара тренера', function () {
        cy.visit('https://pokemonbattle.me');                                                //зайти на сайт 
        cy.get(':nth-child(1) > .auth__input').type('kozyavin.volodimir@yandex.ru');         //вводим правильный логин
        cy.get('#password').type('Fantango86!');                                             //вводим правильный пароль
        cy.get('.auth__button').click();                                                     //клик по кнопке "Войти"
        cy.get('.header__btns > [href="/shop"]').click();                                    //входим в магазин аватаров

        
        cy.get('.shop__list > li').not('.shop__item feature-empty').children('.shop__button').eq(randomNumber(0,11)).click();

        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');  //вводим номер карты 
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1224');                                    //вводим срок действия
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');                   //вводим CVV
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('GERMAN DOLNIKOV');               //вводим имя пользователя карты
        cy.get('.pay-btn').click(); 
        cy.get('#cardnumber').type('56456');                                                          //вводим код пуша или смс 
        cy.get('.payment__submit-button').click();
        cy.get('.payment__adv').click(); 
       
    })

})
