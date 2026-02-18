import { BannerPlaceEnum } from '../../enums/banner-place.enum';
import { ApiBannerPlaceEnum } from '../../../swagger/models/api-banner-place-enum';

export function adaptApiBannerPlaceEnum(source?: BannerPlaceEnum | null): ApiBannerPlaceEnum {
  switch (source) {
    case BannerPlaceEnum.UnderHeader:
      return ApiBannerPlaceEnum.UnderHeader;
    default:
      throw new Error(`Enum value is not defined: BannerPlaceEnum=${String(source)}`);
  }
}
