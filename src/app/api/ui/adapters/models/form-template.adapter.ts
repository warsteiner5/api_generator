import { ApiFormTemplateDto } from '../../../swagger/models/api-form-template-dto';
import { FormTemplate } from '../../models/form-template.interface';
import { formTemplateItemAltAdapter } from './form-template-item-alt.adapter';

export const formTemplateAdapter = (source?: ApiFormTemplateDto | null): FormTemplate => {
  return {
    items: source?.Items?.map((item) => formTemplateItemAltAdapter(item)),
  };
}
