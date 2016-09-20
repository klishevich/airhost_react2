$(function() {    


    // Switchery toggles
    // ------------------------------

    var switches = Array.prototype.slice.call(document.querySelectorAll('.switch'));
    switches.forEach(function(html) {
        var switchery = new Switchery(html, {color: '#4CAF50'});
    });

    $('.select').select2({
        minimumResultsForSearch: Infinity
    });


    
    // Schedule
    // ------------------------------

    // Add events
    var eventsColors = [
        {
            title: 'All Day Event',
            start: '2014-11-01',
            color: '#EF5350'
        },
        {
            title: 'Long Event',
            start: '2014-11-07',
            end: '2014-11-10',
            color: '#26A69A'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: '2014-11-09T16:00:00',
            color: '#26A69A'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: '2014-11-16T16:00:00',
            color: '#5C6BC0'
        },
        {
            title: 'Conference',
            start: '2014-11-11',
            end: '2014-11-13',
            color: '#546E7A'
        },
        {
            title: 'Meeting',
            start: '2014-11-12T10:30:00',
            end: '2014-11-12T12:30:00',
            color: '#546E7A'
        },
        {
            title: 'Lunch',
            start: '2014-11-12T12:00:00',
            color: '#546E7A'
        },
        {
            title: 'Meeting',
            start: '2014-11-12T14:30:00',
            color: '#546E7A'
        },
        {
            title: 'Happy Hour',
            start: '2014-11-12T17:30:00',
            color: '#546E7A'
        },
        {
            title: 'Dinner',
            start: '2014-11-12T20:00:00',
            color: '#546E7A'
        },
        {
            title: 'Birthday Party',
            start: '2014-11-13T07:00:00',
            color: '#546E7A'
        },
        {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2014-11-28',
            color: '#FF7043'
        }
    ];


    // Initialize calendar with options
    $('.schedule').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: '2014-11-12',
        editable: true,
        events: eventsColors
    });


    // Render in hidden elements
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $('.schedule').fullCalendar('render');
    });
});
