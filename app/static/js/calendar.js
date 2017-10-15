$(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        // put your options and callbacks here
        viewRender: function(view, element) {
            console.log('this happens');
        },
        events: [
            {
                title  : 'Levothyroxine',
                start  : '2017-10-18T09:00:00',
                allDay : false,
                quantity: "90",
                description: 'Take one tablet by mouth daily. Best taken in the morning. With or without food.'
            },
            {
                title  : 'Vitamin D 50,000',
                start  : '2017-10-30T09:00:00',
                allDay : false,
                quantity: "12",
                description: 'Take one tablet by mouth every week.'
            },
            {
                title  : 'Lisinopril',
                start  : '2017-10-15T09:00:00',
                allDay : false,
                quantity: "30",
                description: 'Take one tablet by mouth daily.'
            },
            {
                title  : 'Alendronate',
                start  : '2017-10-19T12:00:00',
                allDay : false, // will make the time show
                quantity: "4",
                description: 'Take one tablet by mouth every week.'
            }
        ],
        eventClick: function (event) {
            console.log(event);
            // element.attr('href', 'javascript:void(0);');
            // element.click(function() {
                $('#myModal').modal('show')
                $( "div.second" ).text(event.title);
                $( "div.first" ).text(event.quantity);
                $( "div.third" ).text(event.description);
                
            // });
        }
        
    });

    $( "#submitbutton" ).click(function() {
        $( "#phnumber" ).text();
        var phone = $('#phnumber').val();
        console.log(phone);
    });


});