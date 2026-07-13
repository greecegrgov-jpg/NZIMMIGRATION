// ======================================================
// NZL VISA ADMIN DASHBOARD
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    const addVisa = document.getElementById("addVisa");
    const records = document.getElementById("records");
    const search = document.getElementById("search");
    const logout = document.getElementById("logout");

    if(addVisa){

        addVisa.addEventListener("click", showAddVisaForm);

    }

    if(records){

        records.addEventListener("click", showRecords);

    }

    if(search){

        search.addEventListener("click", showSearch);

    }

    if(logout){

        logout.addEventListener("click", logoutAdmin);

    }

});
