import { phoneFormat } from '@/js/utils/numbers.format';
import { LAST_DAY, MONTH, YEAR } from '@/js/utils/date';
// Название сайта по умолчанию
export const SITE_NAME = 'Автоцентр АЛЬФА';
// Юр лицо
export const LEGAL_ENTITY = '';
// ИНН
export const LEGAL_INN = '6311077173';
// Город
export const LEGAL_CITY = 'г. Самара';
// где? в Городе
export const LEGAL_CITY_WHERE = 'Самаре';
// Описание сайта по умолчанию
export const SITE_DESCR = '';
// Телефон по умолчанию
export const PHONE = '+7 (846) 979-74-40';
// Бренд
export const BRAND = '';
// Конечное время для таймера
//string 2025-12-31T23:59:59+04:00
export const TIMER = { title: 'До конца акции осталось',subtitle: '', endtime: `${YEAR}-${MONTH}-${LAST_DAY}T23:59:59+04:00`, btnName: 'Зафиксировать цену', show: false };
// Объект для бегущей строки
export const MARQUEE = { title: 'Тотальная распродажа до', dateTo: `${LAST_DAY}.${MONTH}.${YEAR}`, count: [1,2,3,4,5,6,7,8], show: false };
// Ссылка яндекс-виджета
export const LINK_WIDGET = 'https://yandex.ru/map-widget/v1/-/';
// Ссылка организации для виджета
export const LINK_WIDGET_ORGNIZATION = '';
// Ссылки под хедером
import modelsData from '@/data/models.json';
const models = modelsData.filter(model => model.show);
export const LINKS_MENU = [
	// {url: 'cars/', name: 'Авто в наличии'},
	// {url: 'catalog/', name: 'Каталог'},
	// {url: 'used_cars/', name: 'Авто с пробегом'},
	// { 
	// 	url: 'models/', 
	// 	name: 'Модели',
	// 	children: models.map(model => ( { url: `models/${model.id}/`, name: `${model?.mark_id} ${model.name.toUpperCase()}` } ) )
	// },
	// {url: 'trade-in/', name: 'Оценка автомобиля'},
	{
		url: 'remont/',
		name: 'Сервисный центр',
		children: [
			{
				url: 'remont/jetour/',
				name: 'Ремонт Jetour'
			},
			{
				url: 'remont/soueast/',
				name: 'Ремонт Soueast'
			},
			{
				url: 'remont/livan/',
				name: 'Ремонт Livan'
			},
			{
				url: 'remont/baic/',
				name: 'Ремонт Baic'
			},
			{
				url: 'remont/kaiyi/',
				name: 'Ремонт Kaiyi'
			},
			{
				url: 'remont/hyundai/',
				name: 'Ремонт Hyundai'
			},
			{
				url: 'remont/kia/',
				name: 'Ремонт Kia'
			},
			{
				url: 'remont/nissan/',
				name: 'Ремонт Nissan'
			},
			{
				url: 'remont/renault/',
				name: 'Ремонт Renault'
			},
			{
				url: 'remont/niva/',
				name: 'Ремонт Niva Chevrolet'
			},
			{
				url: 'remont/opel/',
				name: 'Ремонт Opel'
			},
			{
				url: 'remont/chevrolet/',
				name: 'Ремонт Chevrolet'
			},
			{
				url: 'remont/cadillac/',
				name: 'Ремонт Cadillac'
			},
			{
				url: 'remont/hummer/',
				name: 'Ремонт Hummer'
			},
			{
				url: 'remont/to/',
				name: 'Техническое обслуживание'
			}
		]
	},
	{
		url: 'services/',
		name: 'Услуги',
		children: [
			{
				url: 'services/trade-in/',
				name: 'TRADE-IN'
			},
			{
				url: 'services/auto_loans/',
				name: 'Автокредитование'
			},
			{
				url: 'services/insurance/',
				name: 'Страхование'
			},
			{
				url: 'services/uuu/',
				name: 'Удаленное урегулирование убытков'
			}
		]
	},
	{
		url: 'autoservice/',
		name: 'Сервис и запчасти',
		children: [
			{
				url: 'autoservice/individuals/postwarranty_service/',
				name: 'Постгарантийный сервис'
			},
			{
				url: 'autoservice/individuals/mechanical_repairs/',
				name: 'Механический ремонт'
			},
			{
				url: 'autoservice/individuals/body_repair/',
				name: 'Кузовной ремонт'
			},
			{
				url: 'autoservice/spare_parts/',
				name: 'Запчасти'
			},
			{
				url: 'autoservice/washing/',
				name: 'Мойка'
			},
			{
				url: 'autoservice/trunks/',
				name: 'Шиномонтаж'
			},
			{
				url: 'autoservice/acdelco/',
				name: 'Запасные части ACDelco'
			}
		]
	},
	{url: 'actions/', name: 'Акции'},
	{
		url: 'about/',
		name: 'О компании',
		children: [
			{
				url: 'about/contacts/',
				name: 'Контактная информация'
			},
			{
				url: 'about/our_history/',
				name: 'Наша история'
			},
			{
				url: 'about/benefits/',
				name: 'Преимущества'
			},
			{
				url: 'about/vacancies/',
				name: 'Вакансии'
			},
			{
				url: 'about/news/',
				name: 'Новости'
			},
			{
				url: 'about/blog/',
				name: 'Блог'
			},
		]
	},
	{
		url: 'corporate_clients/',
		name: 'Корпоративным клиентам',
		children: [
			{
				url: 'corporate_clients/services_for_legal_entities/',
				name: 'Сервис для юридических лиц'
			},
			{
				url: 'corporate_clients/our_partners/',
				name: 'Наши партнеры'
			},
			{
				url: 'corporate_clients/certificates/',
				name: 'Сертификаты и свидетельства'
			},
		]
	},
];
// Коллекции
export const COLLECTIONS = [
	{name: 'special-offers', title: 'Спецпредложения'},
	{name: 'news', title: 'Новости'},
	{name: 'services', title: 'Услуги'},
	{name: 'remont', title: 'Сервисный центр'},
	{name: 'autoservice', title: 'Сервис и запчасти'},
	{name: 'about', title: 'О компании'},
	{name: 'corporateClients', title: 'Корпоративным клиентам'},
	{name: 'actions', title: 'Акции'}
];
// Текстовая строка над хедером
export const HEADER_TOP_LINE = '';
// Текст согласия в формах
export const AGREE_LABEL = '<span>Я согласен на</span><a href="/privacy-policy" class="underline transition-all hover:no-underline" target="_blank">обработку персональных данных</a>';
// Текст информации в футере
import salonsData from '@/data/salons.json';
const salons = salonsData.filter(salon => !salon.type || salon.type.includes('footer_info'));
const phones = PHONE ? [`<a class="whitespace-nowrap" href="tel:${phoneFormat(PHONE)}">${PHONE}</a>`] : salons.map((salon) => { return `<span>${salon.name}</span> <a class="whitespace-nowrap" href="tel:${phoneFormat(salon.phone)}">${salon.phone}</a>` });

export const FOOTER_INFO = '<sup>*</sup> Вся представленная на сайте информация, касающаяся автомобилей и сервисного обслуживания, носит информационный характер и не является публичной офертой, определяемой положениями ст. 437 ГК РФ. Все цены, указанные на данном сайте, носят информационный характер. Для получения подробной информации просьба обращаться к менеджерам отдела продаж по номеру телефона '+phones.join(', ')+'. Опубликованная на данном сайте информация может быть изменена в любое время без предварительного уведомления.';
export const REVIEWS_LIMIT = 6;