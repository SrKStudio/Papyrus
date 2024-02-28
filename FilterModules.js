function filterModules() {
    const selectedSubject = document.getElementById('subject').value;
    const selectedGrade = document.getElementById('grade').value;
    const selectedQuarter = document.getElementById('quarter').value;

    

    const filteredModules = moduleData.filter(module => {
        return module.subject === selectedSubject &&
               module.grade === selectedGrade &&
               module.quarter === selectedQuarter;
    });

    displayModules(filteredModules);
}

function displayModules(modules) {
    const mainContent = document.getElementById('main-body');
    mainContent.innerHTML = '';

    modules.forEach(module => {

        // Create HTML elements to display each module
        const downloadButton = document.createElement('a');
        downloadButton.href = `${module.path}`; // Adjust the file path based on your structure
        const buttonElement = document.createElement('button');
        buttonElement.textContent = module.name; // Adjust as per your module data structure
        downloadButton.appendChild(buttonElement);

        // Append the button to the main content
        mainContent.appendChild(downloadButton);
    });
}

filterModules();