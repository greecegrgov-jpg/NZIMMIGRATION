// ======================================================
// NZL VISA ADMIN DASHBOARD
// PART 1
// ======================================================

// ---------------------------
// START
// ---------------------------

document.addEventListener("DOMContentLoaded", function () {

    initializeDashboard();

});


// ---------------------------
// INITIALIZE
// ---------------------------

function initializeDashboard() {

    const addVisa = document.getElementById("addVisa");
    const records = document.getElementById("records");
    const search = document.getElementById("search");
    const logout = document.getElementById("logout");

    if (addVisa) {

        addVisa.addEventListener("click", showAddVisaForm);

    }

    if (records) {

        records.addEventListener("click", showRecords);

    }

    if (search) {

        search.addEventListener("click", showSearch);

    }

    if (logout) {

        logout.addEventListener("click", logoutAdmin);

    }

}


// ---------------------------
// DASHBOARD HOME
// ---------------------------

function showDashboard() {

    document.getElementById("pageContent").innerHTML = `

        <h1>Dashboard</h1>

        <div class="cards">

            <div class="stat-card">

                <h3>Total Visa Records</h3>

                <h2>1</h2>

            </div>

            <div class="stat-card">

                <h3>Uploaded PDFs</h3>

                <h2>1</h2>

            </div>

            <div class="stat-card">

                <h3>Valid Records</h3>

                <h2>1</h2>

            </div>

        </div>

        <div class="records-card">

            <h2>Recent Visa Records</h2>

            <table class="records-table">

                <thead>

                    <tr>

                        <th>Family Name</th>

                        <th>Passport</th>

                        <th>Nationality</th>

                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    <tr>

                        <td>Husnain Ali</td>

                        <td>SU1819363</td>

                        <td>Pakistan</td>

                        <td style="color:green;font-weight:bold;">

                            VALID

                        </td>

                    </tr>

                </tbody>

            </table>

        </div>

    `;

}


// ---------------------------
// RECORDS
// ---------------------------

function showRecords() {

    alert("Visa Records page will be built in Part 3.");

}


// ---------------------------
// SEARCH
// ---------------------------

function showSearch() {

    alert("Search page will be built in Part 3.");

}


// ---------------------------
// LOGOUT
// ---------------------------

function logoutAdmin() {

    if (confirm("Are you sure you want to logout?")) {

        window.location.href = "admin.html";

    }

}
// ======================================================
// ADD NEW VISA
// PART 2
// ======================================================

function showAddVisaForm() {

    document.getElementById("pageContent").innerHTML = `

        <h1>Add New Visa</h1>

        <div class="card">

            <form class="admin-form" id="visaForm">

                <div class="admin-row">
                    <label>Family Name</label>
                    <input type="text" id="familyName">
                </div>

                <div class="admin-row">
                    <label>Nationality</label>
                    <input type="text" id="nationality">
                </div>

                <div class="admin-row">
                    <label>Passport Number</label>
                    <input type="text" id="passportNumber">
                </div>

                <div class="admin-row">
                    <label>Date of Birth</label>
                    <input type="date" id="dob">
                </div>

                <div class="admin-row">
                    <label>Gender</label>

                    <select id="gender">
                        <option value="">Select</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>

                </div>

                <div class="admin-row">
                    <label>Visa Start Date</label>
                    <input type="date" id="visaStart">
                </div>

                <div class="admin-row">
                    <label>PDF Document</label>
                    <input type="file" id="pdf" accept=".pdf">
                </div>

                <button
                    type="button"
                    class="save-btn"
                    id="saveVisaBtn">

                    Save Visa

                </button>

                <div id="saveMessage" style="margin-top:20px;"></div>

            </form>

        </div>

    `;

    document
        .getElementById("saveVisaBtn")
        .addEventListener("click", saveVisa);

}



// ======================================================
// SAVE VISA
// ======================================================

function saveVisa() {

    const familyName =
        document.getElementById("familyName").value.trim();

    const nationality =
        document.getElementById("nationality").value.trim();

    const passportNumber =
        document.getElementById("passportNumber").value.trim();

    const dob =
        document.getElementById("dob").value;

    const gender =
        document.getElementById("gender").value;

    const visaStart =
        document.getElementById("visaStart").value;

    const pdf =
        document.getElementById("pdf").files[0];

    const message =
        document.getElementById("saveMessage");


    if (
        familyName === "" ||
        nationality === "" ||
        passportNumber === "" ||
        dob === "" ||
        gender === "" ||
        visaStart === ""
    ) {

        message.style.color = "red";

        message.innerHTML =
            "Please complete all required fields.";

        return;

    }


    message.style.color = "green";

    message.innerHTML =
        "Visa record validated successfully.";

    console.clear();

    console.log({

        familyName,

        nationality,

        passportNumber,

        dob,

        gender,

        visaStart,

        pdf

    });

}
