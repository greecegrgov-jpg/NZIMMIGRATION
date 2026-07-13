/* ===========================================================
   NZL VISA PORTAL
   SCRIPT.JS
   PART 1
   Initialization • Validation • Record Search
=========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =======================================================
       ELEMENTS
    ======================================================= */

    const form = document.querySelector(".form-area");

    const familyName = document.getElementById("familyName");
    const nationality = document.getElementById("nationality");
    const passportNumber = document.getElementById("passportNumber");
    const dob = document.getElementById("dob");
    const gender = document.getElementById("gender");
    const visaStart = document.getElementById("visaStart");
    const consent = document.getElementById("consent");

    const checkButton = document.querySelector(".check-btn");

    const result = document.getElementById("result");

    /* =======================================================
       START
    ======================================================= */

    clearResult();

    /* =======================================================
       BUTTON
    ======================================================= */

    checkButton.addEventListener("click", verifyVisa);

    /* =======================================================
       ENTER KEY
    ======================================================= */

    form.addEventListener("keypress", function(e){

        if(e.key==="Enter"){

            e.preventDefault();

            verifyVisa();

        }

    });

    /* =======================================================
       VERIFY
    ======================================================= */

    function verifyVisa(){

        clearResult();

        if(!validateForm()){

            return;

        }

        showLoading();

        setTimeout(function(){

            searchRecord();

        },600);

    }

    /* =======================================================
       VALIDATION
    ======================================================= */

    function validateForm(){

        if(familyName.value.trim()===""){

            alert("Please enter Family Name.");

            familyName.focus();

            return false;

        }

        if(nationality.value===""){

            alert("Please select Passport Nationality.");

            nationality.focus();

            return false;

        }

        if(passportNumber.value.trim()===""){

            alert("Please enter Passport Number.");

            passportNumber.focus();

            return false;

        }

        if(dob.value===""){

            alert("Please select Date of Birth.");

            dob.focus();

            return false;

        }

        if(gender.value===""){

            alert("Please select Gender.");

            gender.focus();

            return false;

        }

        if(visaStart.value===""){

            alert("Please select Visa Start Date.");

            visaStart.focus();

            return false;

        }

        if(!consent.checked){

            alert("Please confirm the consent checkbox.");

            consent.focus();

            return false;

        }

        return true;

    }

    /* =======================================================
       SEARCH
    ======================================================= */

    function searchRecord(){

        const record = visaRecords.find(function(v){

            return(

                v.familyName.toLowerCase()===familyName.value.trim().toLowerCase()

                &&

                v.nationality===nationality.value

                &&

                v.passportNumber.toUpperCase()===passportNumber.value.trim().toUpperCase()

                &&

                v.dob===dob.value

                &&

                v.gender===gender.value

                &&

                v.visaStartDate===visaStart.value

            );

        });

        if(record){

            showRecord(record);

        }

        else{

            showNoRecord();

        }

    }

    /* =======================================================
       LOADING
    ======================================================= */

    function showLoading(){

        result.innerHTML=`

            <div class="loading">

                Checking visa record...

            </div>

        `;

    }

    /* =======================================================
       CLEAR
    ======================================================= */

    function clearResult(){

        result.innerHTML="";

    }

/* =======================================================
   SHOW RECORD
======================================================= */

function showRecord(record){

    result.innerHTML = `

        <div class="success">

            Visa Record Verified Successfully

        </div>

        <div class="verification-card">

            <h2>Visa Verification Result</h2>

            <div class="verification-grid">

                <strong>Family Name</strong>
                <span>${record.familyName}</span>

                <strong>Passport Number</strong>
                <span>${record.passportNumber}</span>

                <strong>Nationality</strong>
                <span>${record.nationality}</span>

                <strong>Gender</strong>
                <span>${record.gender}</span>

                <strong>Date of Birth</strong>
                <span>${formatDate(record.dob)}</span>

                <strong>Visa Start Date</strong>
                <span>${formatDate(record.visaStartDate)}</span>

                <strong>Status</strong>
                <span style="color:green;font-weight:bold;">
                    VALID
                </span>

            </div>

        </div>

        <iframe
            src="${record.document}"
            id="visaPDF">
        </iframe>

        <br>

        <a
            href="${record.document}"
            target="_blank"
            class="print-btn">

            View / Print / Save as PDF

        </a>

    `;

}

