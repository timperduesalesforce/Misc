window._snapinsSnippetSettingsFile = (function() {
	console.log("Snippet settings file loaded.");	// Logs that the snippet settings file was loaded successfully
		
	embedded_svc.snippetSettingsFile.directToButtonRouting = function(prechatFormData) {
	if(prechatFormData[3].value === "MS") {
		console.log("direct to button routing initiated - MS.");
		alert("Alert: direct to button routing initiated - MS!");
		return "5730x0000004CAL_730x0000004CMl"
		}
	else if (prechatFormData[3].value === "CV") {
		console.log("direct to button routing initiated - CV.");
		alert("Alert: direct to button routing initiated - CV!");
		return "5730x000000CaaT_5730x0000004CMl"
		}
  else if (prechatFormData[3].value === "PACS") {
		console.log("direct to button routing initiated - PACS.");
		alert("Alert: direct to button routing initiated - PACS!");
		return "5730x000000CaaY_730x0000004CMl"
		}
  else if (prechatFormData[3].value === "RIS") {
		console.log("direct to button routing initiated - RIS.");
		alert("Alert: direct to button routing initiated - RIS!");
		return "5730x000000Caai_5730x0000004CMl"
		}
  else if (prechatFormData[3].value === "VNA") {
		console.log("direct to button routing initiated - VNA.");
		alert("Alert: direct to button routing initiated - VNA!");
		return "5730x000000Caad_730x0000004CMl"
		}
}	
	
embedded_svc.snippetSettingsFile.extraPrechatFormDetails = [{"label":"Product", "transcriptFields":["Product__c"]}];

	})();