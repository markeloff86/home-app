export const MODERATOR_STORAGE_NAME = 'home-moderator'

export const SERVICE_URL = 'http://89.223.30.70:8000'

export const NEWS_TYPES_LIST = [
    {
        value: 'info',
        label: 'Инфо',
    },
    {
        value: 'accident',
        label: 'Авария',
    },
    {
        value: 'alert',
        label: 'Предупреждение',
    },
    {
        value: 'report',
        label: 'Отчёт',
    },
    {
        value: 'advert',
        label: 'Объявление',
    },
]

export const NEWS_BUILDING_SELECT_ITEMS = {
    all: 'all',
    some: 'some',
}

export const NEWS_BUILDING_MENU_ITEMS_ID = {
    home: 'home',
    apartments: 'apartments',
    porches: 'porches',
    floors: 'floors',
    pipes: 'pipes',
}

export const NEWS_BUILDING_MENU_ITEMS = [
    {
        id: NEWS_BUILDING_MENU_ITEMS_ID.home,
        label: 'На весь дом',
    },
    {
        id: NEWS_BUILDING_MENU_ITEMS_ID.apartments,
        label: 'Квартиры',
    },
    {
        id: NEWS_BUILDING_MENU_ITEMS_ID.porches,
        label: 'Подъезды',
    },
    {
        id: NEWS_BUILDING_MENU_ITEMS_ID.floors,
        label: 'Этажи',
    },
    {
        id: NEWS_BUILDING_MENU_ITEMS_ID.pipes,
        label: 'Стояки',
    },
]