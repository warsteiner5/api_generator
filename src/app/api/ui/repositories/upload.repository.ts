import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadApiService } from '../../swagger/services/upload-api.service';
import { UploadByUrlParams, uploadByUrlParamsAdapter } from './params/upload-by-url.params';
import { UploadGetParams, uploadGetParamsAdapter } from './params/upload-get.params';
import { UploadPostParams, uploadPostParamsAdapter } from './params/upload-post.params';
import { UploadPutParams, uploadPutParamsAdapter } from './params/upload-put.params';

@Injectable({ providedIn: 'root' })
export class UploadRepository {
  private readonly _api = inject(UploadApiService);

  uploadByUrl(params?: UploadByUrlParams): Observable<Blob> {
    return this._api.uploadByUrl(uploadByUrlParamsAdapter.adapt(params));
  }

  uploadGet(params?: UploadGetParams): Observable<Blob> {
    return this._api.uploadGet(uploadGetParamsAdapter.adapt(params));
  }

  uploadPost(params?: UploadPostParams): Observable<Blob> {
    return this._api.uploadPost(uploadPostParamsAdapter.adapt(params));
  }

  uploadPut(params?: UploadPutParams): Observable<Blob> {
    return this._api.uploadPut(uploadPutParamsAdapter.adapt(params));
  }

}
