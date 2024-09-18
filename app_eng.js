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

    let recipientList = "ken.jefferd@unimelb.edu.au; s.prawer@unimelb.edu.au;"
    document.getElementById("alertNoTicks").style.display = "none"
    // document.getElementById("UnimelbOnly").style.display = "none"
    document.getElementById("autofillButton").style.display = "block"
    document.getElementById("finaloutputtext").style.display = "block"
    document.getElementById("finaloutput").style.display = "block"
    document.getElementById("showtemplate_1").style.display = "block"
    document.getElementById("showtemplate_2").style.display = "block"
    
    let recipientNameListSpaced = "Mr Ken Jefferd and Prof Steven Prawer"
    let bulkmessage = "I am deeply concerned and distressed that the University of Melbourne has an ongoing partnership with Hebrew University, whose campus is partially built on stolen Palestinian land in occupied East Jerusalem, in violation of international law. It also hosts the Havatzalot program, effectively a military base on campus that includes combat training for members of the IOF, as well as recruitment events for Shin Bet. The same IOF soldiers trained at Hebrew University are now at the forefront of the genocide in Gaza. \n\n I would like to echo the call from groups such as Unimelb for Palestine (UM4P) and the Unimelb branch of the NTEU and demand the University cut all ties with these institutions that have long played a willing role in planning, perpetuating, and justifying Israel's regime of illegal occupation, settler-colonialism and apartheid. This includes Hebrew University."
    var finalmessage = "Dear "+recipientNameListSpaced+", \n My name is "+personName+". As a "+poscheck+", "+bulkmessage+" \n\n Regards, \n "+personName+" \n A concerned member of the University of Melbourne's community."
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

