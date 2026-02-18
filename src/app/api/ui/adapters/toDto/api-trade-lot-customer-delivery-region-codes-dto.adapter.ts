import { TradeLotCustomerDeliveryRegionCodes } from '../../models/trade-lot-customer-delivery-region-codes.interface';
import { ApiTradeLotCustomerDeliveryRegionCodesDto } from '../../../swagger/models/api-trade-lot-customer-delivery-region-codes-dto';
import { adaptApiTradeLotCustomerDto } from './api-trade-lot-customer-dto.adapter';

export function adaptApiTradeLotCustomerDeliveryRegionCodesDto(source?: TradeLotCustomerDeliveryRegionCodes | null): ApiTradeLotCustomerDeliveryRegionCodesDto {
  return {
    DeliveryRegionCode: source?.deliveryRegionCode,
    Id: source?.id,
    TradeLotCustomer: adaptApiTradeLotCustomerDto(source?.tradeLotCustomer),
  };
}
