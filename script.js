// Данные о коктейлях с путями к изображениям и составом
const cocktails = [
    {
        name: "АПЕРОЛЬ ШПРИЦ",
        image: "images/1.jpg",
        composition: "Апероль 50 мл, просекко 75 мл, содовая 10 мл. Украшение: долька апельсина.",
        volume: "145 мл",
        preloadedImage: null
    },
    {
        name: "МАРТИНИ ПОРНСТАР",
        image: "images/2.jpg",
        composition: "Водка 60 мл, пюре маракуйи 40 мл, ванильный сироп 20 мл, белок 30 мл, лимонный фреш 20 мл, просекко 60 мл. Украшение: маракуйя.",
        volume: "170 мл",
        preloadedImage: null
    },
    {
        name: "МАРТИНИ РОЯЛЕ", 
        image: "images/3.jpg",
        composition: "Белый вермут 80 мл, просекко 80 мл, лимонный фреш 10 мл. Украшение: лайм, мята.",
        volume: "170 мл",
        preloadedImage: null
    },
    {
        name: "МАТИЛЬДА",
        image: "images/4.jpg",
        composition: "Пюре маракуйи 10 мл, фруктоза 20 мл, белое вино 80 мл, просекко 80 мл, яблоко 25 г, клубника 20 г. Украшение: маракуйя, мята.",
        volume: "190 мл",
        preloadedImage: null
    },
    {
        name: "КИР РОЯЛЬ",
        image: "images/5.jpg",
        composition: "Ликер крем ле кассис 40 мл, просекко 100 мл. Украшение: смородина.",
        volume: "140 мл",
        preloadedImage: null
    },
    {
        name: "БРАМБЛ",
        image: "images/6.jpg",
        composition: "Джин 60 мл, ликер крем де мюр 15 мл, лимонный фреш 30 мл, фруктоза 20 мл. Украшение: мята, ежевика.",
        volume: "125 мл",
        preloadedImage: null
    },
    {
        name: "КЛОВЕР КЛАБ",
        image: "images/7.jpg",
        composition: "Джин 50 мл, фруктоза 25 мл, лимонный фреш 30 мл, белок 40 мл, малина 16 г. Украшение: малина.",
        volume: "125 мл",
        preloadedImage: null
    },
    {
        name: "НЕГРОНИ",
        image: "images/8.jpg",
        composition: "Джин 30 мл, биттер кампари 30 мл, красный вермут 30 мл. Украшение: цедра апельсина.",
        volume: "90 мл",
        preloadedImage: null
    },
    {
        name: "МАЛИНОВЫЙ НЕГРОНИ",
        image: "images/9.jpg",
        composition: "Джин 30 мл, кампари 30 мл, красный вермут 30 мл. Украшение: цедра апельсина.",
        volume: "90 мл",
        preloadedImage: null
    },
    {
        name: "ЯБЛОЧНЫЙ ТИНИ",
        image: "images/10.jpg",
        composition: "Водка 60 мл, яблоко 30 г, лимонный фреш 30 мл, фруктоза 20 мл, яблочный сироп 10 мл, яблочный сок 20 мл. Украшение: слайсы яблока.",
        volume: "150 мл",
        preloadedImage: null
    },
    {
        name: "ГРЮТ МУЛ",
        image: "images/11.jpg",
        composition: "Водка 60 мл, лимонный фреш 30 мл, имбирный фреш 20 мл, мед 20 мл, биттер ангостура, имбирный эль 50 мл. Украшение: лайм, мята.",
        volume: "190 мл",
        preloadedImage: null
    },
    {
        name: "ЛИМОННЫЙ ПИРОГ",
        image: "images/12.jpg",
        composition: "Яичный ликер адвокат 30 мл, лимончелло 30 мл, лимонный фреш 30 мл, ванильный сироп 20 мл. Украшение: корица.",
        volume: "140 мл",
        preloadedImage: null
    },
    {
        name: "МАРГАРИТА",
        image: "images/13.jpg",
        composition: "Текила 60 мл, ликер трипл сек 30 мл, лимонный фреш 30 мл, фруктоза 10 мл. Украшение: лайм.",
        volume: "125 мл",
        preloadedImage: null
    },
    {
        name: "САНДЕНС",
        image: "images/14.jpg",
        composition: "Виски 50 мл, пюре малины 20 мл, пюре маракуйи 15 мл, лимонный фреш 25 мл, сироп корица 30 мл. Украшение: малина, корица.",
        volume: "140 мл",
        preloadedImage: null
    },
    {
        name: "ВИСКИ САУЭР",
        image: "images/15.jpg",
        composition: "Виски 50 мл, лимонный фреш 25 мл, фруктоза 20 мл, белок 40 мл. Украшение: цедра апельсина.",
        volume: "120 мл",
        preloadedImage: null
    },
    {
        name: "ОЛД ФЭШН",
        image: "images/16.jpg",
        composition: "Виски 60 мл, биттер ангостура, фруктоза 5 мл. Украшение: цедра апельсина.",
        volume: "80 мл",
        preloadedImage: null
    },
    {
        name: "БУЛЬВАРДЬЕ",
        image: "images/17.jpg",
        composition: "Виски 30 мл, красный вермут 30 мл, биттер кампари 30 мл. Украшение: цедра апельсина.",
        volume: "90 мл",
        preloadedImage: null
    },
    {
        name: "ДАЙКИРИ",
        image: "images/18.jpg",
        composition: "Светлый ром 50 мл, лимонный фреш 30 мл, фруктоза 20 мл. Украшение: лайм.",
        volume: "100 мл",
        preloadedImage: null
    },
    {
        name: "КО-ПАНГАН",
        image: "images/19.jpg",
        composition: "Ром 50 мл, пюре маракуйи 20 мл, лимонный фреш 25 мл, апельсиновый фреш 40 мл, имбирный фреш 15 мл, мед 15 мл, сироп корица 15 мл, биттер ангостура. Украшение: бадьян, корица, апельсин, мята.",
        volume: "180 мл",
        preloadedImage: null
    },
    {
        name: "МАЙ ТАЙ",
        image: "images/20.jpg",
        composition: "Светлый ром 30 мл, тёмный ром 30 мл, ликер триплсек 15 мл, миндальный сироп 15 мл, лимонный фреш 30 мл, фруктоза 5 мл. Украшение: лайм, апельсин, мята, корица.",
        volume: "125 мл",
        preloadedImage: null
    },
    {
        name: "МОХИТО",
        image: "images/21.jpg",
        composition: "Светлый ром 50 мл, лайм 0,5 шт, мята, фруктоза, содовая. Украшение: мята, лайм.",
        volume: "125 мл",
        preloadedImage: null
    },
    {
        name: "ЛОНГ АЙЛЕНД",
        image: "images/22.jpg",
        composition: "Водка 15 мл, джин 15 мл, светлый ром 15 мл, текила 15 мл, ликер трипл сек 15 мл, лимонный фреш 15 мл, кола. Украшение: долька лимона.",
        volume: "125 мл",
        preloadedImage: null
    }
];

