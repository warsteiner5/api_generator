import { InformSupplierBeforeApplication } from '../../models/inform-supplier-before-application.interface';
import { ApiInformSupplierBeforeApplicationDto } from '../../../swagger/models/api-inform-supplier-before-application-dto';

export function adaptApiInformSupplierBeforeApplicationDto(source?: InformSupplierBeforeApplication | null): ApiInformSupplierBeforeApplicationDto {
  return {
    HtmlBody: source?.htmlBody,
    IsRequired: source?.isRequired,
    Title: source?.title,
  };
}
