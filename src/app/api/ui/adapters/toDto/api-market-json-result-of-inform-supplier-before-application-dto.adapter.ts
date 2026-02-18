import { MarketJsonResultOfInformSupplierBeforeApplication } from '../../models/market-json-result-of-inform-supplier-before-application.interface';
import { ApiMarketJsonResultOfInformSupplierBeforeApplicationDto } from '../../../swagger/models/api-market-json-result-of-inform-supplier-before-application-dto';

export function adaptApiMarketJsonResultOfInformSupplierBeforeApplicationDto(source?: MarketJsonResultOfInformSupplierBeforeApplication | null): ApiMarketJsonResultOfInformSupplierBeforeApplicationDto {
  return (source ?? {}) as ApiMarketJsonResultOfInformSupplierBeforeApplicationDto;
}
