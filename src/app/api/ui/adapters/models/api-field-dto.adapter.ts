import { Field } from '../../models/field.interface';
import { ApiFieldDto } from '../../../swagger/models/api-field-dto';
import { apiFieldTypeAltEnumAdapter } from '../enums/api-field-type.adapter';

export const apiFieldDtoAdapter = (source?: Field | null): ApiFieldDto => {
  return {
    DescriptionValue: source?.descriptionValue,
    Name: source?.name,
    ShortName: source?.shortName,
    Title: source?.title,
    Type: source?.type === null ? undefined : apiFieldTypeAltEnumAdapter(source?.type),
    Value: source?.value,
  };
}
