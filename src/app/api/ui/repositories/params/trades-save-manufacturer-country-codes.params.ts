import { ApplicationCountryCodesEdit } from '../../models/application-country-codes-edit.interface';
import { TradesSaveManufacturerCountryCodes$Params } from '../../../swagger/fn/trades/trades-save-manufacturer-country-codes';
import { apiApplicationCountryCodesEditDtoAdapter } from '../../adapters/models/api-application-country-codes-edit-dto.adapter';

// @ts-ignore
export interface TradesSaveManufacturerCountryCodesParams {
  body?: ApplicationCountryCodesEdit;
}

export function tradesSaveManufacturerCountryCodesAdapter(params?: TradesSaveManufacturerCountryCodesParams): TradesSaveManufacturerCountryCodes$Params {
  if (!params) {
    return {} as TradesSaveManufacturerCountryCodes$Params;
  }
  return {
      body: apiApplicationCountryCodesEditDtoAdapter(params.body),
  };
}