let currentCocktailIndex = 0;
let imagesPreloaded = false;
let isAnimating = false; // Флаг для предотвращения одновременных анимаций

// Элементы модального окна
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const compositionContent = document.getElementById('compositionContent');
const modalClose = document.getElementById('modalClose');
const compositionBtn = document.getElementById('compositionBtn');

// Функция для предзагрузки изображений
function preloadImages() {
    let loadedCount = 0;
    const totalCount = cocktails.length;
    
    // Функция для создания индикатора загрузки
    function showLoadingProgress() {
        const cocktailImage = document.getElementById('cocktailImage');
        cocktailImage.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: #666; font-size: 16px; background: #1a1a1a; border-radius: 0; font-family: 'Martian Mono', monospace;">
                <div style="margin-bottom: 10px;">Загрузка изображений...</div>
                <div style="font-size: 14px; color: #999;">${loadedCount}/${totalCount}</div>
            </div>
        `;
    }
    
    showLoadingProgress();
    
    // Предзагружаем все изображения
    const preloadPromises = cocktails.map((cocktail) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = cocktail.image;
            img.alt = cocktail.name;
            
            img.onload = function() {
                loadedCount++;
                cocktail.preloadedImage = img;
                showLoadingProgress();
                resolve();
            };
            
            img.onerror = function() {
                loadedCount++;
                cocktail.preloadedImage = null;
                showLoadingProgress();
                resolve();
            };
        });
    });
    
    return Promise.all(preloadPromises).then(() => {
        imagesPreloaded = true;
        updateDisplay();
    });
}

// Вспомогательная функция для обновления содержимого изображения
function updateImageContent() {
    const cocktailImage = document.getElementById('cocktailImage');
    const currentCocktail = cocktails[currentCocktailIndex];
    
    cocktailImage.innerHTML = '';
    
    if (imagesPreloaded && currentCocktail.preloadedImage) {
        // Используем предзагруженное изображение
        const img = currentCocktail.preloadedImage.cloneNode();
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';
        img.style.borderRadius = '0';
        img.style.backgroundColor = '#000000';
        cocktailImage.appendChild(img);
    } else {
        // Если предзагрузка еще не завершена, загружаем обычным способом
        const img = document.createElement('img');
        img.src = currentCocktail.image;
        img.alt = currentCocktail.name;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';
        img.style.borderRadius = '0';
        img.style.backgroundColor = '#000000';
        
        img.onerror = function() {
            cocktailImage.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #666; font-size: 16px; background: #1a1a1a; border-radius: 0; font-family: 'Martian Mono', monospace;">
                    Ошибка: ${currentCocktail.name}
                </div>
            `;
        };
        
        cocktailImage.appendChild(img);
    }
}

