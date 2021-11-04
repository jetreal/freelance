import { RIGHT_BUTTON_CLICK,
        CHANGE_LANG,
        CHANGE_POINTS_PLACE,
        CHANGE_TV,
        CHANGE_POINTS_PLACE_WITH_DELAY,
        LEFT_SLIDE,
        RIGHT_SLIDE, 
        INITIAL_SLIDE_LEFT,
        INITIAL_SLIDE_RIGHT,
        REMOVE_OVERLAP_ON_REACT_TEXT,
        UNBLOCK_SLIDER,
        SHOW_SECTION1_TEXT,
        SHOW_SECTION4_TEXT,
        SHOW_SECTION5_TEXT,
        CHANGE_SECTION5_TEXT,
        SHOW_MAP,
        OFF_MAP,
        START_SHOW_SECTION5_TEXT
    } from "./Constants";


let initialState = {
    buttons: [
    { id: 1, name: 'button 1', isActiveColor: true},
    { id: 2, name: 'button 2', isActiveColor: false},
    { id: 3, name: 'button 3', isActiveColor: false},
    { id: 4, name: 'button 4', isActiveColor: false},
    { id: 5, name: 'button 5', isActiveColor: false},
    { id: 6, name: 'button 6', isActiveColor: false}
],
activeButtonNum: 1,
tvIndex: 1,
tvOn: false,
texts: [
    { id: 1, textRu: 'О нас', textEn: 'About us'},
    { id: 2, textRu: 'Как нас найти', textEn: 'How to find me'},
    { id: 3, textRu: 'Отзывы', textEn: 'Reviews'},
    { id: 4, textRu: 'Наши Преимушества', textEn: 'Our advantages'},
    { id: 5, textRu: 'Наши предложения:', textEn: 'My suggestions:'},
    { id: 6, textRu: 'Основная используемая технология:', textEn: 'The main technology used:'}
],
isLang: false,
langBtnNames: [ 'ru', 'en' ],
phoneNum: '+ 7 952 964 57 21',
headerText: [ 'Создание Cайтов', 'The Sites Creating'],
textsForFirstSection: ['We are a web studio that creates fast and beautiful sites. You will be satisfied with our work, because you get exactly what you want. The design will be developed taking into account the tasks of the site, as well as taking into account the attention of the target audience. We apply the most modern technologies that increase the performance of the site. For a higher quality service, we are in constant dialogue with the client. You will be heard, and your goals will be fulfilled, because we work for you.',
                      'Мы веб студия, которая создаёт, быстрые и красивые сайты. Вы останетесь довольны нашей работой, потому что получите именно то что хотите. Дизайн будет разработан с учётом задач сайта, а также с учётом внимания целевой аудитории. Мы применяем самые современные технологии, увеличивающие производительность сайта. Для более высокого качества сервиса, мы находимся в постоянном диалоге с клиентом. Вы будете обязательно услышаны, а ваши цели обязательно выполнены, потому что мы работаем именно для вас.'
                      ],
textsForTvset: ['',
                ''
],
section4Texts: [
    {leftTexts: ['Сool images',
                 'Dynamic animation', 
                 'The most worthy overall picture',
                 'Minimalism - nothing superfluous',
                 "Author's approach"] ,
                 
    rightTexts: ['Guaranteed results.',
                 'We work 24/7.',
                 'Acceptable prices.',
                 'Discounts for regular customers']},


    {leftTexts: ['Крутые образы',
                 'Динамичная анимация',
                 'Достойнейшая общая картина',
                 'Минимализм - ничего лишнего',
                 'Авторский подход'],
    rightTexts: ['Гарантия результата.',
                 'Работаем 24/7.',
                 'Приемлемые цены.',
                'Скидки постоянным клиентам']}
],

pointsPosition: 0, // 0 - 2 
pointsPositionWithDelay: 0, // 0 - 2
slidePosition: 'center',
sliderContent: [
    {"textRu":"Уважаю ребят, знающих своё дело.", "textEn":"I respect the guys who know their business.", "url":"images/r3.webp"},
	{"textRu":"Они сделали сайт моей мечты.","textEn": "They made the site of my dreams.", "url":"images/r4.webp"},
	{"textRu":"Серьёзно и качественно.","textEn": "Seriously and efficiently.", "url":"images/r5.webp"},
	{"textRu":"Я очень довольна результатом!", "textEn":"I am very pleased with the result!", "url":"images/r1.webp"},
	{"textRu":"Пожалуй лучшая студия в городе.", "textEn":"Perhaps the best studio in the city.", "url":"images/r2.webp"}
],
section3DownText: ['Здесь может быть ваше фото!', 'Your photo may be here!' ],
sliderContentForShow: [
    {"textRu":"", "textEn":"", "url":"images/r3.webp"},
	{"textRu":"Они сделали сайт моей мечты.", "textEn":"They made the site of my dreams.", "url":"images/r4.webp"},
	{"textRu":"", "textEn":"", "url":"images/r5.webp"}
],

sliderBgImg: "images/r4.webp",
sliderText: 'Они сделали сайт моей мечты.',
reactText: false,
isBlockedSlider: false,
isShowedSection1Text: false,
isShowedSection4Text: false,
section5Texts: [
    {id: 1, textRu: 'Создание "страниц приземления" ', textEn: '"Landing page" development'},
    {id: 2, textRu: 'Обработка фотографий', textEn: 'Photo processing'},
    {id: 3, textRu: 'Создание дизайна сайтов', textEn: 'Creating the sites design'},
    {id: 4, textRu: 'Видеомонтаж', textEn: 'Video editing'},
    {id: 5, textRu: 'Сайты визитки, фотогалереи', textEn: 'Business cards sites, photo galleries'},
    {id: 6, textRu: 'Разработка Логотипов', textEn: 'Logo Design'},
    {id: 7, textRu: 'SEO, продвижение сайтов', textEn: 'SEO, website promotion'}
    
],
isSection5TextsShowed: true,
isStartedSection5Text: false,
section5TextsIndex: 0,
isShowMap: false
}

