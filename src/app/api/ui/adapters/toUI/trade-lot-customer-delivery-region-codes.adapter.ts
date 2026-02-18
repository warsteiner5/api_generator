import { ApiTradeLotCustomerDeliveryRegionCodesDto } from '../../../swagger/models/api-trade-lot-customer-delivery-region-codes-dto';
import { TradeLotCustomerDeliveryRegionCodes } from '../../models/trade-lot-customer-delivery-region-codes.interface';
import { adaptTradeLotCustomerToUI } from './trade-lot-customer.adapter';

export function adaptTradeLotCustomerDeliveryRegionCodesToUI(source?: ApiTradeLotCustomerDeliveryRegionCodesDto | null): TradeLotCustomerDeliveryRegionCodes {
  return {
    deliveryRegionCode: source?.DeliveryRegionCode ?? '',
    id: source?.Id ?? 0,
    tradeLotCustomer: adaptTradeLotCustomerToUI(source?.TradeLotCustomer),
  };
}
