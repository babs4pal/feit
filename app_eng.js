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
    let posName = document.querySelector('input[name="poscheck"]:checked').value
    
    var templateCheck = []

    // let recipientList = "ken.jefferd@unimelb.edu.au; s.prawer@unimelb.edu.au;"
    let recipientList = "vc@unimelb.edu.au; cboles@unimelb.edu.au;"
    
    document.getElementById("alertNoTicks").style.display = "none"
    // document.getElementById("UnimelbOnly").style.display = "none"
    document.getElementById("autofillButton").style.display = "block"
    document.getElementById("finaloutputtext").style.display = "block"
    document.getElementById("finaloutput").style.display = "block"
    document.getElementById("showtemplate_1").style.display = "block"
    document.getElementById("showtemplate_2").style.display = "block"
    
    let recipientNameListSpaced = "Vice-Chancellor Emma Johnston"
    // let bulkmessage = "I am deeply concerned and distressed that the University of Melbourne has an ongoing partnership with Hebrew University, whose campus is partially built on stolen Palestinian land in occupied East Jerusalem, in violation of international law. It also hosts the Havatzalot program, effectively a military base on campus that includes combat training for members of the IOF, as well as recruitment events for Shin Bet. The same IOF soldiers trained at Hebrew University are now at the forefront of the genocide in Gaza. \n\n I would like to echo the call from groups such as Unimelb for Palestine (UM4P) and the Unimelb branch of the NTEU and demand the University cut all ties with these institutions that have long played a willing role in planning, perpetuating, and justifying Israel's regime of illegal occupation, settler-colonialism and apartheid. This includes Hebrew University."

    let bulkmessage = "I write to urge you to revoke the expulsions and suspensions imposed on the four student protesters following the campus sit-in on 9 October 2024.  \n\n I urge you to have a fresh look at exactly what these students were said to have done and then reflect on their motivations. This was not a personal campaign against any individual university staff member. It was a non-violent action aiming to highlight the university’s academic relations with Israeli universities, including Hebrew University of Jerusalem. The protest took place in the office space of the staff member who coordinates the academic partnership.\n\n The students were right to condemn Melbourne University’s formal connection with Hebrew University: it has been on the Boycott Divest Sanction list since 2004. Hebrew University has particularly close ties to the Israeli military through the Havatzalot Program. The Havatzalot Program conducts combat and intelligence training for soldiers on Hebrew University’s campus, which is partially built on illegally occupied land in East Jerusalem. You are a distinguished and experienced academic and you have built your career on the creation and dissemination of data: I urge you to inform yourself about these links with what the International Court of Justice has referred to as genocidal activity and what the UN Secretary-General has referred to as ethnic-cleansing in Palestine. For the University to continue with these links makes its putative commitment to decolonisation of the curriculum and research ring hollow.\n\n These four students, along with students all around the world, have been courageously and tirelessly advocating for innocent civilians in Palestine for over 18 months, while those in positions of power have – at best – looked the other way. I urge you to have regard to the courage and compassion shown by your students, and then ask yourself – do they really deserve these penalties?\n\n Professor Johnston - is it possible that this occasion provides the university with an opportunity to change course, and stand with Palestine? The tide is turning. Individuals and organisations who were previously unquestioning in their allegiance to the state of Israel are now quickly distancing themselves. It is well past time for Melbourne University to do the same. The change in language and the threats of concrete sanctions by the leaders of the UK, Canada and France are having a knock-on effect. Australia's representative to the United Nations has just directly endorsed recognising Palestinian statehood to build ‘momentum towards a two-state solution’ ahead of a critical UN conference on Palestinian statehood in New York next month. The change in narrative is also evident in mainstream media. No-one is going to want to be the last one standing with the leaders of Israel during a period that the UN Secretary-General has called ‘ethnic cleansing’.  The University of Melbourne needs to join with the other universities (such as Trinity College, Dublin and the University of Barcelona) to cut all ties with Israel’s academic military-industrial complex. Will you seize the opportunity, pardon the students, cut all ties with the academic military-industrial complex, and sever all ties with universities that are complicit in the war crimes we are all witnessing? \n"
    if ((personName == null || personName == "")) {
        var finalmessage = "Dear "+recipientNameListSpaced+", \n\n As "+posName+", "+bulkmessage+" \n\n Regards, \n A concerned member of the University of Melbourne's community."
    } else {
        var finalmessage = "Dear "+recipientNameListSpaced+", \n My name is "+personName+". As "+posName+", "+bulkmessage+" \n\n Regards, \n "+personName+" \n A concerned member of the University of Melbourne's community."
    }
    // document.getElementById("subjectField").value = document.querySelector('input[name="templatecheck"]:checked').value;

    document.getElementById("subjectField").value = "Please revoke the expulsions and suspensions for the four student protesters"
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

