



class EventsManager {
    constructor() {
        this.obtenerDataInicial()
    }


    obtenerDataInicial() {
        let url = '../server/getEvents.php'
        $.ajax({
          url: url,
          cache: false,
          type: 'GET',
          success: (data) =>{

            if (data) {
              data = JSON.parse(data)
              this.obtenerJson(data)
            }else {
              alert(data.msg)
              window.location.href = 'index.html';
            }
          },
          error: function(){
            alert("error en la comunicación con el servidor");
          }
        })

    }

    obtenerJson(data){
      var json ;
      for (var i = 0; i<data.title.length; i++){
        if(i == 0){
          json = '[{"id":"'+data.id[i]+'","title":"'+data.title[i]+'","end":"'+data.end[i]+'","allDay":"'+data.allDay[i]+'","start":'+'"'+data.start[i]+'"}'
        }  else{
          json += ',{"id":"'+data.id[i]+'","title":"'+data.title[i]+'","end":"'+data.end[i]+'","allDay":"'+data.allDay[i]+'","start":'+'"'+data.start[i]+'"}'
        }

      }
      json += ']'
      json = JSON.parse(json)
      this.poblarCalendario(json)
    }

    poblarCalendario(eventos) {
        $('.calendario').fullCalendar({
            header: {
        		left: 'prev,next today',
        		center: 'title',
        		right: 'month,agendaWeek,basicDay'
        	},
        	defaultDate: '2018-01-01',
        	navLinks: true,
        	editable: true,
        	eventLimit: true,
          droppable: true,
          dragRevertDuration: 0,
          timeFormat: 'H:mm',
          eventDrop: (event) => {
              this.actualizarEvento(event)
          },
          events: eventos,
          eventDragStart: (event,jsEvent) => {
            $('.delete-btn').find('img').attr('src', "img/trash-open.png");
            $('.delete-btn').css('background-color', '#a70f19')
          },
          eventDragStop: (event,jsEvent) =>{
            var trashEl = $('.delete-btn');
            var ofs = trashEl.offset();
            var x1 = ofs.left;
            var x2 = ofs.left + trashEl.outerWidth(true);
            var y1 = ofs.top;
            var y2 = ofs.top + trashEl.outerHeight(true);
            if (jsEvent.pageX >= x1 && jsEvent.pageX<= x2 &&
                jsEvent.pageY >= y1 && jsEvent.pageY <= y2) {
                  this.eliminarEvento(event, jsEvent)
                  $('.calendario').fullCalendar('removeEvents', event.id);
            }

          }
        })
    }

    anadirEvento(){
      var titulo = $('#titulo').val();
      var start_date = $('#start_date').val();
      var allDay = document.getElementById('allDay').checked;
      if (!document.getElementById('allDay').checked){
        var end_date = $('#end_date').val();
        var end_hour = $('#end_hour').val();
        var start_hour = $('#start_hour').val();
      } else {
        var end_date = "";
        var end_hour = "";
        var start_hour = "";
      }

      $.ajax({
        url: '../server/new_event.php',
        cache: false,
        data: {titulo: titulo, start_date: start_date, allDay: allDay, end_date: end_date, end_hour: end_hour, start_hour:start_hour},
        type: 'POST',
        success: (data) =>{
          data = JSON.parse(data)
          if (data.msg=="OK") {
            alert('Se ha añadido el evento exitosamente')
            if (document.getElementById('allDay').checked) {
              $('.calendario').fullCalendar('renderEvent', {
                title: $('#titulo').val(),
                start: $('#start_date').val(),
                allDay: true
              })
            }else {
              $('.calendario').fullCalendar('renderEvent', {
                title: $('#titulo').val(),
                start: $('#start_date').val()+" "+$('#start_hour').val(),
                allDay: false,
                end: $('#end_date').val()+" "+$('#end_hour').val()
              })
            }




          }else {
            alert(data.msg)
          }
        },
        error: function(){
          alert("error en la comunicación con el servidor");
        }
      })

    }

    eliminarEvento(event, jsEvent){
      var id = event.id;
      $.ajax({
        url: '../server/delete_event.php',
        cache: false,
        data: {id:id},
        type: 'POST',
        success: (data) =>{
          console.log(data);
          data = JSON.parse(data);
          if (data.msg=="OK") {
            alert('Se ha eliminado el evento exitosamente')
          }else {
            alert(data.msg)
          }
        },
        error: function(){
          alert("error en la comunicación con el servidor");
        }
      })
      $('.delete-btn').find('img').attr('src', "img/trash.png");
      $('.delete-btn').css('background-color', '#8B0913')
    }

    actualizarEvento(evento) {
        let id = evento.id,
            start = moment(evento.start).format('YYYY-MM-DD HH:mm:ss'),
            end = moment(evento.end).format('YYYY-MM-DD HH:mm:ss');


        var start_date = start.substr(0,10)
        var end_date = end.substr(0,10)
        var start_hour = start.substr(11,8)
        var end_hour = end.substr(11,8)

        $.ajax({
          url: '../server/update_event.php',
          cache: false,
          data: {start_date:start_date,end_date:end_date,start_hour:start_hour,end_hour:end_hour, id:id},
          type: 'post',
          success: (data) =>{
            data = JSON.parse(data);
            if (data.msg=="OK") {
              alert('Se ha actualizado el evento exitosamente')
            }else {
              alert(data.msg)
            }
          },
          error: function(){
            alert("error en la comunicación con el servidor");
          }
        })
    }

}


$(function(){
  initForm();
  var e = new EventsManager();
  $('form').submit(function(event){
    event.preventDefault()
    e.anadirEvento()
  })
});



function initForm(){
  $('#start_date, #titulo, #end_date').val('');
  $('#start_date, #end_date').datepicker({
    dateFormat: "yy-mm-dd"
  });
  $('.timepicker').timepicker({
    timeFormat: 'HH:mm',
    interval: 30,
    minTime: '5',
    maxTime: '23:30',
    defaultTime: '7',
    startTime: '5:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true
  });
  $('#allDay').on('change', function(){
    if (this.checked) {
      $('.timepicker, #end_date').attr("disabled", "disabled")
    }else {
      $('.timepicker, #end_date').removeAttr("disabled")
    }
  })

}
