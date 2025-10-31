type ShapeType = 'triangle' | 'circle' | 'rectangle';

type ColorType = 'red' | 'green' | 'blue';

export interface Figure {
  shape: ShapeType;
  color: ColorType;
  getArea(): number;
}

const roundArea = (area: number): number => {
  return Math.floor(area * 100) / 100;
};

export class Triangle implements Figure {
  public readonly shape: ShapeType = 'triangle';

  constructor(
    public color: ColorType,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('your error message');
    }

    const maxSide = Math.max(a, b, c);
    const perimeter = a + b + c;
    const sumOfOtherTwo = perimeter - maxSide;

    if (maxSide >= sumOfOtherTwo) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return roundArea(area);
  }
}

export class Circle implements Figure {
  public readonly shape: ShapeType = 'circle';

  constructor(
    public color: ColorType,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return roundArea(area);
  }
}

export class Rectangle implements Figure {
  public readonly shape: ShapeType = 'rectangle';

  constructor(
    public color: ColorType,
    public width: number,
    public height: number,
  ) {
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }

    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundArea(area);
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
