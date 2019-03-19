public class RetreiveRelatedLinks {

    public list<ContentDocumentLink> cdl {get;set;}
    public list<ContentDistribution> cd {get;set;}
    List<String> contentDocIds = new List<String>();

    public RetreiveRelatedLinks()
    {
        String  currentId = Apexpages.currentPage().getParameters().get('id');
        cdl = [SELECT id, ContentDocument.LatestPublishedVersionId, ContentDocument.title, ContentDocumentId FROM ContentDocumentLink WHERE LinkedEntityId = :currentId];
        
        for(contentDocumentLink c : cdl) {
            contentDocIds.add(c.ContentDocumentId);
        }
        cd = [SELECT Id, CreatedDate, OwnerId, Name, ContentVersionId, ContentDocumentId, RelatedRecordId, DistributionPublicUrl, ContentDownloadUrl, PdfDownloadUrl FROM ContentDistribution WHERE ContentDocumentId in :contentDocIds];

    }
}