import { ApiTradeLotCustomerDeliveryRegionCodesDto } from '../../../swagger/models/api-trade-lot-customer-delivery-region-codes-dto';
import { TradeLotCustomerDeliveryRegionCodes } from '../../models/trade-lot-customer-delivery-region-codes.interface';
import { tradeLotCustomerAdapter } from './trade-lot-customer.adapter';

export const tradeLotCustomerDeliveryRegionCodesAdapter = (source?: ApiTradeLotCustomerDeliveryRegionCodesDto | null): TradeLotCustomerDeliveryRegionCodes => {
  return {
    deliveryRegionCode: source?.DeliveryRegionCode,
    id: source?.Id,
    tradeLotCustomer: source?.TradeLotCustomer === null ? undefined : tradeLotCustomerAdapter(source?.TradeLotCustomer),
  };
}