/* =======================================================
   NO RECORD
======================================================= */

function showNoRecord(){

    result.innerHTML = `

        <div class="error">

            No visa record was found.

            <br><br>

            Please check all details and try again.

        </div>

    `;

}

/* =======================================================
   DATE FORMAT
======================================================= */

function formatDate(date){

    const d = new Date(date);

    return d.toLocaleDateString("en-GB",{

        day:"2-digit",

        month:"long",

        year:"numeric"

    });

}

/* =======================================================
   CLEAR FORM
======================================================= */

function clearForm(){

    familyName.value="";

    nationality.selectedIndex=0;

    passportNumber.value="";

    dob.value="";

    gender.selectedIndex=0;

    visaStart.value="";

    consent.checked=false;

}

/* =======================================================
   RESET BUTTON (Future)
======================================================= */

window.resetVisaForm=function(){

    clearForm();

    clearResult();

}
    /* ===========================================================
   PART 3
   FINAL PRODUCTION FUNCTIONS
=========================================================== */

/* ===========================================================
   AUTO UPPERCASE PASSPORT NUMBER
=========================================================== */

passportNumber.addEventListener("input", function(){

    this.value = this.value.toUpperCase();

});


/* ===========================================================
   REMOVE EXTRA SPACES
=========================================================== */

familyName.addEventListener("blur", function(){

    this.value = this.value.trim();

});


/* ===========================================================
   DISABLE BUTTON DURING SEARCH
=========================================================== */

function disableButton(){

    checkButton.disabled = true;

    checkButton.innerHTML = "Checking...";

}


function enableButton(){

    checkButton.disabled = false;

    checkButton.innerHTML = "Check Visa";

}


/* ===========================================================
   OVERRIDE VERIFY
=========================================================== */

const originalVerify = verifyVisa;

verifyVisa = function(){

    disableButton();

    clearResult();

    if(!validateForm()){

        enableButton();

        return;

    }

    showLoading();

    setTimeout(function(){

        searchRecord();

        enableButton();

    },800);

};


/* ===========================================================
   ESC KEY
=========================================================== */

document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        clearResult();

    }

});


/* ===========================================================
   ENTER KEY ON LAST FIELD
=========================================================== */

visaStart.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        e.preventDefault();

        verifyVisa();

    }

});


/* ===========================================================
   PDF OPEN
=========================================================== */

window.openPDF = function(path){

    window.open(path,"_blank");

};


/* ===========================================================
   PRINT PDF
=========================================================== */

window.printPDF = function(path){

    window.open(path,"_blank");

};


/* ===========================================================
   SMALL SUCCESS SOUND (OPTIONAL)
=========================================================== */

function successFeedback(){

    console.log("Visa verified successfully.");

}


/* ===========================================================
   UPDATE RECORD DISPLAY
=========================================================== */

const oldShowRecord = showRecord;

showRecord = function(record){

    oldShowRecord(record);

    successFeedback();

};


/* ===========================================================
   CLEAR RESULT WHEN USER EDITS
=========================================================== */

familyName.addEventListener("input",clearResult);

passportNumber.addEventListener("input",clearResult);

nationality.addEventListener("change",clearResult);

dob.addEventListener("change",clearResult);

gender.addEventListener("change",clearResult);

visaStart.addEventListener("change",clearResult);

consent.addEventListener("change",clearResult);


/* ===========================================================
   FINAL READY MESSAGE
=========================================================== */

console.log("NZL Visa Verification Portal Ready.");
    });
