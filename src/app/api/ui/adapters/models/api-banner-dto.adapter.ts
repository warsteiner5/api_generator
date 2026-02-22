import { Banner } from '../../models/banner.interface';
import { ApiBannerDto } from '../../../swagger/models/api-banner-dto';
import { apiBannerKeyEnumAdapter } from '../enums/api-banner-key-enum.adapter';

export const apiBannerDtoAdapter = (source?: Banner | null): ApiBannerDto => {
  return {
    IsAvailableToShow: source?.isAvailableToShow,
    Key: source?.key === null ? undefined : apiBannerKeyEnumAdapter(source?.key),
  };
}
