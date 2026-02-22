import { ApiOfferCreatedMethodEnum } from '../../../swagger/models/api-offer-created-method-enum';
import { OfferCreatedMethodEnum } from '../../enums/offer-created-method.enum';

export const offerCreatedMethodEnumAdapter = (source?: ApiOfferCreatedMethodEnum | null): OfferCreatedMethodEnum => {
  switch (source) {
    case ApiOfferCreatedMethodEnum.WebSite:
      return OfferCreatedMethodEnum.WebSite;
    case ApiOfferCreatedMethodEnum.Yml:
      return OfferCreatedMethodEnum.Yml;
    case ApiOfferCreatedMethodEnum.Excel:
      return OfferCreatedMethodEnum.Excel;
    case ApiOfferCreatedMethodEnum.MinPromTorg:
      return OfferCreatedMethodEnum.MinPromTorg;
    case ApiOfferCreatedMethodEnum.SalesTech:
      return OfferCreatedMethodEnum.SalesTech;
    default:
      throw new Error(`Enum value is not defined: ApiOfferCreatedMethodEnum=${String(source)}`);
  }
}