// Функция для обновления отображения с анимацией
function updateDisplay(direction = null) {
    // Если анимация уже выполняется, игнорируем запрос
    if (isAnimating && direction !== null) {
        return;
    }
    
    // Обновляем счетчик
    const currentNumber = document.getElementById('currentNumber');
    const totalNumber = document.getElementById('totalNumber');
    
    currentNumber.textContent = currentCocktailIndex + 1;
    totalNumber.textContent = cocktails.length;
    
    // Получаем элементы для анимации
    const cocktailImage = document.getElementById('cocktailImage');
    const cocktailCard = document.getElementById('cocktailCard');
    
    // Удаляем все предыдущие классы анимации
    cocktailCard.classList.remove('slide-next-enter', 'slide-next-exit', 
                                 'slide-prev-enter', 'slide-prev-exit', 'fade-in');
    
    // Если это первая загрузка или направление не указано - используем fade анимацию
    if (!direction) {
        cocktailCard.classList.add('fade-in');
        updateImageContent();
        preloadAdjacentImages();
        return;
    }
    
    // Если переходим вперед или назад
    if (direction === 'next' || direction === 'prev') {
        isAnimating = true;
        
        // Добавляем класс для анимации выхода
        const exitClass = direction === 'next' ? 'slide-next-exit' : 'slide-prev-exit';
        const enterClass = direction === 'next' ? 'slide-next-enter' : 'slide-prev-enter';
        
        cocktailCard.classList.add(exitClass);
        
        // Задержка для анимации выхода перед сменой изображения
        setTimeout(() => {
            // Обновляем изображение
            updateImageContent();
            
            // Убираем класс выхода и добавляем класс входа
            cocktailCard.classList.remove(exitClass);
            cocktailCard.classList.add(enterClass);
            
            // Предзагружаем соседние изображения
            preloadAdjacentImages();
            
            // Убираем класс анимации после завершения
            setTimeout(() => {
                cocktailCard.classList.remove(enterClass);
                isAnimating = false;
            }, 400);
        }, 50);
    }
}

// Функция для предзагрузки соседних изображений
function preloadAdjacentImages() {
    const nextIndex = (currentCocktailIndex + 1) % cocktails.length;
    const prevIndex = (currentCocktailIndex - 1 + cocktails.length) % cocktails.length;
    
    // Предзагружаем следующее изображение
    if (!cocktails[nextIndex].preloadedImage) {
        const nextImg = new Image();
        nextImg.src = cocktails[nextIndex].image;
        nextImg.onload = function() {
            cocktails[nextIndex].preloadedImage = nextImg;
        };
    }
    
    // Предзагружаем предыдущее изображение
    if (!cocktails[prevIndex].preloadedImage) {
        const prevImg = new Image();
        prevImg.src = cocktails[prevIndex].image;
        prevImg.onload = function() {
            cocktails[prevIndex].preloadedImage = prevImg;
        };
    }
}

