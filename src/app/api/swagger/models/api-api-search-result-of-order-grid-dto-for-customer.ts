/* tslint:disable */
/* eslint-disable */
import { ApiOrderGridDtoForCustomer } from '../models/api-order-grid-dto-for-customer';
export interface ApiApiSearchResultOfOrderGridDtoForCustomer {
  currpage?: number;
  invdata?: Array<ApiOrderGridDtoForCustomer> | null;
  showTotal?: boolean;
  totalpages?: number;
  totalrecords?: number;
}