const ButtonsReducer = (state = initialState, action) => {
    switch (true) {
        case (action.type === RIGHT_BUTTON_CLICK): {

            if (state.buttons[action.id - 1].isActiveColor === true ) {

                return state
            } 
            if (state.buttons[action.id - 1].isActiveColor !== true ) 
            {
                let copyState = {...state}
                for (let i = 0; i < copyState.buttons.length; i++) {
                    copyState.buttons[i].isActiveColor = false
                }
                copyState.buttons[action.id - 1].isActiveColor = true
                copyState.activeButtonNum = action.id
                return copyState
            }
            return {...state}
        }
        case (action.type === CHANGE_LANG) : {
            let copyState = {...state}
            // console.log(StateCopy.sliderContentForShow)
            // StateCopy.sliderContentForShow = StateCopy.sliderContent.slice(0, 3)
            copyState.isLang = !state.isLang;
                if (copyState.isLang === false) {
                    copyState.sliderText = copyState.sliderContentForShow[1].textRu
                } else {
                    copyState.sliderText = copyState.sliderContentForShow[1].textEn
                }
            return copyState
        }
        case (action.type === CHANGE_POINTS_PLACE): {
            let stateCopy = {...state}
            // stateCopy.pointsPostion = state.pointsPosition
            stateCopy.pointsPositionWithDelay = null
            stateCopy.pointsPosition++
            if (stateCopy.pointsPosition > 2) {
                stateCopy.pointsPosition = 0
            }
            return stateCopy
        }
        case (action.type === CHANGE_POINTS_PLACE_WITH_DELAY): {
            let stateCopy = {...state}
            stateCopy.pointsPositionWithDelay = stateCopy.pointsPosition
            return stateCopy
        }
        case (action.type === CHANGE_TV):{
            let StateCopy = {...state}
            
            StateCopy.tvOn = !StateCopy.tvOn
            if (StateCopy.tvOn === false) {
                StateCopy.tvIndex++
            }
            if (StateCopy.tvIndex > 3) {
                StateCopy.tvIndex = 1
            }
            return StateCopy
        }
        case (action.type === LEFT_SLIDE) : {
            let StateCopy = {...state}
            StateCopy.slidePosition = 'left'
            StateCopy.sliderBgImg = StateCopy.sliderContentForShow[2].url
            StateCopy.isBlockedSlider = true;
            return StateCopy
        }
        case (action.type === RIGHT_SLIDE) : {
            let StateCopy = {...state}
            StateCopy.slidePosition = 'right'
            StateCopy.sliderBgImg = StateCopy.sliderContentForShow[0].url
            StateCopy.isBlockedSlider = true;
            return StateCopy
        }
        case (action.type === INITIAL_SLIDE_LEFT) : {     
            let StateCopy = {...state}
            StateCopy.sliderContent = [...state.sliderContent]
            let x = StateCopy.sliderContent.shift()
            StateCopy.sliderContent.push(x)
            StateCopy.sliderContentForShow = StateCopy.sliderContent.slice(0, 3)
            if (StateCopy.isLang === false) {
                StateCopy.sliderText = StateCopy.sliderContentForShow[1].textRu
            } else {
                StateCopy.sliderText = StateCopy.sliderContentForShow[1].textEn
            }

            StateCopy.slidePosition = 'center'
            return StateCopy
        }
        case (action.type === INITIAL_SLIDE_RIGHT) : {     
            let StateCopy = {...state}
            let x = StateCopy.sliderContent.pop()
            StateCopy.sliderContent = [x, ...StateCopy.sliderContent]
            StateCopy.sliderContentForShow = StateCopy.sliderContent.slice(0, 3)
            if (StateCopy.isLang === false) {
                StateCopy.sliderText = StateCopy.sliderContentForShow[1].textRu
            } else {
                StateCopy.sliderText = StateCopy.sliderContentForShow[1].textEn
            }

            StateCopy.slidePosition = 'center'
            
            return StateCopy
        }
        case (action.type === UNBLOCK_SLIDER) : {     
            let StateCopy = {...state}
            StateCopy.isBlockedSlider = false;
            return StateCopy
        }
        case (action.type === REMOVE_OVERLAP_ON_REACT_TEXT) : {
            let StateCopy = {...state}
            if (StateCopy.activeButtonNum === 6 ) {
                StateCopy.reactText = true
                return StateCopy
            } else {
                StateCopy.reactText = false
                return state
            }
        }
        case (action.type === SHOW_SECTION1_TEXT) : {
            let copyState = {...state}
            copyState.isShowedSection1Text = true
            return copyState
        }
        case (action.type === SHOW_SECTION4_TEXT) : {
            let copyState = {...state}
            copyState.isShowedSection4Text = true
            return copyState
        }
        case (action.type === START_SHOW_SECTION5_TEXT) : {
            let copyState = {...state}
            copyState.isStartedSection5Text = true
            return copyState
        }
        case (action.type === SHOW_SECTION5_TEXT) : {
            let copyState = {...state}
            copyState.isSection5TextsShowed = false
            return copyState
        }
        case (action.type === CHANGE_SECTION5_TEXT) : {
            let copyState = {...state}
            copyState.section5TextsIndex++
            if (copyState.section5TextsIndex === copyState.section5Texts.length) {
                copyState.section5TextsIndex = 0
            }
            copyState.isSection5TextsShowed = true
            return copyState
        }
        case (action.type === SHOW_MAP) : {
            let copyState = {...state};
            copyState.isShowMap = !copyState.isShowMap
            return copyState
        }
        case (action.type === OFF_MAP) : {
            let copyState = {...state};
            copyState.isShowMap = false;
            return copyState
        }
        default:
            return {...state}
    }
}


export default ButtonsReducer