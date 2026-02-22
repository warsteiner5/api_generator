import { TradeLotCustomerDeliveryRegionCodes } from '../../models/trade-lot-customer-delivery-region-codes.interface';
import { ApiTradeLotCustomerDeliveryRegionCodesDto } from '../../../swagger/models/api-trade-lot-customer-delivery-region-codes-dto';
import { apiTradeLotCustomerDtoAdapter } from './api-trade-lot-customer-dto.adapter';

export const apiTradeLotCustomerDeliveryRegionCodesDtoAdapter = (source?: TradeLotCustomerDeliveryRegionCodes | null): ApiTradeLotCustomerDeliveryRegionCodesDto => {
  return {
    DeliveryRegionCode: source?.deliveryRegionCode,
    Id: source?.id,
    TradeLotCustomer: source?.tradeLotCustomer === null ? undefined : apiTradeLotCustomerDtoAdapter(source?.tradeLotCustomer),
  };
}
