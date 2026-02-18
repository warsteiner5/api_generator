export interface UpdateSignedEmployee {
  employeeId: number;
  signatureForEmployeeFilesObject: { [key: string]: string; };
  signatureForEmployeeObject: string;
  signdata: string;
}
