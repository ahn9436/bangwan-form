// age selector
document.addEventListener('DOMContentLoaded', function() {
    let select = document.getElementById('familymember');
    let ageInputsContainer = document.getElementById('ageInputsContainer');

    // Add event listener for change in number of family members
    select.addEventListener('change', function() {
        let familyMembersCount = parseInt(select.value);

        // Clear all existing input fields
        ageInputsContainer.innerHTML = '';

        // Generate input fields based on family members count
        for (let i = 1; i <= familyMembersCount; i++) {
            let input = document.createElement('input');
            input.type = 'number';
            input.placeholder = `อายุคนที่ ${i}`;
            input.required = true;
            input.className = 'ageInput'; // Add class for styling
            ageInputsContainer.appendChild(input);
        }
    });
});

//button reset
const resetStatus = document.getElementById("resetDisplayer");
const resetBtn = document.getElementById("resetBtn");
const cancelReset = document.getElementById("cancelReset");
const reset = document.getElementById("reset")

resetBtn.addEventListener("click", event => {
    resetStatus.style.display = "flex";
})
cancelReset.addEventListener("click", event => {
    resetStatus.style.display = "none";
})
reset.addEventListener("click", event => {
    resetStatus.style.display = "none"
})
