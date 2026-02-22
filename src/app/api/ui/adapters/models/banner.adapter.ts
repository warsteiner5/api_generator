import { ApiBannerDto } from '../../../swagger/models/api-banner-dto';
import { Banner } from '../../models/banner.interface';
import { bannerKeyEnumAdapter } from '../enums/banner-key-enum.adapter';

export const bannerAdapter = (source?: ApiBannerDto | null): Banner => {
  return {
    isAvailableToShow: source?.IsAvailableToShow,
    key: source?.Key === null ? undefined : bannerKeyEnumAdapter(source?.Key),
  };
}
