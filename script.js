// Данные о коктейлях с путями к изображениям и составом
const cocktails = [
    {
        name: "АПЕРОЛЬ ШПРИНЦ",
        image: "images/1.jpg",
        composition: "Aperol, Просекко, содовая вода, апельсин"
    },
    {
        name: "МАРТИНИ ПОРНСТАР",
        image: "images/2.jpg",
        composition: "Водка, ликер персика, кокосовый сироп, лимонный сок"
    },
    {
        name: "МАРТИНИ РОЯЛЕ", 
        image: "images/3.jpg",
        composition: "Водка, малиновый ликер, лимонный сок, сахарный сироп"
    },
    {
        name: "МАТИЛЬДА",
        image: "images/4.jpg",
        composition: "Джин, ликер из черной смородины, лимонный сок, имбирный эль"
    },
    {
        name: "КИР РОЯЛЬ",
        image: "images/5.jpg",
        composition: "Шампанское, ликер из черной смородины"
    },
    {
        name: "БРАМБЛ",
        image: "images/6.jpg",
        composition: "Джин, лимонный сок, сахарный сироп, ликер из ежевики"
    },
    {
        name: "КЛОВЕР КЛАБ",
        image: "images/7.jpg",
        composition: "Водка, ликер апельсина, клюквенный сок, лайм"
    },
    {
        name: "НЕГРОНИ",
        image: "images/8.jpg",
        composition: "Джин, красный вермут, кампари, апельсин"
    },
    {
        name: "МАЛИНОВЫЙ НЕГРОНИ",
        image: "images/9.jpg",
        composition: "Джин, красный вермут, кампари, малиновый сироп"
    },
    {
        name: "ЯБЛОЧНЫЙ ТИНИ",
        image: "images/10.jpg",
        composition: "Водка, яблочный ликер, лимонный сок, тоник"
    },
    {
        name: "ГРЮТ МУЛ",
        image: "images/11.jpg",
        composition: "Водка, имбирное пиво, лайм, мята"
    },
    {
        name: "ЛИМОННЫЙ ПИРОГ",
        image: "images/12.jpg",
        composition: "Водка, лимончелло, лимонный сок, сливки, бисквитная крошка"
    },
    {
        name: "МАРГАРИТА",
        image: "images/13.jpg",
        composition: "Текила, ликер апельсина, лаймовый сок"
    },
    {
        name: "САНДЕНС",
        image: "images/14.jpg",
        composition: "Водка, ликер маракуйи, ананасовый сок, гренадин"
    },
    {
        name: "ВИСКИ САУЭР",
        image: "images/15.jpg",
        composition: "Виски, лимонный сок, сахарный сироп, яичный белок"
    },
    {
        name: "ОЛД ФЭШН",
        image: "images/16.jpg",
        composition: "Виски, сахар, биттер, апельсин, вишня"
    },
    {
        name: "БУЛЬВАРДЬЕ",
        image: "images/17.jpg",
        composition: "Бурбон, красный вермут, кампари"
    },
    {
        name: "ДАЙКИРИ",
        image: "images/18.jpg",
        composition: "Ром, лаймовый сок, сахарный сироп"
    },
    {
        name: "КО-ПАНГАН",
        image: "images/19.jpg",
        composition: "Ром, кокосовый ликер, ананасовый сок"
    },
    {
        name: "МАЙ ТАЙ",
        image: "images/20.jpg",
        composition: "Ром, ликер апельсина, миндальный сироп, лайм"
    },
    {
        name: "МОХИТО",
        image: "images/21.jpg",
        composition: "Ром, лайм, мята, сахар, содовая вода"
    },
    {
        name: "ЛОНГ АЙЛЕНД",
        image: "images/22.jpg",
        composition: "Водка, джин, ром, текила, ликер апельсина, кола, лимон"
    }
];

let currentCocktailIndex = 0;

// Элементы модального окна
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const compositionContent = document.getElementById('compositionContent');
const modalClose = document.getElementById('modalClose');
const compositionBtn = document.getElementById('compositionBtn');

// Функция для обновления отображения
function updateDisplay() {
    // Обновляем счетчик
    document.getElementById('currentNumber').textContent = currentCocktailIndex + 1;
    document.getElementById('totalNumber').textContent = cocktails.length;
    
    // Обновляем изображение
    const cocktailImage = document.getElementById('cocktailImage');
    const currentCocktail = cocktails[currentCocktailIndex];
    
    // Создаем элемент img для лучшего контроля
    cocktailImage.innerHTML = '';
    const img = document.createElement('img');
    img.src = currentCocktail.image;
    img.alt = currentCocktail.name;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';
    img.style.borderRadius = '8px';
    img.style.backgroundColor = '#000000';
    
    // Добавляем обработчик ошибки загрузки
    img.onerror = function() {
        console.error('Ошибка загрузки изображения:', currentCocktail.image);
        cocktailImage.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #666; font-size: 16px; background: #1a1a1a; border-radius: 8px; font-family: 'Martian Mono', monospace;">
                Ошибка: ${currentCocktail.name}
            </div>
        `;
    };
    
    cocktailImage.appendChild(img);
}

// Функция для отображения состава коктейля
function showComposition() {
    const currentCocktail = cocktails[currentCocktailIndex];
    
    // Обновляем заголовок модального окна
    modalTitle.textContent = currentCocktail.name;
    
    // Обновляем содержимое состава
    compositionContent.innerHTML = `
        <p style="margin-bottom: 20px; font-size: 18px; color: #ffffff;">${currentCocktail.composition}</p>
        <p style="color: #999; font-size: 14px;">Объем: 145 мл</p>
    `;
    
    // Показываем модальное окно
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Функция для скрытия модального окна
function hideComposition() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Функция для скачивания текущего фото
function downloadCurrentPhoto() {
    const currentCocktail = cocktails[currentCocktailIndex];
    const link = document.createElement('a');
    link.href = currentCocktail.image;
    link.download = `cocktail_${currentCocktailIndex + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Функция для перехода к следующему коктейлю
function nextCocktail() {
    currentCocktailIndex = (currentCocktailIndex + 1) % cocktails.length;
    updateDisplay();
}

// Функция для перехода к предыдущему коктейлю
function prevCocktail() {
    currentCocktailIndex = (currentCocktailIndex - 1 + cocktails.length) % cocktails.length;
    updateDisplay();
}

// Функция для обработки клавиатуры
function handleKeyboard(e) {
    if (e.key === 'ArrowLeft') {
        prevCocktail();
    } else if (e.key === 'ArrowRight') {
        nextCocktail();
    } else if (e.key === 'Escape') {
        hideComposition();
    }
}

// Инициализация при загрузке страницы
function init() {
    updateDisplay();
    
    // Добавляем обработчики событий для кнопок
    document.getElementById('prevBtn').addEventListener('click', prevCocktail);
    document.getElementById('nextBtn').addEventListener('click', nextCocktail);
    document.getElementById('downloadBtn').addEventListener('click', downloadCurrentPhoto);
    compositionBtn.addEventListener('click', showComposition);
    modalClose.addEventListener('click', hideComposition);
    
    // Закрытие модального окна при клике на оверлей
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            hideComposition();
        }
    });
    
    // Добавляем обработчик для клавиатуры
    document.addEventListener('keydown', handleKeyboard);
    
    // Добавляем обработчик для свайпов на мобильных устройствах
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            nextCocktail();
        } else if (touchEndX > touchStartX + swipeThreshold) {
            prevCocktail();
        }
    }
}

// Запускаем инициализацию при загрузке DOM
document.addEventListener('DOMContentLoaded', init);