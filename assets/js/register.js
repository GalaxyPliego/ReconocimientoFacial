const btnUser = document.getElementById('btnUser');
const btnAlumno = document.getElementById('btnAlumno');

// Evento para cuando el botón sea pulsado desaparezca el div del formulario
btnUser.addEventListener('click', () => {
    btnUser.style.backgroundColor = '#110F4E';
    btnAlumno.style.backgroundColor = '#1D1B57';
    document.getElementById('formUser').style.display = 'none';
    document.getElementById('formAlumno').style.display = 'block';
});

btnAlumno.addEventListener('click', () => {
        btnUser.style.backgroundColor = '#1D1B57';
    btnAlumno.style.backgroundColor = '#110F4E';
    document.getElementById('formAlumno').style.display = 'none';
    document.getElementById('formUser').style.display = 'block';
});