// Функция для отображения состава коктейля
function showComposition() {
    const currentCocktail = cocktails[currentCocktailIndex];
    
    // Обновляем заголовок модального окна
    modalTitle.textContent = currentCocktail.name;
    
    // Разделяем состав на ингредиенты и украшение
    const compositionText = currentCocktail.composition;
    const parts = compositionText.split('. ');
    
    let ingredients = [];
    let decoration = '';
    
    if (parts.length > 1 && parts[parts.length - 1].toLowerCase().includes('украшение')) {
        decoration = parts[parts.length - 1].replace(/^[Уу]крашение:\s*/i, '').replace(/\.$/, '');
        const ingredientsText = parts.slice(0, -1).join('. ');
        ingredients = ingredientsText.split(',').map(ing => ing.trim()).filter(ing => ing);
    } else {
        // Если нет "Украшение", разделяем по запятым
        ingredients = compositionText.split(',').map(ing => ing.trim().replace(/\.$/, '')).filter(ing => ing);
    }
    
    // Функция для капитализации первой буквы слова
    function capitalizeFirstLetter(str) {
        if (!str) return str;
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    
    // Формируем HTML с каждым ингредиентом в отдельной строке с точкой перед словом
    let ingredientsHTML = '';
    ingredients.forEach((ingredient) => {
        if (ingredient) {
            const capitalizedIngredient = capitalizeFirstLetter(ingredient.trim());
            ingredientsHTML += `<p style="margin-bottom: 12px; color: #ffffff;">• ${capitalizedIngredient}</p>`;
        }
    });
    
    // Добавляем украшение, если есть
    let decorationHTML = '';
    if (decoration) {
        const capitalizedDecoration = capitalizeFirstLetter(decoration.trim());
        decorationHTML = `<p style="margin-top: 16px; margin-bottom: 12px; color: #ffffff; font-weight: 500;">• Украшение: ${capitalizedDecoration}</p>`;
    }
    
    // Обновляем содержимое состава с реальным объемом
    compositionContent.innerHTML = `
        <div style="text-align: left;">
            ${ingredientsHTML}
            ${decorationHTML}
            <p style="margin-top: 20px; color: #999; font-size: 14px; text-align: center;">Объем: ${currentCocktail.volume}</p>
        </div>
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
    if (isAnimating) return;
    
    currentCocktailIndex = (currentCocktailIndex + 1) % cocktails.length;
    updateDisplay('next');
}

// Функция для перехода к предыдущему коктейлю
function prevCocktail() {
    if (isAnimating) return;
    
    currentCocktailIndex = (currentCocktailIndex - 1 + cocktails.length) % cocktails.length;
    updateDisplay('prev');
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
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Сначала показываем первый коктейль с fade анимацией
    updateDisplay();
    
    // Начинаем предзагрузку изображений в фоне
    preloadImages();
    
    // Добавляем обработчики событий для кнопок
    prevBtn.addEventListener('click', prevCocktail);
    nextBtn.addEventListener('click', nextCocktail);
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
    let touchStartTime = 0;
    let isSwiping = false;
    
    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartTime = Date.now();
        isSwiping = true;
    });
    
    document.addEventListener('touchmove', e => {
        if (!isSwiping) return;
        
        const touchCurrentX = e.changedTouches[0].screenX;
        const diffX = touchCurrentX - touchStartX;
        
        // Можно добавить визуальную обратную связь при свайпе
        if (Math.abs(diffX) > 10) {
            e.preventDefault(); // Предотвращаем скролл страницы при горизонтальном свайпе
        }
    });
    
    document.addEventListener('touchend', e => {
        if (!isSwiping) return;
        
        touchEndX = e.changedTouches[0].screenX;
        const touchEndTime = Date.now();
        const diffX = touchEndX - touchStartX;
        const diffTime = touchEndTime - touchStartTime;
        
        // Определяем был ли это быстрый свайп
        const isFastSwipe = diffTime < 300;
        const swipeThreshold = isFastSwipe ? 30 : 50;
        
        if (diffX < -swipeThreshold) {
            // Свайп влево - следующий коктейль
            nextCocktail();
        } else if (diffX > swipeThreshold) {
            // Свайп вправо - предыдущий коктейль
            prevCocktail();
        }
        
        isSwiping = false;
    });
}

// Запускаем инициализацию при загрузке DOM
document.addEventListener('DOMContentLoaded', init);