import { FileV2ApiService } from '../../swagger/services/file-v-2-api.service';
import { FileV2DownloadPicturesForOffersParams, fileV2DownloadPicturesForOffersAdapter } from './params/file-v-2-download-pictures-for-offers.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { V2ApiResponseAlt } from '../models/v-2-api-response-alt.interface';
import { v2ApiResponseAltAdapter } from '../adapters/models/v-2-api-response-alt.adapter';

@Injectable({ providedIn: 'root' })
export class FileV2Repository {
  private readonly _api = inject(FileV2ApiService);

  fileV2DownloadPicturesForOffers(params?: FileV2DownloadPicturesForOffersParams): Observable<V2ApiResponseAlt> {
    return this._api.fileV2DownloadPicturesForOffers(fileV2DownloadPicturesForOffersAdapter(params)).pipe(
      map((res) => v2ApiResponseAltAdapter(res))
    );
  }

}
