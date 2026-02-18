import { ApiFormTemplateDto } from '../../../swagger/models/api-form-template-dto';
import { FormTemplate } from '../../models/form-template.interface';
import { adaptFormTemplateItemAltToUI } from './form-template-item-alt.adapter';

export function adaptFormTemplateToUI(source?: ApiFormTemplateDto | null): FormTemplate {
  return {
    items: (source?.Items ?? []).map((item) => adaptFormTemplateItemAltToUI(item)),
  };
}
