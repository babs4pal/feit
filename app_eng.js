// for um4p

function hideUnimelb() {
    // strictly a shortcut, need to change the way this work once more templates for Monash are available
    document.getElementById("UnimelbOnly").style.display = "none"
}

// Uncomment the below for launch
function showUnimelb() { 
    // strictly a shortcut, need to change this once more templates for monash are available
    // document.getElementById("UnimelbOnly").style.display = "block" 
}

// function alertTempMelbFunc() {
    
// }
function generateTemplate() {

    document.getElementById("copyAlertEmails").style.display = "none"
    document.getElementById("copyAlertSubject").style.display = "none"
    document.getElementById("copyAlertBody").style.display = "none"
    document.getElementById("copyAlertFinal").style.display = "none"
    document.getElementById("alertNoTicks").style.display = "none"
    // document.getElementById("alertTempMelb").style.display = "none"

    let personName = document.getElementById('name').value
    
    var templateCheck = []

    let recipientList = "mark.cassidy@unimelb.edu.au"
    document.getElementById("alertNoTicks").style.display = "none"
    // document.getElementById("UnimelbOnly").style.display = "none"
    document.getElementById("autofillButton").style.display = "block"
    document.getElementById("finaloutputtext").style.display = "block"
    document.getElementById("finaloutput").style.display = "block"
    document.getElementById("showtemplate_1").style.display = "block"
    document.getElementById("showtemplate_2").style.display = "block"
    
    let recipientNameListSpaced = "Professor Mark Cassidy"
    let bulkmessage = "We email you with concern that the University of Melbourne has yet to meet the expectations set by its promise to disclose on May 24, 2024. We were promised that beginning in June, the university would progressively release further information in regards to its research projects and grant agreements. Hereto, we have seen a disappointing level of disclosure that hardly suppresses what one can find on Google.\n\nIn this regard, we are worried that there has been no genuine attempt at disclosure from our university because the nature of disclosure should encompass information that was kept hidden or otherwise private from the university's community.\n\nWe look forward to hearing further clarification on what the current status quo is—if the university will take further actions in its promise to disclose or if it is simply happy to stop at empty promises."
    var finalmessage = "Dear "+recipientNameListSpaced+", \n "+bulkmessage+" \n\n Regards, \n "+personName+" \n A concerned member of the University of Melbourne's community."
    document.getElementById("subjectField").value = document.querySelector('input[name="templatecheck"]:checked').value;

    document.getElementById('recipientField').value = recipientList
    
    document.getElementById('templateField').innerHTML = finalmessage
    document.getElementById('finaloutput').innerHTML = "mailto:"+recipientList+"?subject="+encodeURIComponent(document.getElementById("subjectField").value)+"&body= "+encodeURIComponent(document.getElementById('templateField').innerHTML)+""
}
// function tickall(source) {
//     // mybool = document.getElementById()
//     checkboxes = document.getElementsByName("recipients")
    
//     for (i = 0; i < checkboxes.length; i++)  {
//         checkboxes[i].checked = source.checked
//     }

// }

function openMailClient() {
    // url = document.getElementById('finaloutput').value
    url = "mailto:"+document.getElementById("recipientField").value+"?subject="+encodeURIComponent(document.getElementById("subjectField").value)+"&body= "+encodeURIComponent(document.getElementById('templateField').value)+""
    window.open(url)
}

function copyButtonRecipients() {

    var copyText = document.getElementById("recipientField");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
    document.getElementById("copyAlertEmails").style.display = "block"

    
} 

function copyButtonSubject() {

    var copyText = document.getElementById("subjectField");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
    document.getElementById("copyAlertSubject").style.display = "block"

    
} 

function copyButtonBody() {

    var copyText = document.getElementById("templateField");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
    document.getElementById("copyAlertBody").style.display = "block"

    
} 
function copyButtonFinal() {

    var copyText = "mailto:"+document.getElementById("recipientField").value+"?subject="+encodeURIComponent(document.getElementById("subjectField").value)+"&body= "+encodeURIComponent(document.getElementById('templateField').value)+""
  
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
    document.getElementById("copyAlertFinal").style.display = "block"
    
} 

