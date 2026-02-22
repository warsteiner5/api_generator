import { OrderGridDtoForCustomer } from './order-grid-dto-for-customer.interface';

// @ts-ignore
export interface ApiSearchResultOfOrderGridDtoForCustomer {
  currpage: number;
  invdata: OrderGridDtoForCustomer[];
  showTotal: boolean;
  totalpages: number;
  totalrecords: number;
}
