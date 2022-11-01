export class BulkEmailWithTemplate {
    id: number;
    sender: string;
    toAddresses: Array<String>;
    ccAddresses: Array<String>;
    bccAddresses: Array<String>;
    templateName: string;
    defaultTemplateData: string;
    name:string;
}
