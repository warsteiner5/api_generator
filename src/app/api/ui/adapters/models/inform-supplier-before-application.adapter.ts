import { ApiInformSupplierBeforeApplicationDto } from '../../../swagger/models/api-inform-supplier-before-application-dto';
import { InformSupplierBeforeApplication } from '../../models/inform-supplier-before-application.interface';

export const informSupplierBeforeApplicationAdapter = (source?: ApiInformSupplierBeforeApplicationDto | null): InformSupplierBeforeApplication => {
  return {
    htmlBody: source?.HtmlBody,
    isRequired: source?.IsRequired,
    title: source?.Title,
  };
}
