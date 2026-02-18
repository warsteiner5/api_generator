import { ApiMarketJsonResultOfUpdateOrganizationBaseInfoDataToSign } from '../../../swagger/models/api-market-json-result-of-update-organization-base-info-data-to-sign';
import { MarketJsonResultOfUpdateOrganizationBaseInfoDataToSign } from '../../models/market-json-result-of-update-organization-base-info-data-to-sign.interface';

export function adaptMarketJsonResultOfUpdateOrganizationBaseInfoDataToSignToUI(source?: ApiMarketJsonResultOfUpdateOrganizationBaseInfoDataToSign | null): MarketJsonResultOfUpdateOrganizationBaseInfoDataToSign {
  return (source ?? {}) as MarketJsonResultOfUpdateOrganizationBaseInfoDataToSign;
}
