
describe('Автотесты на форму логина', function () {
   it('1.Верный логин/верный пароль', function () {
        cy.visit('https://login.qa.studio/'); 				//зайти на сайт 
        cy.get('#mail').type('german@dolnikov.ru');			//вводим правельный логин
        cy.get('#pass').type('iLoveqastudio1');				//вводим правильный пароль
        cy.get('#loginButton').click();						//клик по кнопке "Войти"
        cy.get('#message').should('be.visible') 			//видно всплывавющее окно
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //совпадение текста (проверка)
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 	 //крестик закрытия окна присутствует
    })
   it('2.Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');          				//зайти на сайт 
        cy.get('#forgotEmailButton').click();						//нажать "Забыли пароль?"
        cy.get('#forgotForm').should('be.visible')          		//окно восстановления пароля видно
        cy.get('#forgotForm').contains('Восстановите пароль');		//в окне надпись
        cy.get('#mailForgot').type('kozyavin.volodimir@yandex.ru'); //вводим почту для восстановления
        cy.get('#restoreEmailButton').click();						//клик по кнопке "Отправить код"
        cy.get('#message').should('be.visible');					//видно всплывавющее окно
        cy.get('#message').contains('Успешно отправили пароль на e-mail');	//надпись соответствует
    })

   it('3.Верный логин/НЕ верный пароль', function () {
        cy.visit('https://login.qa.studio/'); 					//зайти на сайт 
        cy.get('#mail').type('german@dolnikov.ru');				//вводим правельный логин
        cy.get('#pass').type('_iLoveqastudio1');                //вводим НЕ верный пароль
        cy.get('#loginButton').should('be.enabled');       		//Кнопка "Войти" кликабельна
        cy.get('#loginButton').click();							//клик по кнопке "Войти"
        cy.get('#message').should('be.visible') 				//видно всплывавющее окно
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //совпадение текста (проверка)
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 	   //крестик закрытия окна присутствует
    })

   it('4.НЕ верный логин/верный пароль', function () {
        cy.visit('https://login.qa.studio/');          //зайти на сайт 
        cy.get('#mail').type('german1999@dolnikov.ru');    //ввести НЕ верный логин    
        cy.get('#pass').type('iLoveqastudio1');       	   // вводим верный пароль
        cy.get('#loginButton').should('be.enabled');       //Кнопка "Войти" кликабельна
        cy.get('#loginButton').click();				       //нажать кнопку "Войти"
        cy.get('#message').should('be.visible')            //видно всплывавющее окно
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //совпадение текста (проверка)
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');     //крестик закрытия окна присутствует
    })

   it('5.НЕ верный логин (без @)/верный пароль', function () {
        cy.visit('https://login.qa.studio/');          		//зайти на сайт 
        cy.get('#mail').type('germandolnikov.ru');    		//ввести НЕ верный логин    
        cy.get('#pass').type('iLoveqastudio1');       	    // вводим верный пароль
        cy.get('#loginButton').should('be.enabled');        //Кнопка "Войти" кликабельна
        cy.get('#loginButton').click();				        //нажать кнопку "Войти"
        cy.get('#message').should('be.visible')             //видно всплывавющее окно
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //совпадение текста (проверка)
    })

   it('6.Проверка приведения символов логина к нижнему регистру', function () {
        cy.visit('https://login.qa.studio/');          		//зайти на сайт 
        cy.get('#mail').type('GerMan@Dolnikov.ru');    		//ввести верный логин с символами верхнего и нижнего регистра   
        cy.get('#pass').type('iLoveqastudio1');       	    // вводим верный пароль
        cy.get('#loginButton').should('be.enabled');        //Кнопка "Войти" кликабельна
        cy.get('#loginButton').click();						//клик по кнопке "Войти"
        cy.get('#message').should('be.visible') 			//видно всплывавющее окно
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //совпадение текста (проверка)
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 	 //крестик закрытия окна присутствует
    })

})
