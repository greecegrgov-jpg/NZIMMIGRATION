document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector(".check-btn");

    button.addEventListener("click", function () {

        const familyName = document.getElementById("familyName").value.trim();
        const nationality = document.getElementById("nationality").value;
        const passportNumber = document.getElementById("passportNumber").value.trim();
        const dob = document.getElementById("dob").value;
        const gender = document.getElementById("gender").value;
        const visaStartDate = document.getElementById("visaStart").value;

        const result = document.getElementById("result");

        result.innerHTML = "";

        const record = visaRecords.find(function(record){

            return (
                record.familyName.toLowerCase() === familyName.toLowerCase() &&
                record.nationality === nationality &&
                record.passportNumber === passportNumber &&
                record.dob === dob &&
                record.gender === gender &&
                record.visaStartDate === visaStartDate
            );

        });

        if(record){

            result.innerHTML = `
                <p class="success">✅ Visa Record Found</p>

                <iframe src="${record.document}"></iframe>

                <br><br>

                <a href="${record.document}" target="_blank" class="print-btn">
                    🖨 Print / Save as PDF
                </a>
            `;

        }else{

            result.innerHTML = `
                <p class="error">
                    ❌ No visa record found.
                </p>
            `;

        }

    });

});
