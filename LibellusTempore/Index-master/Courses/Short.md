# Программная инженерия

Программа на 1й, 2й и 3й курс.

## Основы программирования: 1 семестр 1 курса

- Абстракция, модель, алгоритм, программа, синтаксис
- Значение, идентификатор, переменная и константа, литерал, присвоение
- Типы данных, скалярные, ссылочные и структурные типы
- Оператор и выражение, блок кода, функция, цикл, условие
- Процедуры и функции, стек и куча
- Модули, компоненты, библиотеки
- Языки и парадигмы программирования, технологические стеки
- Отладка, обработка ошибок, линтеры, трансляторы и компиляторы
- Системы контроля версий и пакетные менеджеры, git, npm
- Функции первого класса, лямбды, контексты, замыкания
- Массивы, объекты, классы, прототипы
- Частичное применение и каррирование, функции высшего порядка, колбеки
- Работа со строками, шаблонами и юникодом, регулярные выражения и парсинг
- Антипаттерны процедурного программирования и общие для всех парадигм
- Консоль и командная строка
- Чеининг функций и объектов
- Рекурсия: косвенная и хвостовая, стек, выход
- Таймеры, EventEmitter, события
- Коллекции, множества, хештаблицы
- Сериализация и десериализация
- Code Review, рефакторинг: причины, цели, техники и процесс
- Композиция: pipe, compose
- Примеси: mixin, extend, Object.assign, class λ-mixin
- Прототипное программирование и наследование
- Функции-обертки, мемоизация
- Фабрики и пулы объектов

## Основы программирования: 2 семестр 1 курса

- Списки: односвязные, двусвязные, циклические, развернутые
- Стек, очередь, дэк, графые структуры
- Записи (struct)
- Проекции и отображения наборов данных
- Неизменяемые структуры данных (immutable)
- Работа с файлами
- Генераторы и асинхронные генераторы
- Итераторы и асинхронные итераторы
- Оценка сложности алгоритмов
- Измерение производительности кода и оптимизация
- Обзор парадигмы: Объектно-ориентированное программирование
- Принципы: абстрагирование, инкапсуляция, наследование, полиморфизм
- Сокрытие в ООП и особенности на JavaScript
- Интерфейсы vs наследование в ООП
- Информационный эксперт, закон деметры, создатель, контроллер, чистая выдумка
- Слабое зацепление и высокая связность
- Посредник, устойчивость к изменениям
- Ассоциация, агрегация и композиция объектов
- Антипаттерны объектно-ориентированного программирования
- Дженерики и обобщенное программирование
- Обзор парадигмы: Функциональное программирование
- Функциональные объекты, функторы и монады
- Обзор парадигмы: Реактивное программирование
- Обзор парадигмы: Автоматное программирование
- Асинхронное программирование на callback-ах и async/await
- Тестирование: юниттесты, системное и интеграционное тестирование
- Мономорфный и полиморфный код, инлайн-кэш, скрытые классы
- Интроспекция и рефлексия

## 1 семестр 2 курса

Я предлагаю тут еще раз пройтись по GRASP более углубленно, а так же дать SOLID
и GoF: порождающие, структурные и поведенческие шаблоны, плюс контрактное
программирование.

- GRASP принципы с адаптацией для JavaScript и Node.js
- Принцип информационный эксперт / Information Expert
- Зацепление и связность / coupling and cohesion
- Чистая выдумка / Pure Fabrication

## Асинхронное программирование: 2 семестр 2 курса

- Введение в асинхронное программирование и неблокирующий ввод-вывод
- Таймеры, таймауты и EventEmitter и AsyncEmitter
- Асинхронное программирование на функциях обратного вызова (callback)
- Неблокирующее асинхронное итерирование
- Асинхронность с библиотекой async.js (надстройки и утилиты над callback)
- Асинхронность на промисах и обработка ошибок, асинхронный стектрейс
- Асинхронные функции (async / await) и обработка ошибок
- Контракт Thenable и легковесный await
- Необработанные ошибки в промисах
- Отмена асинхронных операций: callback, Promise, композиции функций
- Асинхронные адаптеры: promisify, callbackify, asyncify
- Асинхронные коллекторы данных и конкурентная асинхронная очередь
- Генераторы, итераторы и асинхронные генераторы и асинхронные итераторы
- Асинхронная композиция функций и асинхронное функциональное программирование
- Другие методы: Future, Deferred, Модель акторов (Actor Model)
- Паттерн Наблюдатель (Observer + Observable), асинхронность на RxJS и потоки событий

## Технологический стек Node.js: 1 семестр 3 курса

- Node.js Введение в технологию
- Обзор встроенного Node.js API
- Работа с файлами, буферами и файловыми потоками
- Наблюдение за файловой системой
- Структура и архитектура приложений, слоеная архитектура
- Модули, структура проекта, песочницы
- Инверсия управления и внедрение зависимостей
- Межпроцессовое взаимодействие
- Логирование в Node.js приложениях
- Конфигурирование приложений на Node.js
- Разработка серверов приложений и API
- Клиент-сервер на Node.js TCP и UDP, DNS
- HTTP сервер на Node.js (routing, cluster, IP sticky)
- HTTP сессии и cookies на чистом Node.js
- HTTP запросы в браузере и Node.js: XMLHttpRequest, fetch
- Отдача статики в Node.js
- Разработка API на Node.js (клиент и сервер)
- WebSocket сервер на Node.js (электронные таблицы и чат)
- Скаффолдинг для API, UI и данных
- Высоконагруженные распределенные приложения
- Распределенные системы и CAP-теорема

## Технологический стек Node.js: 2 семестр 3 курса

- Работа с базами данных на Node.js
- Слой доступа к данным, курсор, транзакция
- Работа с базами данных в Node.js на примере PostgreSQL
- Паттерн Команда (Command) действие и параметры как объект
- CQS, CQRS, Event Sourcing - Разделение запросов и модификации данных
- Модель акторов (Actor Model) в Node.js
- Схемы для API, структур данных и баз данных
- Управление памятью и параллельное программирование
- Утечки памяти в Node.js и JavaScript, сборка мусора и профилирование
- Состояние гонки и взаимные блокировки в асинхронном программировании
- Состояние гонки и взаимные блокировки в параллельном программировании
- Потоки worker_threads, Атомарные операции (Atomics), SharedArrayBuffer
- Семафоры и мьютексы в JavaScript и Node.js
- Разделяемая память в многопоточном Node.js
- Безопасность, надежность, развертывание и управление инфраструктурой
- Необработанные ошибки в промисах и проблема асинхронного стектрейса
- Graceful Shutdown в Node.js
- Безопасность приложений в Node.js
- Serverless Clouds (FaaS) и изоляция контекстов запросов в Node.js
- Node.js для IoT (Internet of Things)