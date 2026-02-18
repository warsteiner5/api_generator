import { ApiBannerDto } from '../../../swagger/models/api-banner-dto';
import { Banner } from '../../models/banner.interface';
import { adaptBannerKeyEnumToUI } from './banner-key-enum.adapter';

export function adaptBannerToUI(source?: ApiBannerDto | null): Banner {
  return {
    isAvailableToShow: source?.IsAvailableToShow ?? false,
    key: adaptBannerKeyEnumToUI(source?.Key),
  };
}
