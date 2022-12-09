import { faker } from '@faker-js/faker';

export function randomData() {
  return {

    code: faker.finance.routingNumber(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    material: faker.commerce.productMaterial(),
    price: faker.commerce.price(100, 1000) 
  }
}