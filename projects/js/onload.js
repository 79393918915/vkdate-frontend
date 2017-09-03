Template7.templates = {};

function template($File, $Data, $ID, $IsPageSetup) {
    $.get(
        $File,
        function (content) {
            Template7.templates[$File] = Template7.compile(content);
            document.getElementById($ID).innerHTML = Template7.templates[$File]($Data);
            if ($IsPageSetup) {
                pageSetUp();
            }
        }
    );
}

/* Menu*/
template('projects/templates/tmpl-searche-list.hbs', false,  'form_search');

function getForm(){
   var Data =  document.forms["forma"].elements["url"].value;
   $.ajax({
          type: 'POST',
          url: 'http://api.vkdate.tmweb.ru/date',
          data: "url=" + Data,
          success: function(data) {
            var number = JSON.parse(data);
            template('projects/templates/tmpl-succes-list.hbs', number,  'form_search');

          },
          error:  function(xhr, str){
        alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
}

window.onload = function () {
};