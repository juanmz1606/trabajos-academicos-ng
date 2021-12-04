document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {

  });
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {
    opacity: 0.8
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, {
  });
});

function initSelectById(id) {
  var elems = document.querySelector('#'+ id);
  var instances = M.FormSelect.init(elems, {});
}