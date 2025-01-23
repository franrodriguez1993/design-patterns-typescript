import { AgeValidator } from "./handlers/age.handler";
import { EmailValidator } from "./handlers/email.handler";
import { PasswordValidator } from "./handlers/password.handler";

const emailValidator = new EmailValidator();
const passwordValidator = new PasswordValidator();
const ageValidator = new AgeValidator();

// 1 Creamos la cadena de responsabilidad:
emailValidator.setNext(passwordValidator).setNext(ageValidator);

// 2 Simular una solicitud de registro
const userRequest = {
  email: 'user@example.com',
  password: 'myPassword1234',
  age: 21,
};

// 3 Ejecutar la cadena
try {
  emailValidator.handle(userRequest);
  console.log('All validations passed. User is registered!');
} catch (error) {
  console.error('Validation error:', (error as Error).message);
}
