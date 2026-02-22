import { ApiMarketOrganizationProductDto } from '../../../swagger/models/api-market-organization-product-dto';
import { MarketOrganizationProduct } from '../../models/market-organization-product.interface';

export const marketOrganizationProductAdapter = (source?: ApiMarketOrganizationProductDto | null): MarketOrganizationProduct => {
  return {
    label: source?.Label,
    value: source?.Value,
  };
}
