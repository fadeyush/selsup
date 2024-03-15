# selsup
Тестовое задание на позицию "Frontend разработчика на React" в компанию Selsup

### [Демо](https://fadeyush.github.io/selsup/) версия проекта

## Условие
Даны структуры данных, описывающих товар – интерфейс Model и набор
параметров этого товара. 

Необходимо реализовать на React компоненты, которые
позволяют редактировать структуру Model – проставлять значения параметров при
этом параметры должны выводиться все и сразу должны быть доступны для
редактирования, а переданные значения в структуре проставлены в форме
редактирования, которые передаются в params: Param[], а так же позволяют получить
полную структуру в методе getModel() – содержащую все проставленные значения
параметров. 

Решение должно быть легко расширяемым (например, позволять легко
добавлять новые типы параметров – не только текстовые, но например числовые или
со списком значений) Реализация должна работать только с текстовыми
параметрами Input – тип string.

Решение необходимо оформить в виде одного файла со всеми компонентами и типами
которые используются.

### Путь до файлы с реализацией:

```bash

├── src/              
│   ├── App.tsx    # файл с реализацией

```

Клонировать репозиторий:

    git clone https://github.com/fadeyush/selsup

Запустить приложение:

    npm start