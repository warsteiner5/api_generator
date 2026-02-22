import { FormTemplate } from '../../models/form-template.interface';
import { ApiFormTemplateDto } from '../../../swagger/models/api-form-template-dto';
import { apiFormTemplateItemAltDtoAdapter } from './api-form-template-item.adapter';

export const apiFormTemplateDtoAdapter = (source?: FormTemplate | null): ApiFormTemplateDto => {
  return {
    Items: source?.items?.map((item) => apiFormTemplateItemAltDtoAdapter(item)),
  };
}
