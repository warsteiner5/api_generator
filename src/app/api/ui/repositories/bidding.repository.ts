import { BiddingApiService } from '../../swagger/services/bidding-api.service';
import { BiddingGetInfoParams, biddingGetInfoAdapter } from './params/bidding-get-info.params';
import { BiddingInfoAlt } from '../models/bidding-info-alt.interface';
import { biddingInfoAltAdapter } from '../adapters/models/bidding-info-alt.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BiddingRepository {
  private readonly _api = inject(BiddingApiService);

  biddingGetInfo(params: BiddingGetInfoParams): Observable<BiddingInfoAlt> {
    return this._api.biddingGetInfo(biddingGetInfoAdapter(params)).pipe(
      map((res) => biddingInfoAltAdapter(res?.data))
    );
  }

}
