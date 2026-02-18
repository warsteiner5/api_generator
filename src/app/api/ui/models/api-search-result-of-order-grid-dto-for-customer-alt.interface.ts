import { OrderGridDtoForCustomerAlt } from './order-grid-dto-for-customer-alt.interface';

export interface ApiSearchResultOfOrderGridDtoForCustomerAlt {
  currpage: number;
  invdata: OrderGridDtoForCustomerAlt[];
  showTotal: boolean;
  totalpages: number;
  totalrecords: number;
}
