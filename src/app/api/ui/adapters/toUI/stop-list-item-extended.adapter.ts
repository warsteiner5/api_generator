import { ApiStopListItemExtendedDto } from '../../../swagger/models/api-stop-list-item-extended-dto';
import { StopListItemExtended } from '../../models/stop-list-item-extended.interface';
import { adaptStopListItemToUI } from './stop-list-item.adapter';

export function adaptStopListItemExtendedToUI(source?: ApiStopListItemExtendedDto | null): StopListItemExtended {
  return {
    logoFileGuid: source?.LogoFileGuid ?? '',
    stopListItemDtos: (source?.StopListItemDtos ?? []).map((item) => adaptStopListItemToUI(item)),
    supplierAdress: source?.SupplierAdress ?? '',
    supplierEmail: source?.SupplierEmail ?? '',
    supplierName: source?.SupplierName ?? '',
    supplierPhone: source?.SupplierPhone ?? '',
    supplierSite: source?.SupplierSite ?? '',
  };
}
