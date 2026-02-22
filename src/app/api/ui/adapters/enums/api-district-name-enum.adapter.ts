import { DistrictNameEnum } from '../../enums/district-name.enum';
import { ApiDistrictNameEnum } from '../../../swagger/models/api-district-name-enum';

export const apiDistrictNameEnumAdapter = (source?: DistrictNameEnum | null): ApiDistrictNameEnum => {
  switch (source) {
    case DistrictNameEnum.CentralDistrict:
      return ApiDistrictNameEnum.CentralDistrict;
    case DistrictNameEnum.NorthWestDistrict:
      return ApiDistrictNameEnum.NorthWestDistrict;
    case DistrictNameEnum.SouthDistrict:
      return ApiDistrictNameEnum.SouthDistrict;
    case DistrictNameEnum.NorthCaucasianDistrict:
      return ApiDistrictNameEnum.NorthCaucasianDistrict;
    case DistrictNameEnum.PrivolzhskyDistrict:
      return ApiDistrictNameEnum.PrivolzhskyDistrict;
    case DistrictNameEnum.UralDistrict:
      return ApiDistrictNameEnum.UralDistrict;
    case DistrictNameEnum.SiberianDistrict:
      return ApiDistrictNameEnum.SiberianDistrict;
    case DistrictNameEnum.FarEasternDistrict:
      return ApiDistrictNameEnum.FarEasternDistrict;
    default:
      throw new Error(`Enum value is not defined: DistrictNameEnum=${String(source)}`);
  }
}
