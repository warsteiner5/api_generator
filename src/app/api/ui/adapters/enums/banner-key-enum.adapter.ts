import { ApiBannerKeyEnum } from '../../../swagger/models/api-banner-key-enum';
import { BannerKeyEnum } from '../../enums/banner-key.enum';

export const bannerKeyEnumAdapter = (source?: ApiBannerKeyEnum | null): BannerKeyEnum => {
  switch (source) {
    case ApiBannerKeyEnum.Undefined:
      return BannerKeyEnum.Undefined;
    case ApiBannerKeyEnum.AboutPurchaseMethodMapping:
      return BannerKeyEnum.AboutPurchaseMethodMapping;
    default:
      throw new Error(`Enum value is not defined: ApiBannerKeyEnum=${String(source)}`);
  }
}
