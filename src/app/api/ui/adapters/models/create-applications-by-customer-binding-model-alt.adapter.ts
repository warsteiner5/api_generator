import { ApiCreateApplicationsByCustomerBindingModelAltDto } from '../../../swagger/models/api-create-applications-by-customer-binding-model';
import { CreateApplicationsByCustomerBindingModelAlt } from '../../models/create-applications-by-customer-binding-model-alt.interface';

export const createApplicationsByCustomerBindingModelAltAdapter = (source?: ApiCreateApplicationsByCustomerBindingModelAltDto | null): CreateApplicationsByCustomerBindingModelAlt => {
  return {
    participantsIds: source?.ParticipantsIds,
  };
}
