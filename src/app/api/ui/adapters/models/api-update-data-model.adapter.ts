import { UpdateDataModelAlt } from '../../models/update-data-model-alt.interface';
import { ApiUpdateDataModelAltDto } from '../../../swagger/models/api-update-data-model';
import { apiUpdatePropertyOfBooleanAltDtoAdapter } from './api-update-property-of-boolean.adapter';
import { apiUpdatePropertyOfNullableDecimalAltDtoAdapter } from './api-update-property-of-nullable-decimal.adapter';
import { apiUpdatePropertyOfStringAltDtoAdapter } from './api-update-property-of-string.adapter';
import { apiUpdatePropertyOfStringOfAltDtoAdapter } from './api-update-property-of-string-of.adapter';

export const apiUpdateDataModelAltDtoAdapter = (source?: UpdateDataModelAlt | null): ApiUpdateDataModelAltDto => {
  return {
    CategoryId: source?.categoryId === null ? undefined : apiUpdatePropertyOfStringAltDtoAdapter(source?.categoryId),
    CountryCode: source?.countryCode === null ? undefined : apiUpdatePropertyOfStringAltDtoAdapter(source?.countryCode),
    IsRemoved: source?.isRemoved === null ? undefined : apiUpdatePropertyOfBooleanAltDtoAdapter(source?.isRemoved),
    IsVisible: source?.isVisible === null ? undefined : apiUpdatePropertyOfBooleanAltDtoAdapter(source?.isVisible),
    OkeiCode: source?.okeiCode === null ? undefined : apiUpdatePropertyOfStringAltDtoAdapter(source?.okeiCode),
    Okpd2Codes: source?.okpd2Codes === null ? undefined : apiUpdatePropertyOfStringOfAltDtoAdapter(source?.okpd2Codes),
    Price: source?.price === null ? undefined : apiUpdatePropertyOfNullableDecimalAltDtoAdapter(source?.price),
    ProductDescription: source?.productDescription === null ? undefined : apiUpdatePropertyOfStringAltDtoAdapter(source?.productDescription),
    ProductName: source?.productName === null ? undefined : apiUpdatePropertyOfStringAltDtoAdapter(source?.productName),
    Quantity: source?.quantity === null ? undefined : apiUpdatePropertyOfNullableDecimalAltDtoAdapter(source?.quantity),
    RegionCodes: source?.regionCodes === null ? undefined : apiUpdatePropertyOfStringOfAltDtoAdapter(source?.regionCodes),
    RegionalProductSignChecked: source?.regionalProductSignChecked === null ? undefined : apiUpdatePropertyOfBooleanAltDtoAdapter(source?.regionalProductSignChecked),
  };
}
