import { Complaint } from '../models/complaint.interface';
import { complaintAdapter } from '../adapters/models/complaint.adapter';
import { ComplaintApiService } from '../../swagger/services/complaint-api.service';
import { ComplaintCloseParams, complaintCloseAdapter } from './params/complaint-close.params';
import { ComplaintComplaintTypesParams, complaintComplaintTypesAdapter } from './params/complaint-complaint-types.params';
import { ComplaintCreateParams, complaintCreateAdapter } from './params/complaint-create.params';
import { ComplaintGetPriceListComplaintsParams, complaintGetPriceListComplaintsAdapter } from './params/complaint-get-price-list-complaints.params';
import { ComplaintInfo } from '../models/complaint-info.interface';
import { complaintInfoAdapter } from '../adapters/models/complaint-info.adapter';
import { ComplaintType } from '../models/complaint-type.interface';
import { complaintTypeAdapter } from '../adapters/models/complaint-type.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ComplaintRepository {
  private readonly _api = inject(ComplaintApiService);

  complaintClose(params?: ComplaintCloseParams): Observable<Blob> {
    return this._api.complaintClose(complaintCloseAdapter(params));
  }

  complaintComplaintTypes(params?: ComplaintComplaintTypesParams): Observable<ComplaintType[]> {
    return this._api.complaintComplaintTypes(complaintComplaintTypesAdapter(params)).pipe(
      map((res) => (res ?? []).map((item) => complaintTypeAdapter(item)))
    );
  }

  complaintCreate(params?: ComplaintCreateParams): Observable<Complaint> {
    return this._api.complaintCreate(complaintCreateAdapter(params)).pipe(
      map((res) => complaintAdapter(res))
    );
  }

  complaintGetPriceListComplaints(params: ComplaintGetPriceListComplaintsParams): Observable<ComplaintInfo[]> {
    return this._api.complaintGetPriceListComplaints(complaintGetPriceListComplaintsAdapter(params)).pipe(
      map((res) => (res ?? []).map((item) => complaintInfoAdapter(item)))
    );
  }

}
