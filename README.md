# Angular + NestJS Project

## Описание
Проектът съдържа Angular фронтенд и NestJS бекенд, които работят с MySQL база данни чрез Docker.

---


## Стартиране


**1. Клониране на репото:**

git clone https://github.com/Ivaylo2000/angular_nestjs.git

cd angular_nestjs


**2. Стартиране на всички компоненти (база данни, бекенд и фронтенд):**

docker-compose up -d


**3. Проверка дали всичко работи:**

docker ps


**Трябва да има 3 контейнера**

- база данни (MySQL) на порт 3307
- бекенд (NestJS) на порт 3000
- фронтенд (Angular) на порт 4200


**Портове**

- Фронтендът ще е на 4200
- Бекендът ще е на порт 3000
- MySQL базата слуша на порт 3307

**Забележка**

Ако портовете 3306 или 4200 са заети , може да ги промените в docker-compose.yml.

За тестване на базата данни може да се използваш MySQL Workbench:

- Host: localhost

- Port: 3307

- Username: root

- Password: 1234

- Database: courses_db
