import { FormTemplate } from '../../models/form-template.interface';
import { ApiFormTemplateDto } from '../../../swagger/models/api-form-template-dto';
import { adaptApiFormTemplateItemAltDto } from './api-form-template-item.adapter';

export function adaptApiFormTemplateDto(source?: FormTemplate | null): ApiFormTemplateDto {
  return {
    Items: (source?.items ?? []).map((item) => adaptApiFormTemplateItemAltDto(item)),
  };
}
