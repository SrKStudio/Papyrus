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

        const downloadButton = document.createElement('a');
        downloadButton.href = `${module.path}`;
        const buttonElement = document.createElement('button');
        buttonElement.textContent = module.name;
        downloadButton.appendChild(buttonElement);

        mainContent.appendChild(downloadButton);
    });
}

filterModules();