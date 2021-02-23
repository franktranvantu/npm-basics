var employeeXhr = new XMLHttpRequest();
employeeXhr.onreadystatechange = function () {
  if(employeeXhr.readyState === 4 && employeeXhr.status === 200) {
    var employees = JSON.parse(employeeXhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
employeeXhr.open('GET', 'data/employees.json');
employeeXhr.send();

var roomXhr = new XMLHttpRequest();
roomXhr.onreadystatechange = function () {
  if(roomXhr.readyState === 4 && roomXhr.status === 200) {
    var rooms = JSON.parse(roomXhr.responseText);
    var statusHTML = '<ul class="rooms">';
    for (var i=0; i<rooms.length; i += 1) {
      if (rooms[i].available === true) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += rooms[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};
roomXhr.open('GET', 'data/rooms.json');
roomXhr.send();