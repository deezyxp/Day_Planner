function renderCalendar() {
    $(document).ready(function () {
      let momentVar = moment().format('dddd, MMMM Do, YYYY h:mm a');
      let workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM",
        "5PM"]
  
    //   Display current day at the top of the calendar
      function currentDay() {
        let currentDay = $("#currentDay").text(momentVar);
        return currentDay;
      }
  
      currentDay();
  
    //   Display timeblocks for working hours 9-5
      for (i = 0; i < workHours.length; i++) {
        let row = $("<div>").addClass("row");
        let timeCol = $("<text-area>").text(workHours[i]).addClass("hour");
        let inputCol = $("<input>").attr("placeholder", "Enter note here").addClass("time-block");
        saveBtn = $("<button>").addClass("btn btn-primary saveBtn").text("SAVE");
        $(row).append(timeCol).append(inputCol).append(saveBtn);
        $("#calendar").append(row);
      }

  })}
  renderCalendar();