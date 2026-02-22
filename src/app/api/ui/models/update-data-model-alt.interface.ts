import { UpdatePropertyOfBooleanAlt } from './update-property-of-boolean-alt.interface';
import { UpdatePropertyOfNullableDecimalAlt } from './update-property-of-nullable-decimal-alt.interface';
import { UpdatePropertyOfStringAlt } from './update-property-of-string-alt.interface';
import { UpdatePropertyOfStringOfAlt } from './update-property-of-string-of-alt.interface';

// @ts-ignore
export interface UpdateDataModelAlt {
  categoryId: UpdatePropertyOfStringAlt;
  countryCode: UpdatePropertyOfStringAlt;
  isRemoved: UpdatePropertyOfBooleanAlt;
  isVisible: UpdatePropertyOfBooleanAlt;
  okeiCode: UpdatePropertyOfStringAlt;
  okpd2Codes: UpdatePropertyOfStringOfAlt;
  price: UpdatePropertyOfNullableDecimalAlt;
  productDescription: UpdatePropertyOfStringAlt;
  productName: UpdatePropertyOfStringAlt;
  quantity: UpdatePropertyOfNullableDecimalAlt;
  regionCodes: UpdatePropertyOfStringOfAlt;
  regionalProductSignChecked: UpdatePropertyOfBooleanAlt;
}
