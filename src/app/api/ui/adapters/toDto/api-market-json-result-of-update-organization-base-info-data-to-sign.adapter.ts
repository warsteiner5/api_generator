import { MarketJsonResultOfUpdateOrganizationBaseInfoDataToSign } from '../../models/market-json-result-of-update-organization-base-info-data-to-sign.interface';
import { ApiMarketJsonResultOfUpdateOrganizationBaseInfoDataToSign } from '../../../swagger/models/api-market-json-result-of-update-organization-base-info-data-to-sign';

export function adaptApiMarketJsonResultOfUpdateOrganizationBaseInfoDataToSign(source?: MarketJsonResultOfUpdateOrganizationBaseInfoDataToSign | null): ApiMarketJsonResultOfUpdateOrganizationBaseInfoDataToSign {
  return (source ?? {}) as ApiMarketJsonResultOfUpdateOrganizationBaseInfoDataToSign;
}
