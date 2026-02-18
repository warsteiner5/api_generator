import { adaptFileInfoForSignToUI } from '../adapters/toUI/file-info-for-sign.adapter';
import { FileInfoForSign } from '../models/file-info-for-sign.interface';
import { FilesApiService } from '../../swagger/services/files-api.service';
import { FilesByUrlParams, filesByUrlParamsAdapter } from './params/files-by-url.params';
import { FilesDownloadExternalParams, filesDownloadExternalParamsAdapter } from './params/files-download-external.params';
import { FilesDownloadParams, filesDownloadParamsAdapter } from './params/files-download.params';
import { FilesGetInfoForSignParams, filesGetInfoForSignParamsAdapter } from './params/files-get-info-for-sign.params';
import { FilesGetInfosForSignParams, filesGetInfosForSignParamsAdapter } from './params/files-get-infos-for-sign.params';
import { FilesUploadParams, filesUploadParamsAdapter } from './params/files-upload.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FilesRepository {
  private readonly _api = inject(FilesApiService);

  filesByUrl(params?: FilesByUrlParams): Observable<Blob> {
    return this._api.filesByUrl(filesByUrlParamsAdapter.adapt(params));
  }

  filesDownload(params: FilesDownloadParams): Observable<Blob> {
    return this._api.filesDownload(filesDownloadParamsAdapter.adapt(params));
  }

  filesDownloadExternal(params: FilesDownloadExternalParams): Observable<Blob> {
    return this._api.filesDownloadExternal(filesDownloadExternalParamsAdapter.adapt(params));
  }

  filesGetInfoForSign(params?: FilesGetInfoForSignParams): Observable<FileInfoForSign> {
    return this._api.filesGetInfoForSign(filesGetInfoForSignParamsAdapter.adapt(params)).pipe(
      map((res) => adaptFileInfoForSignToUI(res?.data))
    );
  }

  filesGetInfosForSign(params?: FilesGetInfosForSignParams): Observable<FileInfoForSign[]> {
    return this._api.filesGetInfosForSign(filesGetInfosForSignParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptFileInfoForSignToUI(item)))
    );
  }

  filesUpload(params?: FilesUploadParams): Observable<any> {
    return this._api.filesUpload(filesUploadParamsAdapter.adapt(params));
  }

}
