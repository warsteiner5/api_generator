import { ApiChangeDealFormDto } from '../../../swagger/models/api-change-deal-form-dto';
import { ChangeDealForm } from '../../models/change-deal-form.interface';
import { adaptDealDocumentToUI } from './deal-document.adapter';
import { adaptDealObjectEnumToUI } from './deal-object-enum.adapter';
import { adaptDealStateEnumToUI } from './deal-state-enum.adapter';

export function adaptChangeDealFormToUI(source?: ApiChangeDealFormDto | null): ChangeDealForm {
  return {
    cancellationReason: source?.CancellationReason ?? '',
    conclusionDate: source?.ConclusionDate ?? '',
    dealCustomNumber: source?.DealCustomNumber ?? '',
    dealObject: adaptDealObjectEnumToUI(source?.DealObject),
    documents: (source?.Documents ?? []).map((item) => adaptDealDocumentToUI(item)),
    executionFrom: source?.ExecutionFrom ?? '',
    executionTo: source?.ExecutionTo ?? '',
    id: source?.Id ?? 0,
    price: source?.Price ?? 0,
    state: adaptDealStateEnumToUI(source?.State),
  };
}
