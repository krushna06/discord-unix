document.addEventListener('DOMContentLoaded', function() {
    flatpickr('#date', {
        altInput: true,
        altFormat: 'Y-m-d',
        dateFormat: 'Y-m-d',
    });

    flatpickr('#time', {
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i',
    });
});

function convertDateTimeToTimestamp() {
    const dateInput = document.getElementById('date').value;
    const timeInput = document.getElementById('time').value;
    const format = document.getElementById('format').value;
    const dateTimeString = dateInput + 'T' + timeInput;
    const dateTime = new Date(dateTimeString);
    const unixTimestamp = Math.floor(dateTime.getTime() / 1000);
    const result = formatTimestamp(unixTimestamp, format);
    document.getElementById('result').innerText = result;
}

function formatTimestamp(timestamp, format) {
    const date = new Date(timestamp * 1000);

    switch (format) {
        case 'D':
            return `<t:${timestamp}:D>`;
        case 'F':
            return `<t:${timestamp}:F>`;
        case 't':
            return `<t:${timestamp}:t>`;
        case 'd':
            return `<t:${timestamp}:D>`;
        case 'T':
            return `<t:${timestamp}:T>`;
        case 'R':
            return `<t:${timestamp}:R>`;
        case 'H':
            return `<t:${timestamp}:T>`;
        default:
            return 'Invalid format';
    }
}
