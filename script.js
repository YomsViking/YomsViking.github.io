function openPage(id) {
    // Данные для каждой страницы
    const pages = {
        1: { title: "Страница 1", text: "Это содержимое для name1." },
        2: { title: "Страница 2", text: "Это содержимое для name2." },
        3: { title: "Страница 3", text: "Это содержимое для name3." },
        4: { title: "Страница 4", text: "Это содержимое для name4." },
        5: { title: "Страница 5", text: "Это содержимое для name5." },
        6: { title: "Страница 6", text: "Это содержимое для name6." },
    };

    // Обновляем контент
    document.getElementById("contentTitle").innerText = pages[id].title;
    document.getElementById("contentText").innerText = pages[id].text;

    // Показываем контент и скрываем главную сетку
    document.getElementById("mainGrid").style.display = "none";
    document.getElementById("title").style.display = "none";
    document.getElementById("content").style.display = "block";
}

function goBack() {
    // Показываем главную сетку и скрываем контент
    document.getElementById("mainGrid").style.display = "grid";
    document.getElementById("title").style.display = "block";
    document.getElementById("content").style.display = "none";
}
