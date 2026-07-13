// ======================================
// ADMIN PANEL
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    const addVisa = document.getElementById("addVisa");

    if(addVisa){

        addVisa.addEventListener("click", showAddVisaForm);

    }

});


// ======================================
// ADD VISA FORM
// ======================================

function showAddVisaForm(){

    document.getElementById("pageContent").innerHTML = `

        <h1>Add New Visa</h1>

        <div class="card">

            <form class="admin-form">

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

                        <option>Male</option>

                        <option>Female</option>

                    </select>

                </div>

                <div class="admin-row">

                    <label>Visa Start Date</label>

                    <input type="date" id="visaStart">

                </div>

                <div class="admin-row">

                    <label>PDF File</label>

                    <input type="file" id="pdf">

                </div>

                <button type="button" class="save-btn">

                    Save Visa

                </button>

            </form>

        </div>

    `;

}
