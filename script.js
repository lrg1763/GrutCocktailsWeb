// Данные о коктейлях с путями к изображениям и составом
const cocktails = [
    {
        name: "АПЕРОЛЬ ШПРИНЦ",
        image: "images/1.jpg",
        composition: "Aperol, Просекко, содовая вода, апельсин",
        preloadedImage: null
    },
    {
        name: "МАРТИНИ ПОРНСТАР",
        image: "images/2.jpg",
        composition: "Водка, ликер персика, кокосовый сироп, лимонный сок",
        preloadedImage: null
    },
    {
        name: "МАРТИНИ РОЯЛЕ", 
        image: "images/3.jpg",
        composition: "Водка, малиновый ликер, лимонный сок, сахарный сироп",
        preloadedImage: null
    },
    {
        name: "МАТИЛЬДА",
        image: "images/4.jpg",
        composition: "Джин, ликер из черной смородины, лимонный сок, имбирный эль",
        preloadedImage: null
    },
    {
        name: "КИР РОЯЛЬ",
        image: "images/5.jpg",
        composition: "Шампанское, ликер из черной смородины",
        preloadedImage: null
    },
    {
        name: "БРАМБЛ",
        image: "images/6.jpg",
        composition: "Джин, лимонный сок, сахарный сироп, ликер из ежевики",
        preloadedImage: null
    },
    {
        name: "КЛОВЕР КЛАБ",
        image: "images/7.jpg",
        composition: "Водка, ликер апельсина, клюквенный сок, лайм",
        preloadedImage: null
    },
    {
        name: "НЕГРОНИ",
        image: "images/8.jpg",
        composition: "Джин, красный вермут, кампари, апельсин",
        preloadedImage: null
    },
    {
        name: "МАЛИНОВЫЙ НЕГРОНИ",
        image: "images/9.jpg",
        composition: "Джин, красный вермут, кампари, малиновый сироп",
        preloadedImage: null
    },
    {
        name: "ЯБЛОЧНЫЙ ТИНИ",
        image: "images/10.jpg",
        composition: "Водка, яблочный ликер, лимонный сок, тоник",
        preloadedImage: null
    },
    {
        name: "ГРЮТ МУЛ",
        image: "images/11.jpg",
        composition: "Водка, имбирное пиво, лайм, мята",
        preloadedImage: null
    },
    {
        name: "ЛИМОННЫЙ ПИРОГ",
        image: "images/12.jpg",
        composition: "Водка, лимончелло, лимонный сок, сливки, бисквитная крошка",
        preloadedImage: null
    },
    {
        name: "МАРГАРИТА",
        image: "images/13.jpg",
        composition: "Текила, ликер апельсина, лаймовый сок",
        preloadedImage: null
    },
    {
        name: "САНДЕНС",
        image: "images/14.jpg",
        composition: "Водка, ликер маракуйи, ананасовый сок, гренадин",
        preloadedImage: null
    },
    {
        name: "ВИСКИ САУЭР",
        image: "images/15.jpg",
        composition: "Виски, лимонный сок, сахарный сироп, яичный белок",
        preloadedImage: null
    },
    {
        name: "ОЛД ФЭШН",
        image: "images/16.jpg",
        composition: "Виски, сахар, биттер, апельсин, вишня",
        preloadedImage: null
    },
    {
        name: "БУЛЬВАРДЬЕ",
        image: "images/17.jpg",
        composition: "Бурбон, красный вермут, кампари",
        preloadedImage: null
    },
    {
        name: "ДАЙКИРИ",
        image: "images/18.jpg",
        composition: "Ром, лаймовый сок, сахарный сироп",
        preloadedImage: null
    },
    {
        name: "КО-ПАНГАН",
        image: "images/19.jpg",
        composition: "Ром, кокосовый ликер, ананасовый сок",
        preloadedImage: null
    },
    {
        name: "МАЙ ТАЙ",
        image: "images/20.jpg",
        composition: "Ром, ликер апельсина, миндальный сироп, лайм",
        preloadedImage: null
    },
    {
        name: "МОХИТО",
        image: "images/21.jpg",
        composition: "Ром, лайм, мята, сахар, содовая вода",
        preloadedImage: null
    },
    {
        name: "ЛОНГ АЙЛЕНД",
        image: "images/22.jpg",
        composition: "Водка, джин, ром, текила, ликер апельсина, кола, лимон",
        preloadedImage: null
    }
];

let currentCocktailIndex = 0;
let imagesPreloaded = false;

// Элементы модального окна
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const compositionContent = document.getElementById('compositionContent');
const modalClose = document.getElementById('modalClose');
const compositionBtn = document.getElementById('compositionBtn');

// Функция для предзагрузки изображений
function preloadImages() {
    console.log('Начинаем предзагрузку изображений...');
    
    let loadedCount = 0;
    const totalCount = cocktails.length;
    
    // Функция для создания индикатора загрузки
    function showLoadingProgress() {
        const cocktailImage = document.getElementById('cocktailImage');
        cocktailImage.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: #666; font-size: 16px; background: #1a1a1a; border-radius: 8px; font-family: 'Martian Mono', monospace;">
                <div style="margin-bottom: 10px;">Загрузка изображений...</div>
                <div style="font-size: 14px; color: #999;">${loadedCount}/${totalCount}</div>
            </div>
        `;
    }
    
    // Показываем индикатор загрузки сразу
    showLoadingProgress();
    
    // Предзагружаем все изображения
    const preloadPromises = cocktails.map((cocktail, index) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = cocktail.image;
            img.alt = cocktail.name;
            
            img.onload = function() {
                loadedCount++;
                cocktail.preloadedImage = img;
                console.log(`Загружено: ${cocktail.name} (${loadedCount}/${totalCount})`);
                showLoadingProgress();
                resolve();
            };
            
            img.onerror = function() {
                loadedCount++;
                console.error(`Ошибка загрузки: ${cocktail.image}`);
                cocktail.preloadedImage = null;
                showLoadingProgress();
                resolve();
            };
        });
    });
    
    // Когда все изображения загружены
    return Promise.all(preloadPromises).then(() => {
        imagesPreloaded = true;
        console.log('Все изображения предзагружены!');
        updateDisplay(); // Обновляем отображение после загрузки
    });
}

// Функция для обновления отображения
function updateDisplay() {
    // Обновляем счетчик
    document.getElementById('currentNumber').textContent = currentCocktailIndex + 1;
    document.getElementById('totalNumber').textContent = cocktails.length;
    
    // Обновляем изображение
    const cocktailImage = document.getElementById('cocktailImage');
    const currentCocktail = cocktails[currentCocktailIndex];
    
    cocktailImage.innerHTML = '';
    
    if (imagesPreloaded && currentCocktail.preloadedImage) {
        // Используем предзагруженное изображение
        const img = currentCocktail.preloadedImage.cloneNode();
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';
        img.style.borderRadius = '8px';
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
        img.style.borderRadius = '8px';
        img.style.backgroundColor = '#000000';
        
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
    
    // Предзагружаем следующее и предыдущее изображения для плавного перехода
    preloadAdjacentImages();
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
    // Сначала показываем первый коктейль без предзагрузки
    updateDisplay();
    
    // Начинаем предзагрузку изображений в фоне
    preloadImages();
    
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