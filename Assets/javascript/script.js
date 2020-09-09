// Function to create our calendar page
function renderCalendar() {
  $(document).ready(function () {
      let momentVar = moment().format('dddd, MMMM Do, YYYY h:mm a');
      let workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM",
        "5PM"]

        // countdown timer 
      setInterval(() => {
        let realTime = moment().format('dddd, MMMM Do, YYYY h:mm:ss a');
        $("#currentDay").text(realTime);
      }, 1000);

    //   Display current day at the top of the calendar
      function currentDay() {
        let currentDay = $("#currentDay").text(momentVar);
        return currentDay;
      }

    //   Display timeblocks for working hours 9-5
      for (var i = 0; i < workHours.length; i++) {
        let row = $("<div>").addClass("row");
        let timeCol = $("<text-area>").text(workHours[i]).addClass("hour");
        let inputCol = $("<input>").attr("placeholder", "Enter note here").addClass("time-block");
        const currentTimeblockMoment = moment(workHours[i], 'hA');

        if(  currentTimeblockMoment < moment() && currentTimeblockMoment.clone().add(1, 'hours') < moment() ){
          // past
          inputCol = inputCol.addClass('past')
        }
        
        if ( currentTimeblockMoment < moment() && moment() <  currentTimeblockMoment.clone().add(1, 'hours') ) {
          // present
          inputCol = inputCol.addClass('present')
        }

        if(  moment() < currentTimeblockMoment ){
          // future
          inputCol = inputCol.addClass('future')
        }

        saveBtn = $("<button>").addClass("btn btn-primary saveBtn").text("SAVE");
        $(row).append(timeCol).append(inputCol).append(saveBtn);
        $("#calendar").append(row);
      }

  //for loop to add id's to input areas
  function addIdToInput() {
    let inputId = document.getElementsByClassName("toDo-input");
    let length = inputId.length;
    for (i = 0; i < length; i++) {
      inputId[i].id = "input-area-" + (i + 1);
    }
  };
  addIdToInput();

  //for loop to add id's to save buttons
  function addIdToSaveBtn() {
    let saveBtnId = document.getElementsByClassName("saveBtn");
    let length = saveBtnId.length;
    for (i = 0; i < length; i++) {
      saveBtnId[i].id = "saveBtnId-" + (i + 1);
    }
  }
  addIdToSaveBtn();

  let saveBtnId1 = $("#saveBtnId-1");
  let saveBtnId2 = $("#saveBtnId-2");
  let saveBtnId3 = $("#saveBtnId-3");
  let saveBtnId4 = $("#saveBtnId-4");
  let saveBtnId5 = $("#saveBtnId-5");
  let saveBtnId6 = $("#saveBtnId-6");
  let saveBtnId7 = $("#saveBtnId-7");
  let saveBtnId8 = $("#saveBtnId-8");
  let saveBtnId9 = $("#saveBtnId-9");

  let toDoInput1 = $("#input-area-1");
  let toDoInput2 = $("#input-area-2");
  let toDoInput3 = $("#input-area-3");
  let toDoInput4 = $("#input-area-4");
  let toDoInput5 = $("#input-area-5");
  let toDoInput6 = $("#input-area-6");
  let toDoInput7 = $("#input-area-7");
  let toDoInput8 = $("#input-area-8");
  let toDoInput9 = $("#input-area-9");


  let storedInput;

  //click events for each save button 

  $(saveBtnId1).on("click", function (event) {
    event.preventDefault();
    let toDoInput1 = $("#input-area-1").val();
    localStorage.setItem("task1", (toDoInput1));
  });
  let savedInput1 = (localStorage.getItem("task1"));
  toDoInput1.val(savedInput1);

  $(saveBtnId2).on("click", function (event) {
    event.preventDefault();
    let toDoInput2 = $("#input-area-2").val();
    localStorage.setItem("task2", (toDoInput2));
  });
  let savedInput2 = (localStorage.getItem("task2"));
  toDoInput2.val(savedInput2);

  $(saveBtnId3).on("click", function (event) {
    event.preventDefault();
    let toDoInput3 = $("#input-area-3").val();
    localStorage.setItem("task3", (toDoInput3));
  });
  let savedInput3 = (localStorage.getItem("task3"));
  toDoInput3.val(savedInput3);

  $(saveBtnId4).on("click", function (event) {
    event.preventDefault();
    let toDoInput4 = $("#input-area-4").val();
    localStorage.setItem("task4", (toDoInput4));
  });
  let savedInput4 = (localStorage.getItem("task4"));
  toDoInput4.val(savedInput4);

  $(saveBtnId5).on("click", function (event) {
    event.preventDefault();
    let toDoInput5 = $("#input-area-5").val();
    localStorage.setItem("task5", (toDoInput5));
  });
  let savedInput5 = (localStorage.getItem("task5"));
  toDoInput5.val(savedInput5);

  $(saveBtnId6).on("click", function (event) {
    event.preventDefault();
    let toDoInput6 = $("#input-area-6").val();
    localStorage.setItem("task6", (toDoInput6));
  });
  let savedInput6 = (localStorage.getItem("task6"));
  toDoInput6.val(savedInput6);

  $(saveBtnId7).on("click", function (event) {
    event.preventDefault();
    let toDoInput7 = $("#input-area-7").val();
    localStorage.setItem("task7", (toDoInput7));
  });
  let savedInput7 = (localStorage.getItem("task7"));
  toDoInput7.val(savedInput7);

  $(saveBtnId8).on("click", function (event) {
    event.preventDefault();
    let toDoInput8 = $("#input-area-8").val();
    localStorage.setItem("task8", (toDoInput8));
  });
  let savedInput8 = (localStorage.getItem("task8"));
  toDoInput8.val(savedInput8);

  $(saveBtnId9).on("click", function (event) {
    event.preventDefault();
    let toDoInput9 = $("#input-area-9").val();
    localStorage.setItem("task9", (toDoInput9));
  });
  let savedInput9 = (localStorage.getItem("task9"));
  toDoInput9.val(savedInput9);

  })}

  renderCalendar();