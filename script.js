document.addEventListener('DOMContentLoaded', () => {
    const scheduleList = document.getElementById('schedule-list');

    // Загружаем расписание с помощью Fetch API
    fetch('https://vitalokek2.github.io/test228/расписание.txt')
        .then(response => response.text())
        .then(data => {
            // Разбиваем текст на строки
            const lines = data.split('\n').filter(line => line.trim() !== '');
            
            // Создаем элементы списка для каждой строки
            lines.forEach(line => {
                const li = document.createElement('li');
                li.textContent = line;
                scheduleList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Ошибка загрузки расписания:', error);
            scheduleList.innerHTML = '<li>Не удалось загрузить расписание.</li>';
        });
});