public class RetreiveRelatedFiles {

    public list<ContentDocumentLink> cdl {get;set;}

    public RetreiveRelatedFiles()
    {
    String  currentId = Apexpages.currentPage().getParameters().get('id');
    cdl = [SELECT id, ContentDocument.LatestPublishedVersionId, ContentDocument.title, ContentDocumentId FROM ContentDocumentLink WHERE LinkedEntityId = :currentId];
    }
}