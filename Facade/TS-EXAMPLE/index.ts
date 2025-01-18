import { ECommerceFacade } from "./facade/e-commerse.facade";

const ecommerce = new ECommerceFacade();

ecommerce.placeOrder('PROD001', 2, 50.0);
