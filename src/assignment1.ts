{
  //
  //1

  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === true || toUpper === undefined) {
      return input.toUpperCase();
    } else if (toUpper === false) {
      return input.toLowerCase();
    } else {
      return input.toLowerCase();
    }
  }

  //2

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items.filter((item) => item.rating >= 4);
  }

  //3

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((res, arr) => [...res, ...arr]);
  }

  //4

  class Vehicle {
    private make: string;
    private year: number;
    getInfo() {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
    constructor(make: string, year: number) {
      (this.make = make), (this.year = year);
    }
  }
  class Car extends Vehicle {
    private model: string;
    getModel() {
      return `Model: ${this.model}`;
    }
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
  }

  //5
  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

  //6
  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length > 0) {
      let product: Product = products[0];
      products.forEach((prod) => {
        if (prod.price > product.price) {
          product = prod;
        }
      });
      return product;
    } else {
      return null;
    }
  }
  //7

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day === Day.Sunday || day === Day.Saturday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }

  //8
  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n >= 0) {
          resolve(n * n);
        } else {
          reject("Negetive number not allowed");
        }
      }, 1000);
    });
  }

  //
}
