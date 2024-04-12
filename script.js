const data = document.getElementById('data');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    let day = dateToday.getDate();
    let month = dateToday.getMonth() + 1; // JavaScript conta os meses a partir de 0, então adicionamos 1
    let year = dateToday.getFullYear();

    // Formatação dos números para garantir que tenham sempre dois dígitos
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;
    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;

    // Atualização do conteúdo do elemento "data"
    data.textContent = `${day}/${month}/${year}`;

    // Atualização do conteúdo dos elementos de horas, minutos e segundos
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
});
