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
