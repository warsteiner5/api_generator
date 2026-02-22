import { ApiUpdateDataModelAltDto } from '../../../swagger/models/api-update-data-model';
import { UpdateDataModelAlt } from '../../models/update-data-model-alt.interface';
import { updatePropertyOfBooleanAltAdapter } from './update-property-of-boolean-alt.adapter';
import { updatePropertyOfNullableDecimalAltAdapter } from './update-property-of-nullable-decimal-alt.adapter';
import { updatePropertyOfStringAltAdapter } from './update-property-of-string-alt.adapter';
import { updatePropertyOfStringOfAltAdapter } from './update-property-of-string-of-alt.adapter';

export const updateDataModelAltAdapter = (source?: ApiUpdateDataModelAltDto | null): UpdateDataModelAlt => {
  return {
    categoryId: source?.CategoryId === null ? undefined : updatePropertyOfStringAltAdapter(source?.CategoryId),
    countryCode: source?.CountryCode === null ? undefined : updatePropertyOfStringAltAdapter(source?.CountryCode),
    isRemoved: source?.IsRemoved === null ? undefined : updatePropertyOfBooleanAltAdapter(source?.IsRemoved),
    isVisible: source?.IsVisible === null ? undefined : updatePropertyOfBooleanAltAdapter(source?.IsVisible),
    okeiCode: source?.OkeiCode === null ? undefined : updatePropertyOfStringAltAdapter(source?.OkeiCode),
    okpd2Codes: source?.Okpd2Codes === null ? undefined : updatePropertyOfStringOfAltAdapter(source?.Okpd2Codes),
    price: source?.Price === null ? undefined : updatePropertyOfNullableDecimalAltAdapter(source?.Price),
    productDescription: source?.ProductDescription === null ? undefined : updatePropertyOfStringAltAdapter(source?.ProductDescription),
    productName: source?.ProductName === null ? undefined : updatePropertyOfStringAltAdapter(source?.ProductName),
    quantity: source?.Quantity === null ? undefined : updatePropertyOfNullableDecimalAltAdapter(source?.Quantity),
    regionCodes: source?.RegionCodes === null ? undefined : updatePropertyOfStringOfAltAdapter(source?.RegionCodes),
    regionalProductSignChecked: source?.RegionalProductSignChecked === null ? undefined : updatePropertyOfBooleanAltAdapter(source?.RegionalProductSignChecked),
  };
}
