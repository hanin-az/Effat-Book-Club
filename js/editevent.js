window.onload = function() {

  var eventtitle= document.forms["form"]["eventTitle"];
  var starttime = document.forms["form"]["startTime"];
  var endtime = document.forms["form"]["endTime"];
  var eventdate = document.forms["form"]["eventDate"];
  var vps = document.forms["form"]["vps"];
  var location = document.forms["form"]["location"];
  var eventdesc = document.forms["form"]["eventDesc"];
  var myForm = document.getElementById("form");


    eventtitle.addEventListener('keyup', function(){
      eventtitle.style.backgroundColor = "#FFFFFF";
      eventtitle.style.borderColor = "black";
    });
    eventtitle.addEventListener('keyup', function(){
      if(eventtitle.value == ""){
        eventtitle.style.backgroundColor = "#F7BDBD";
        eventtitle.style.borderColor = "#FC0303";
      }
    });

  starttime.addEventListener('change', function(){
    starttime.style.backgroundColor = "#FFFFFF";
    starttime.style.borderColor = "black";
  });
  starttime.addEventListener('change', function(){
    if(starttime.value == ""){
      starttime.style.backgroundColor = "#F7BDBD";
      starttime.style.borderColor = "#FC0303";
    }
  });

  endtime.addEventListener('change', function(){
    endtime.style.backgroundColor = "#FFFFFF";
    endtime.style.borderColor = "black";
  });
  endtime.addEventListener('change', function(){
    if(endtime.value == ""){
      endtime.style.backgroundColor = "#F7BDBD";
      endtime.style.borderColor = "#FC0303";
    }
  });

  eventdate.addEventListener('change', function(){
    eventdate.style.backgroundColor = "#FFFFFF";
    eventdate.style.borderColor = "black";
  });
  eventdate.addEventListener('change', function(){
    if(eventdate.value == ""){
      eventdate.style.backgroundColor = "#F7BDBD";
      eventdate.style.borderColor = "#FC0303";
    }
  });

  vps.addEventListener('keyup', function(){
    vps.style.backgroundColor = "#FFFFFF";
    vps.style.borderColor = "black";
  });
  vps.addEventListener('keyup', function(){
    if(vps.value == ""){
      vps.style.backgroundColor = "#F7BDBD";
    vps.style.borderColor = "#FC0303";
    }
  });

  location.addEventListener('keyup', function(){
    location.style.backgroundColor = "#FFFFFF";
    location.style.borderColor = "black";
  });
  location.addEventListener('keyup', function(){
    if(location.value == ""){
    location.style.backgroundColor = "#F7BDBD";
      location.style.borderColor = "#FC0303";
    }
  });

  eventdesc.addEventListener('keyup', function(){
    eventdesc.style.backgroundColor = "#FFFFFF";
    eventdesc.style.borderColor = "black";
  });
  eventdesc.addEventListener('keyup', function(){
    if(eventdesc.value == ""){
      eventdesc.style.backgroundColor = "#F7BDBD";
      eventdesc.style.borderColor = "#FC0303";
    }
  });


  myForm.onsubmit = function(e){


    if (eventtitle.value == "") {
      eventtitle.style.backgroundColor = "#F7BDBD";
        eventtitle.style.borderColor = "#FC0303";
        e.preventDefault();
    }

    if (starttime.value == "") {
        starttime.style.backgroundColor = "#F7BDBD";
        starttime.style.borderColor = "#FC0303";
        e.preventDefault();
    }

      if (endtime.value == "") {
        endtime.style.backgroundColor = "#F7BDBD";
        endtime.style.borderColor = "#FC0303";
        e.preventDefault();
    }

    if (vps.value == "") {
      vps.style.backgroundColor = "#F7BDBD";
      vps.style.borderColor = "#FC0303";
      e.preventDefault();
  }

  if (eventdesc.value == "") {
    eventdesc.style.backgroundColor = "#F7BDBD";
    eventdesc.style.borderColor = "#FC0303";
    e.preventDefault();
}

  if (eventdate.value == "") {
    eventdate.style.backgroundColor = "#F7BDBD";
    eventdate.style.borderColor = "#FC0303";
    e.preventDefault();
  }

  if (location.value == "") {
    location.style.backgroundColor = "#F7BDBD";
    location.style.borderColor = "#FC0303";
    e.preventDefault();
  }
  
  }

  }
