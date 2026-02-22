import { ApiFavoriteEntityTypeEnum } from '../../../swagger/models/api-favorite-entity-type-enum';
import { FavoriteEntityTypeEnum } from '../../enums/favorite-entity-type.enum';

export const favoriteEntityTypeEnumAdapter = (source?: ApiFavoriteEntityTypeEnum | null): FavoriteEntityTypeEnum => {
  switch (source) {
    case ApiFavoriteEntityTypeEnum.Offer:
      return FavoriteEntityTypeEnum.Offer;
    case ApiFavoriteEntityTypeEnum.Deal:
      return FavoriteEntityTypeEnum.Deal;
    case ApiFavoriteEntityTypeEnum.Organization:
      return FavoriteEntityTypeEnum.Organization;
    default:
      throw new Error(`Enum value is not defined: ApiFavoriteEntityTypeEnum=${String(source)}`);
  }
}
