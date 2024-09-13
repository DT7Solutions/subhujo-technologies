
// contact form 
$(document).on('submit', '#contact-form', function(event){
    event.preventDefault();
    $('.contact-form-alert').html(" ")
    $.ajax({
        type:'POST',
        url:'/contact/',
        cache:false,
        enctype:'multipart/form-data',
        data:{
            name:$('#name').val(),
            email:$('#email').val(),
            phone:$('#phone').val(),
            subject:$('#subject').val(),
            message:$('#message').val(),
            csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
        },  
           
        success:function(data){
            alert('Your message has been received, We will contact you soon.')
            $('contact-form')[0].reset();
            $('.contact-form-alert').append("Your message has been received, We will contact you soon.")
        },
        error:function(data){
            alert('Your message has been faild, please try agian.')
            $('.contact-form-alert').append("Your message has been faild, please try agian.")
        }
    })
  })
  
