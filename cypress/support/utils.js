import { faker } from '@faker-js/faker';

export function generateCustomerData() {
  const randomNumber = faker.string.numeric(2);
  const usernameBase = faker.internet.username();
  const username = `${usernameBase}${randomNumber}`;
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    address: faker.location.streetAddress(),
    state: faker.location.state(),
    city: faker.location.city(),
    company: faker.company.name(),
    zipCode: faker.location.zipCode(),
    company: faker.company.name(),
    phoneNumber: faker.phone.number(), 
    ssn: faker.string.numeric(9),
    username: username,
    password: 'passw0rd',
  };
}