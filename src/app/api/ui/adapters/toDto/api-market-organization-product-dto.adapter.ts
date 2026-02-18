import { MarketOrganizationProduct } from '../../models/market-organization-product.interface';
import { ApiMarketOrganizationProductDto } from '../../../swagger/models/api-market-organization-product-dto';

export function adaptApiMarketOrganizationProductDto(source?: MarketOrganizationProduct | null): ApiMarketOrganizationProductDto {
  return {
    Label: source?.label,
    Value: source?.value,
  };
}
