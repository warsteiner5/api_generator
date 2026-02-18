import { ApiMarketJsonResultOfInformSupplierBeforeApplicationDto } from '../../../swagger/models/api-market-json-result-of-inform-supplier-before-application-dto';
import { MarketJsonResultOfInformSupplierBeforeApplication } from '../../models/market-json-result-of-inform-supplier-before-application.interface';

export function adaptMarketJsonResultOfInformSupplierBeforeApplicationToUI(source?: ApiMarketJsonResultOfInformSupplierBeforeApplicationDto | null): MarketJsonResultOfInformSupplierBeforeApplication {
  return (source ?? {}) as MarketJsonResultOfInformSupplierBeforeApplication;
}
