const resources = [
    { category: 'articles', title: 'Introducere în HTML', description: 'Aflați bazele HTML-ului.', level: 'beginner', domain: 'development' },
    { category: 'templates', title: 'Template CV', description: 'Descărcați un template de CV.', level: 'intermediate', domain: 'design' },
    { category: 'videos', title: 'Tutorial CSS', description: 'Tutorial complet despre CSS.', level: 'beginner', domain: 'development' },
];

function renderResources() {
    resources.forEach(resource => {
        const list = document.getElementById(resource.category);
        const item = document.createElement('div');
        item.classList.add('resource-item');
        item.innerHTML = `
            <h3>${resource.title}</h3>
            <p>${resource.description}</p>
        `;
        list.appendChild(item);
    });
}

document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    console.log('Search for:', query);
});

renderResources();
