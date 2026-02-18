import { ApiLotItemApplicationCountryCodeDto } from '../../../swagger/models/api-lot-item-application-country-code-dto';
import { LotItemApplicationCountryCode } from '../../models/lot-item-application-country-code.interface';

export function adaptLotItemApplicationCountryCodeToUI(source?: ApiLotItemApplicationCountryCodeDto | null): LotItemApplicationCountryCode {
  return {
    manufacturerCountryCode: source?.ManufacturerCountryCode ?? '',
    manufacturerCountryNameShort: source?.ManufacturerCountryNameShort ?? '',
  };
}
