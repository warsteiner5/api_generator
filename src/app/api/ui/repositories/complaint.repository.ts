import { adaptComplaintInfoToUI } from '../adapters/toUI/complaint-info.adapter';
import { adaptComplaintToUI } from '../adapters/toUI/complaint.adapter';
import { adaptComplaintTypeToUI } from '../adapters/toUI/complaint-type.adapter';
import { Complaint } from '../models/complaint.interface';
import { ComplaintApiService } from '../../swagger/services/complaint-api.service';
import { ComplaintCloseParams, complaintCloseParamsAdapter } from './params/complaint-close.params';
import { ComplaintComplaintTypesParams, complaintComplaintTypesParamsAdapter } from './params/complaint-complaint-types.params';
import { ComplaintCreateParams, complaintCreateParamsAdapter } from './params/complaint-create.params';
import { ComplaintGetPriceListComplaintsParams, complaintGetPriceListComplaintsParamsAdapter } from './params/complaint-get-price-list-complaints.params';
import { ComplaintInfo } from '../models/complaint-info.interface';
import { ComplaintType } from '../models/complaint-type.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ComplaintRepository {
  private readonly _api = inject(ComplaintApiService);

  complaintClose(params?: ComplaintCloseParams): Observable<Blob> {
    return this._api.complaintClose(complaintCloseParamsAdapter.adapt(params));
  }

  complaintComplaintTypes(params?: ComplaintComplaintTypesParams): Observable<ComplaintType[]> {
    return this._api.complaintComplaintTypes(complaintComplaintTypesParamsAdapter.adapt(params)).pipe(
      map((res) => (res ?? []).map((item) => adaptComplaintTypeToUI(item)))
    );
  }

  complaintCreate(params?: ComplaintCreateParams): Observable<Complaint> {
    return this._api.complaintCreate(complaintCreateParamsAdapter.adapt(params)).pipe(
      map((res) => adaptComplaintToUI(res))
    );
  }

  complaintGetPriceListComplaints(params: ComplaintGetPriceListComplaintsParams): Observable<ComplaintInfo[]> {
    return this._api.complaintGetPriceListComplaints(complaintGetPriceListComplaintsParamsAdapter.adapt(params)).pipe(
      map((res) => (res ?? []).map((item) => adaptComplaintInfoToUI(item)))
    );
  }

}
