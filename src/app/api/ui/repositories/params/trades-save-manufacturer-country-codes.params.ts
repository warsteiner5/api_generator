import { ApplicationCountryCodesEdit } from '../../models/application-country-codes-edit.interface';
import { TradesSaveManufacturerCountryCodes$Params } from '../../../swagger/fn/trades/trades-save-manufacturer-country-codes';
import { adaptApiApplicationCountryCodesEditDto } from '../../adapters/toDto/api-application-country-codes-edit-dto.adapter';

export interface TradesSaveManufacturerCountryCodesParams {
  body?: ApplicationCountryCodesEdit;
}

export const tradesSaveManufacturerCountryCodesParamsAdapter = {
  adapt(params?: TradesSaveManufacturerCountryCodesParams): TradesSaveManufacturerCountryCodes$Params {
    if (!params) {
      return {} as TradesSaveManufacturerCountryCodes$Params;
    }
    return {
      body: adaptApiApplicationCountryCodesEditDto(params.body),
    };
  }
};
