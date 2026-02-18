import { Field } from '../../models/field.interface';
import { ApiFieldDto } from '../../../swagger/models/api-field-dto';
import { adaptApiFieldTypeAltEnum } from './api-field-type.adapter';

export function adaptApiFieldDto(source?: Field | null): ApiFieldDto {
  return {
    DescriptionValue: source?.descriptionValue,
    Name: source?.name,
    ShortName: source?.shortName,
    Title: source?.title,
    Type: adaptApiFieldTypeAltEnum(source?.type),
    Value: source?.value,
  };
}
