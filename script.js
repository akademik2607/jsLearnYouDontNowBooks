'use strict';

const books = document.querySelectorAll('.book'),
      booksList = document.querySelector('.books');
console.log(books);

books[0].before(books[1]);
books[0].after(books[4]);
books[4].after(books[3]);
booksList.append(books[2]);

const body = document.querySelector('body');
body.style.background = 'url(./image/you-dont-know-js.jpg)';
console.log(body);

const book3H = books[4].querySelector('a');
book3H.innerHTML = 'Книга 3. this и Протопипы Объектов';

const adv = document.querySelector('.adv');
adv.remove();

const books2Li = books[0].querySelectorAll('li');
console.log(books2Li);
books2Li[3].after(books2Li[6]);
books2Li[4].before(books2Li[8]);
books2Li[9].after(books2Li[2]);

const books5Li = books[5].querySelectorAll('li');
books5Li[3].before(books5Li[9]);
books5Li[4].after(books5Li[2]);
books5Li[8].before(books5Li[5]);

const books6Li = books[2].querySelectorAll('li');
books6Li[8].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6');
