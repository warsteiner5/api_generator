import { ApiBannerPlaceEnum } from '../../../swagger/models/api-banner-place-enum';
import { BannerPlaceEnum } from '../../enums/banner-place.enum';

export function adaptBannerPlaceEnumToUI(source?: ApiBannerPlaceEnum | null): BannerPlaceEnum {
  switch (source) {
    case ApiBannerPlaceEnum.UnderHeader:
      return BannerPlaceEnum.UnderHeader;
    default:
      throw new Error(`Enum value is not defined: ApiBannerPlaceEnum=${String(source)}`);
  }
}
