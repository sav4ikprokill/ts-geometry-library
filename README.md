# Geometry Library
TypeScript-библиотека для работы с геометрическими фигурами.

Поддерживаемые фигуры:
- Прямоугольник (Rectangle)
- Круг (Circle)
- Треугольник (Triangle)


Библиотека позволяет:
- создавать фигуры через классы
- создавать фигуры через фабрику `createShape`
- получать параметры фигур
- вычислять площадь и другие характеристики фигур
- отслеживать изменения параметров через   `EventTarget`

## Использование 
import { Rectangle, Circle, Triangle, createShape } from "./dist";

## Создание фигур через классы
const rectangle = new Rectangle(10, 20);

console.log(rectangle.getArea()); // 200
console.log(rectangle.getPerimeter()); // 60

const circle = new Circle(5);

console.log(circle.getArea());
console.log(circle.getDiameter());
console.log(circle.getCircumference());

const triangle = new Triangle(3, 4, 5);

console.log(triangle.getArea()); // 6
console.log(triangle.getPerimeter()); // 12
## Создание через фабрику
const shape = createShape({
  kind: "circle",
  radius: 10,
});

console.log(shape.getArea());

## События 

const circle = new Circle(5);

circle.addEventListener("change", () => {
  console.log("Параметры круга изменились");
});

circle.radius = 10;


## Требования

- Node.js 
- TypeScript
- Включен строгий режим (`strict: true`)
- `allowJs: false`

## Установка 
- npm install

## Сборка 
npm run build или  npm txc
После сборки файлы появляются в папке dist 

## API
Shape (базовый класс)

Общие методы:
getArea(): number
toJSON(): Record<string, number | string>
Rectangle
## Параметры:
width
height
Методы:
getArea()
getPerimeter()
Circle
Параметры:
radius
## Методы:
getArea()
getDiameter()
getCircumference()
Triangle
Параметры:
sideA
sideB
sideC
Методы:
getArea()
getPerimeter()
## Валидация
Библиотека проверяет: все значения должны быть положительными числами треугольник должен удовлетворять неравенству треугольника

При ошибке выбрасывается TypeError.

## Расширяемость
Чтобы добавить новую фигуру:
1. Создать класс, наследующий Shape
2.  методы
3. Добавить тип в ShapeInit
4. Обновить createShape
5. Экспортировать через index.ts






