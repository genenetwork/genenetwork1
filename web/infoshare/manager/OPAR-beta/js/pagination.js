// Basic example
$(document).ready(function () {
  $('#dtBasicExample').DataTable({
    "pagingType": "simple" // "simple" option for 'Previous' and 'Next' buttons only
  });
  $('.dataTables_length').addClass('bs-select');
});