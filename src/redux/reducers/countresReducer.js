import React from 'react';

const initialState = [
	{
		name: 'Island',
		cardImg:
			'https://images.pexels.com/photos/831056/pexels-photo-831056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		cardImgDescribe: 'Исландия страна льдов и океана',
		mapOfCounty: (
			<iframe
				title={new Date().getMilliseconds()}
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7011216.232477233!2d-28.179117449263412!3d64.59444444560536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d22b52a3eb6043%3A0x6f8a0434e5c1459a!2z0JjRgdC70LDQvdC00LjRjw!5e0!3m2!1sru!2sby!4v1599321688554!5m2!1sru!2sby'
				aria-hidden='false'
			></iframe>
		),

		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1200px-Flag_of_Iceland.svg.png',
		sities: [
			{
				name: 'Рейкявик',
				attractions: [
					{
						nameAttractions: 'Хадльгримскиркья',
						describeAttraction:
							'Хадльгримскиркья — лютеранская церковь в Рейкьявике, столице Исландии. Это здание — четвёртое по высоте здание в Исландии, после длинноволновой радиомачты Хеллисандур, Эйларского длинноволнового радиопередатчика и Смараторгской башни. Церковь названа в честь поэта и духовного лидера Хадльгримюра Пьетурссона, автора книги «Passion hymns».',
						imgAttractions:
							'https://i.pinimg.com/originals/11/63/2e/11632e73f205293b70058e4b2fd2648f.jpg',
						mapOfModal: (
							<iframe
								title={new Date().getMilliseconds()}
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1740.1269483631702!2d-21.928737983728595!3d64.14202288359316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d674cca0432db5%3A0xf7af28c4489daaef!2z0KXQsNGC0LvRjNCz0YDQuNC80YHQutC40YDQutGM0Y8!5e0!3m2!1sru!2sby!4v1599321762867!5m2!1sru!2sby'
								aria-hidden='false'
							></iframe>
						),
						modal: [
							{
								describeSity:
									'Мощное, донельзя футуристическое и грубо протыкающее небосвод здание лютеранской церкви Хадльгримскиркья органичнее бы смотрелось в сериале «Вавилон-5», нежели в центре одной из столиц Старого Света. Немудрено, что у большей части ортодоксально настроенных туристов такой внешний вид храма вызывает как минимум недоумение, а то и культурный шок. Тем интереснее узнать дату постройку Хадльгримскиркья. Удивительно, но этот собор — вовсе не образец ультра-современного искусства, ему не 5 и даже не 10 лет. Эскиз храма был разработан аж в 1937 г. гениальным и, без сомнения, смелым архитектором Гудйоуном Самуэльсоном. Однако возведение церкви затянулось на 38 лет: строительные работы начались в победном 1945, а вот закончились лишь в 1986.',
								imgDescribeSity:
									'https://cdn.pixabay.com/photo/2019/09/17/12/01/hallgrimskirkja-4483332_960_720.jpg',
							},
							{
								describeSity:
									'Мягко говоря необычное по архитектуре здание видно практически из любой точки Рейкьявика, более того, это одновременно и самая большая церковь, и четвертое по высоте здание в стране. Увенчанная 73-метровой башней с массивными «крыльями», которые словно базальтовые колонны попирают твердь земную, Хадльгримскиркья производит фантастическое впечатление. Кажется, будто стоишь у инопланетного корабля или перенесся лет так на 50 в будущее, где живут суровые люди-гиганты.',
								imgDescribeSity:
									'https://cdn.pixabay.com/photo/2016/08/17/19/32/reykjavik-1601314_960_720.jpg',
							},
							{
								describeSity:
									'Всем любителям органной музыки рекомендуем в обязательном порядке побывать на концерте в Хадльгримскиркья, подробное расписание можно посмотреть на сайте церкви hallgrimskirkja.is. Здесь, кстати, помимо музыкальных концертов, периодически проводятся светские мероприятия — вплоть до спектаклей. Оно и понятно: храм вмещает 1200 человек, это одна из крупнейших культурных площадок города.',
								imgDescribeSity:
									'https://cdn.pixabay.com/photo/2016/08/13/18/08/reykjavik-1591254_960_720.jpg',
							},
						],
						accordion: [
							'https://cdn.pixabay.com/photo/2019/08/28/13/26/iceland-4436790_960_720.jpg',
							'https://cdn.pixabay.com/photo/2016/08/17/19/27/reykjavik-1601304_960_720.jpg',
							'https://cdn.pixabay.com/photo/2016/09/27/15/05/reykjavik-1698578_960_720.jpg',
							'https://cdn.pixabay.com/photo/2016/04/03/22/55/hallgrimskirkja-1305850_960_720.jpg',
							'https://cdn.pixabay.com/photo/2016/08/13/18/08/reykjavik-1591254_960_720.jpg',
							'https://cdn.pixabay.com/photo/2017/05/09/15/44/reykjavik-2298592_960_720.jpg',
						],
					}, // Хадльгримскиркья

					{
						nameAttractions: 'Перлан',
						describeAttraction:
							'Перлан (исл. Perlan — «жемчужина») — городская котельная, здание с голубой полусферической крышей-куполом',
						imgAttractions:
							'https://static.esosedi.org/fiber/194555/fit/900x600/perlan.png',

						mapOfModal: (
							<iframe
								title={new Date().getMilliseconds()}
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1740.929642039279!2d-21.921239383729144!3d64.12921258358739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d60b4cb9a4739d%3A0x720effd6596f3f29!2z0J_QtdGA0LvQsNC9!5e0!3m2!1sru!2sby!4v1600072079466!5m2!1sru!2sby'
								aria-hidden='false'
							></iframe>
						),
						modal: [
							{
								describeSity:
									'нутри расположен искусственный гейзер, который фонтанирует с промежутками в несколько минут. Общая высота здания 25, 7 метров. Несмотря на необычный внешний вид, это всего лишь городская котельная, однако дополнительно оборудованная внутри. Когда-то в резервуарах хранилась горячая вода для обогрева города, всего в 6 цистернах помещалось 4 млн. тонн воды. Сегодня резервуары переоборудованы под купол с рестораном.',
								imgDescribeSity:
									'https://vikatravel.ru/wp-content/uploads/2018/03/2222.jpg',
							},
							{
								describeSity:
									'С южной стороны холм спускается прямо к фьорду с бухтой, именно сюда сбрасываются излишки воды из котельной. Посреди бухты из песка просматривается нечто, похожее на огромную кастрюлю, куда избытки воды и выливаются, поэтому вода во время отлива в бухте очень теплая, это хорошо ощущается. Желающие могут прийти на городской пляж и сами попробовать окунуться.Название холма произошло от названия самого здания, Перлан переводится как жемчуг, внешне оно напоминает ромашку, каждый лепесток которой представляет собой резервуар с горячей водой. Особенность сооружения в том, что вода становится горячей благодаря подогреву термальными водами, над месторождениями которых и было построено это чудо-здание.',
								imgDescribeSity:
									'https://ru.oddviser.com/photo/place/1600/308.jpg',
							},
							{
								describeSity:
									'Первый этаж здания Перлан занимает зимний сад, представляющий собой выставочное пространство общей площадью порядка 10 тысяч куб. м. Тут проводятся концерты, ярмарки и выставки. Четвертый этаж здания занимает смотровая башня, где находятся панорамные телескопы, по одному в каждом из 6 углов. Над башней возвышается купол, а в куполе работает ресторан с вращающимся полом и коктейль-бар. За 2 часа эта часть сооружения делает полный оборот вокруг оси. В ночное время здесь особенно красиво, благодаря подсветке купола из тысячи маленьких огней.Часть здания Перлан занимают магазины, среди которых есть продовольственный, рождественский и сувенирный, все они находятся также на 4 этаже здания. Один из бывших резервуаров занимает Музей Саги, который представляет коллекцию забавных восковых фигур, рассказывающих о жизни и культуре народа страны.',
								imgDescribeSity:
									'https://lh3.googleusercontent.com/proxy/Nkita88X4vUHQgW-JlPZ6opSrDuYLCK0R533_DbFQrULlQzZWVOpad3Kfkd_cD2y1srsR04DBUZezfzHBrS5ZilKHrprWsuvKKMn54bK7VToZiO2zsVo',
							},
						],
						accordion: [
							'https://wikiway.com/upload/hl-photo/15b/ff1/perlan_31.jpg',
							'https://tripplanet.ru/wp-content/uploads/europe/iceland/reykjavik/perlan.jpg',
							'https://img.pac.ru/landmarks/363734/big/B974D1F27F0001016F042CCCBBBA644D.jpg',
							'https://needguide.ru/Europe/Iceland/Reykjavik/Perlan/img_2.jpg',
							'https://www.tourprom.ru/site_media/images/poiphoto/perlan_interjer_1.jpg',
							'https://lh3.googleusercontent.com/proxy/Nkita88X4vUHQgW-JlPZ6opSrDuYLCK0R533_DbFQrULlQzZWVOpad3Kfkd_cD2y1srsR04DBUZezfzHBrS5ZilKHrprWsuvKKMn54bK7VToZiO2zsVo',
							'https://static.esosedi.org/fiber/194556/fit/1400x1000/perlan.png',
						],
					}, // Перлан

					{
						nameAttractions: 'Харпа',
						describeAttraction:
							'«Харпа» — концертный зал и конференц-центр в Рейкьявике.',
						imgAttractions:
							'https://cdn.pixabay.com/photo/2019/10/03/20/17/harpa-4524297_960_720.jpg',

						mapOfModal: (
							<iframe
								title={new Date().getMilliseconds()}
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1739.6022026819523!2d-21.934648984055443!3d64.15039662254047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d674d3023a19c7%3A0xdbbf050da40f5d28!2zSGFycGFuLCAxMDEgUmV5a2phdsOtaywg0JjRgdC70LDQvdC00LjRjw!5e0!3m2!1sru!2sby!4v1599321868282!5m2!1sru!2sby'
								aria-hidden='false'
							></iframe>
						),
						modal: [
							{
								describeSity:
									'Концертный зал "Harpa" открыл свои двери для посетителей в мае 2011 года. Именно там проходят концерты и репетиции исландского симфонического оркестра и исландской оперы. Здание построено по проекту художника Olafur Eliasson в сотрудничестве с датской компанией Henning Larsen Architects. Строительство здания обошлось в 150 млн. долларов. Ночью это чудо архитектуры переливается отсветами неоновых ламп, подсвечивающих стеклянные стены здания.',
								imgDescribeSity:
									'https://vse-v-pohod.ru/wp-content/uploads/2019/06/harpa_concert_hall_reykjavik_iceland.jpg',
							},
							{
								describeSity:
									'В основу проекта легла простая геометрия линий в двух и в трех плоскостях. Внешние стены здания представляют собой стеклянные панели в стальных рамках. Некоторые панели из цветного стекла - свето-желтых и светло-голубых тонов. Стеклянная стена днем тоже переливается в отсветах солнца. Стеклянные стены здания напоминают базальтовые колонны, которыми так знаменита Исландия.',
								imgDescribeSity:
									'https://lh5.googleusercontent.com/-gkLLGFcHMgc/UivzJQHzhII/AAAAAAAAS14/6T4niaH1Yfo/s900/IMG_5349.jpg',
							},
							{
								describeSity:
									'Харпа - перовое в Исландии здание, которое построили специально для музыкальных концертов. Считается, что там необыкновенно хорошая акустика. В Харпе - 4 зала, самый большой расчитан на 1800 зрителей. Недалеко от здания находится ещё одна достопримечательность - скульптура Sólfar ("Солнечный вояжер" или "Солнечный корабль") исландского скульптора по имени Jón Gunnar Árnason (1931 - 1989). Эта скульптура - корабль мечты, ода солнцу, в которой таятся мечты о прогрессе и свободе. В 1986 год городские власти объявили конкурс скульптур к двухсотлетию Рейкьявика, и "Солнечный корабль" его выиграл. Скульптуру установили на набережной в 1990 году.',
								imgDescribeSity: 'https://i.archi.ru/i/650/101822.jpg',
							},
						],
						accordion: [
							'https://avatars.mds.yandex.net/get-zen_doc/95163/pub_5a8825aa00b3dd6ce18234b0_5a9530568139ba9d2e859049/scale_1200',
							'https://s2.best-wallpaper.net/wallpaper/1680x1050/1807/Reykjavik-Harpa-Iceland-concert-hall_1680x1050.jpg',
							'https://oboinastol.net/katalog_kartinok/tom02/057/skachat_oboi_800x480.jpg',
							'https://nyc3.digitaloceanspaces.com/ur-media2/photos/images/000/085/040/153cfc0bb6f4f1a4ff60e0117578029d9a43ba93_big.jpg?1396858375',
							'https://topgid.net/uploads/posts/2020-05/5eb803fba2bde-7982-harpan.jpeg',
							'https://img.account.travel/xeIPag8qPphy3z_mBa50wwSr8q1nc0YfSwEAsfVP0kQ/resize:fill:0:370:0/gravity:ce/dpr:1/aHR0cHM6Ly9hc3NldHMuYXRsYXNvYnNjdXJhLmNvbS9tZWRpYS9XMXNpWmlJc0luVndiRzloWkhNdmNHeGhZMlZmYVcxaFoyVnpMekJtT0RnM1lUQXhMVEZsWWpJdE5HSmtZaTFoWVdZNExUSmtPR1EzTmpsaVpUQXhPV0ptTVdJd1pqWTFNV0V6WVRNMVpUY3hNbDg0TVY5U1pYbHJhbUYyYVdzdVNsQkhJbDBzV3lKd0lpd2lkR2gxYldJaUxDSXhNakF3ZUQ0aVhTeGJJbkFpTENKamIyNTJaWEowSWl3aUxYRjFZV3hwZEhrZ09ERWdMV0YxZEc4dGIzSnBaVzUwSWwxZC84MV9SZXlramF2aWsuSlBH.jpg',
							'https://topgid.net/uploads/posts/2020-05/5eb80400e941f-7982-harpan.jpeg',
						],
					}, // Харпа

					{
						nameAttractions: 'Солнечный странник',
						describeAttraction:
							'Солнечный странник - памятник, который символизирует надежду на новую жизнь, мечту о далеких странах и неизведанных горизонтах, стремление к свободе.',
						imgAttractions:
							'https://cs3.livemaster.ru/zhurnalfoto/3/d/c/140715133033.jpg',

						mapOfModal: (
							<iframe
								title={new Date().getMilliseconds()}
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1739.775542383398!2d-21.92447328372838!3d64.1476305835957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd87b3a7b999ca6a8!2sSun%20Voyager!5e0!3m2!1sru!2sby!4v1600072686859!5m2!1sru!2sby'
								aria-hidden='false'
							></iframe>
						),
						modal: [
							{
								describeSity:
									'«Солнечный странник» или «солнечный путешественник» — именно так на русский язык переводится одна из самых незамысловатых, простых и оттого гениальных скульптур в мире. Созданный в 1990 г. по эскизам талантливого исландского художника Йона Гуннара Арнасона, Sun Voyager был установлен на набережной Рейкьявика в честь крайне знаменательной для жителей страны даты. Именно в этом году отмечали 200-летие столицы Исландии, и именно этой романтичной скульптурой украсили «юбиляра». Увы, автор памятника не дожил до этого, определенно, важного события в его жизни. Йон Гуннар болел лейкемией, и даже эскиз «Вояжера» рисовал уже тяжело больным и скончался ровно за год до открытия памятника. Так что Sun Voyager стал не только одним из последних его творений, но и, безусловно, самым известным.',
								imgDescribeSity:
									'https://pp.userapi.com/c849028/v849028716/cca00/v5rkcam34zs.jpg',
							},
							{
								describeSity:
									'Что же олицетворяет собой стальная громадина, расположенная у моря близ того самого дома Хёвди, где в свое время останавливались и Марлен Дитрих, и гениальный Черчилль, и была окончена, кстати, холодная война? С первого взгляда кажется, будто это дань памяти и уважения героическому прошлому страны, рыжебородым сынам Исландии — мужественным викингам. Ведь Sun Voyager удивительно напоминает остов корабля этих славных воинов. Однако это заблуждение. Автор утверждал, что его «солнечный странник», так напоминающий по виду корабль, это символ стремления к мечте, это надежда на новые открытия, неизведанные земли, неразгаданные тайны. Это бесконечный бег за горизонт в поисках немыслимого и оттого ужасно интересного.',
								imgDescribeSity:
									'https://lh3.googleusercontent.com/-lLlj3d8EIdw/V4ybWY2pg9I/AAAAAAAAS_M/j3Umq3M8p2oR5L0KKo6lxv9CDZ59jCdCQCCo/s1024/IMG_7247f2.jpg',
							},
							{
								describeSity:
									'Стоит ли говорить, что столь романтичная фигура считается одним из самых популярных мест у туристов и, куда же без них, влюбленных парочек? К слову, размеры у этой махины нешуточные — добрые 4 м в длину и 3 м в высоту.',
								imgDescribeSity:
									'https://topgid.net/uploads/posts/2020-05/1589129560_skulptura-solnechnyj-strannik1.jpg',
							},
						],
						accordion: [
							'https://img5.goodfon.ru/wallpaper/big/f/32/islandiia-skulptura-reikiavik-solnechnyi-strannik-ion-gunnar.jpg',
							'https://cdn22.img.ria.ru/images/156147/22/1561472270_594:0:2641:2047_1920x0_80_0_0_a684f4b43d7e3b75f6eaf7d7c3ecee4c.jpg',
							'https://topgid.net/uploads/posts/2020-05/1589129827_skulptura-solnechnyj-strannik5.jpg',
							'https://media-cdn.tripadvisor.com/media/photo-s/16/9c/a9/00/this-sculpture-is-quite.jpg',
							'https://m.bwreisen.de/dynamic/photos/2279_35_reykjavik.jpg',
							'https://11journeys.files.wordpress.com/2017/05/4.jpg?w=1040',
							'https://vln2ykabww2byyypvkvwe8xi0suvyezz.cdn-freehost.com.ua/wp-content/uploads/2017/01/Sun_voyager2-1024x768.jpg',
						],
					}, // Солнечный странник
					{
						nameAttractions: 'Фаллологический музей',
						describeAttraction:
							'Исландский музей фаллосов — уникальный музей в Рейкьявике, посвященный исключительно изучению пенисов млекопитающих.',
						imgAttractions:
							'https://farm6.staticflickr.com/5762/21841040156_71e573cd8b_b.jpg',

						mapOfModal: (
							<iframe
								title={new Date().getMilliseconds()}
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1739.7250895013628!2d-21.937720083728344!3d64.148435683596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48cd42159e4b2c3b%3A0x4dae8a9fbb2fe4a0!2z0KTQsNC70LvQvtC70L7Qs9C40YfQtdGB0LrQuNC5INC80YPQt9C10Lk!5e0!3m2!1sru!2sby!4v1600074929462!5m2!1sru!2sby'
								aria-hidden='false'
							></iframe>
						),
						modal: [
							{
								describeSity:
									'Музей был основан в 1997 году вышедшим на пенсию учителем Сигурдуром Хъяртарссоном. Интерес к членам у него проснулся еще в детстве, после того как ему подарили хлыст из члена быка. С тех пор он собирал органы всех исландских млекопитающих.Самый большой экземпляр в коллекции - член синего кита. Его размеры составляют 170 см и 70 кг – причем это только головка. Весь орган охватывает длину около 5 метров и весит 350-450 кг. Местные жители даже прозвали его «настоящий Моби Дик» («Дик» по английски «член»). Самый маленький экземпляр в коллекции - половой органа хомяка (2 мм). Рассмотреть его можно только при помощи увеличительного стекла.',
								imgDescribeSity:
									'https://info-maniac.com/wp-content/uploads/2019/07/170502175906-phallus-museum.jpg',
							},
							{
								describeSity:
									'Всего Исландский фаллологический музей в Рейкьявике насчитывает 280 членов (pun intended) от 93 видов животных. 55 пенисов добыли у китов, 36 у тюленей, и еще 118 – у наземных млекопитающих. В коллекции также есть член хульдуфоулка (скрытого жителя или эльфа). Член, очевидно, не менее скрытный, чем его владелец. С этим экземляром есть некоторые споры - поскольку эльфы невидимы - как можно увидеть его орган? Однако Сигурдур утверждает, что член вполне себе присутствует, и более того - это один из самых любимых экземпляров в его коллекции.',
								imgDescribeSity:
									'https://avatars.mds.yandex.net/get-zen_doc/197791/pub_5b38f1aa7aa92600aa96e08b_5b38f2527d663500a99b9cd7/scale_600',
							},
							{
								describeSity:
									'Сначала коллекция располагалась в офисе Сигурдура в колледже, где он преподавал. Когда учитель вышел на пенсию, то более в шутку, чем всерьез решил публично выставить свою коллекцию в Рейкьявике. Какого же было его удивление, когда муниципалитет пожертвовал ему 200 тысяч исландских крон на организацию музея. Буквально через пару лет музей уже привлекал 5000 человек в год, из них 4000 – из за границы. Тем не менее денег не хватало, и в 2003 году Сигурдур решил  продать музей. Он также предложил его в подарок городу Рейкьявик. Однако ни то, ни другое не осуществилось, и бывший учитель перевез коллекцию в Хусавик. Музей расположили в бывшем здании ресторана, и отметили вход гигантским деревянным членом и каменным фаллосом. Жители Хусавика скептически отнеслись к новому образованию в их городе, однако в итоге решили, что ничего порнографического в музее нет, так что почему бы и нет)',
								imgDescribeSity:
									'https://travellan.ru/upload/News%20of%20Travel/The%20Icelandic%20Phallological%20Museum_900x657.jpg',
							},
						],
						accordion: [
							'https://www.jazztour.ru/blog/wp-content/uploads/Hi%C3%B0-%C3%ADslenzka-re%C3%B0asafn.jpg',
							'https://upload.wikimedia.org/wikipedia/commons/3/33/Husavik_Phallusmuseum.jpg',
							'https://webplus.info/images/wpi.images/art_meta_345.jpg',
							'https://storage.yvision.kz/images/user/jackara/Y6O0ufKenIw3awpI90sK0c4WOeEshF.jpg',
							'https://s1.travelask.ru/system/images/files/000/299/622/wysiwyg/meguro_parasitological_museum_06.jpg?1496829163',
							'https://storage.yvision.kz/images/user/jackara/FonSbD1cK8YNvR7NNZ8RfjT0ev78i8.jpg',
							'https://wiki-turizm.ru/public/images/52/b2ap3_thumbnail_16_20130804-170559_1.jpg',
						],
					}, // Фаллологический музей
				],
			},
		],
	}, //island
];

export const countresReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
