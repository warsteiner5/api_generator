import { OfferCreatedMethodEnum } from '../../enums/offer-created-method.enum';
import { ApiOfferCreatedMethodEnum } from '../../../swagger/models/api-offer-created-method-enum';

export function adaptApiOfferCreatedMethodEnum(source?: OfferCreatedMethodEnum | null): ApiOfferCreatedMethodEnum {
  switch (source) {
    case OfferCreatedMethodEnum.WebSite:
      return ApiOfferCreatedMethodEnum.WebSite;
    case OfferCreatedMethodEnum.Yml:
      return ApiOfferCreatedMethodEnum.Yml;
    case OfferCreatedMethodEnum.Excel:
      return ApiOfferCreatedMethodEnum.Excel;
    case OfferCreatedMethodEnum.MinPromTorg:
      return ApiOfferCreatedMethodEnum.MinPromTorg;
    case OfferCreatedMethodEnum.SalesTech:
      return ApiOfferCreatedMethodEnum.SalesTech;
    default:
      throw new Error(`Enum value is not defined: OfferCreatedMethodEnum=${String(source)}`);
  }
}
