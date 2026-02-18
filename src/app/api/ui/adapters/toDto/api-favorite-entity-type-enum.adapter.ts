import { FavoriteEntityTypeEnum } from '../../enums/favorite-entity-type.enum';
import { ApiFavoriteEntityTypeEnum } from '../../../swagger/models/api-favorite-entity-type-enum';

export function adaptApiFavoriteEntityTypeEnum(source?: FavoriteEntityTypeEnum | null): ApiFavoriteEntityTypeEnum {
  switch (source) {
    case FavoriteEntityTypeEnum.Offer:
      return ApiFavoriteEntityTypeEnum.Offer;
    case FavoriteEntityTypeEnum.Deal:
      return ApiFavoriteEntityTypeEnum.Deal;
    case FavoriteEntityTypeEnum.Organization:
      return ApiFavoriteEntityTypeEnum.Organization;
    default:
      throw new Error(`Enum value is not defined: FavoriteEntityTypeEnum=${String(source)}`);
  }
}
