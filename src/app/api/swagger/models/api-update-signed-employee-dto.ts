/* tslint:disable */
/* eslint-disable */
export interface ApiUpdateSignedEmployeeDto {
  EmployeeId?: number;
  signatureForEmployeeFilesObject?: ({
[key: string]: string;
}) | null;
  signatureForEmployeeObject?: string | null;
  signdata?: string | null;
}
