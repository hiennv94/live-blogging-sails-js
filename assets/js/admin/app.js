// Generated by CoffeeScript 1.8.0
(function() {
  $(function() {
    return $('#frmEvent').on('submit', function() {
      var formData;
      formData = $(this).serialize();
      $.ajax({
        url: '/events',
        type: 'post',
        data: formData,
        beforeSend: function() {
          return $('> *', $(this)).prop('disabled', true);
        }
      }).done(function(res) {
        if (res.errors) {
          $('#errors').empty();
          return $.each(res.errors, function(idx, error) {
            return $('#errors').append("<p>" + error + "</p>");
          });
        } else {
          $('#errors').html('Insert successfull.');
          return $('#content').val('');
        }
      }).fail(function(xhr, ao, err) {
        return alert(err);
      });
      return false;
    });
  });

}).call(this);