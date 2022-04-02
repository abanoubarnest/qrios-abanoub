
export interface VerificationDocument {
    id: string;
    documentType: DocumentType[];
    verifiedBy: any;
    files: any[];
    localUploadData: VerificationDocumentUploadedByAgent;
    isBeingDeleted: boolean;
    lastModified: Date;
}
export interface VerificationBusinessDocument {
    documentID: string;
    documentType: DocumentType[];
    createdBy: string;
    uploadedDate: Date;
    fileId: string;
    fileName: string;
    lastModified: Date;
    isPdf?:boolean
}

export interface VerificationDocumentUploadedByAgent {
    file: File;
    name?: string;
}
