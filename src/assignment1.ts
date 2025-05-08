{
  //
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === true || toUpper === undefined) {
      return input.toUpperCase();
    } else if (toUpper === false) {
      return input.toLowerCase();
    } else {
      return input.toLowerCase();
    }
  }

  //   console.log(formatString("Hello"));
  //   console.log(formatString("Hello", true));
  //   console.log(formatString("Hello", false));

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items.filter((item) => item.rating >= 4);
  }

  //   const books = [
  //     { title: "Book A", rating: 4.5 },
  //     { title: "Book B", rating: 3.2 },
  //     { title: "Book C", rating: 5.0 },
  //   ];

  //   console.log(filterByRating(books));

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((res, arr) => [...res, ...arr]);
  }
  //   console.log(concatenateArrays(["a", "b"], ["c"]));
  //   console.log(concatenateArrays([1, 2], [3, 4], [5]));

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
  // const myCar = new Car("Toyota", 2020, "Corolla");
  // console.log(myCar.getInfo());
  // console.log(myCar.getModel());

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }
  //   console.log(processValue("hello"));
  //   console.log(processValue(10));

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
  //   const products = [
  //     { name: "Pen", price: 10 },
  //     { name: "Notebook", price: 50 },
  //     { name: "Bag", price: 50 },
  //   ];

  //   console.log(getMostExpensiveProduct(products));
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
  //   console.log(getDayType(Day.Monday));
  //   console.log(getDayType(Day.Sunday));

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
  // squareAsync(4).then(console.log);
  // squareAsync(-4).catch(console.error);

  //
}
