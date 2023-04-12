// Found styling solution on https://teamtreehouse.com/community/checked-radio-buttons-css
// Adds a 'done' class to the radio when the radio button is modified
$('input[name=freetime]').change(function(){
    $('input[name=freetime]').addClass('initcheck');
});
$('input[name=study]').change(function(){
    $('input[name=study]').addClass('initcheck');
});
$('input[name=date]').change(function(){
    $('input[name=date]').addClass('initcheck');
});
$('input[name=drink]').change(function(){
    $('input[name=drink]').addClass('initcheck');
});
$('input[name=subject]').change(function(){
    $('input[name=subject]').addClass('initcheck');
});
$('input[name=favfood]').change(function(){
    $('input[name=favfood]').addClass('initcheck');
});

$('#princess_pic').click(function(){
    $('#princess_pic').addClass('clickedpic');
});


$('#submit').on('click', function(e) {
    // gather all checked radio-button values
    var choices = $("input[type='radio']:checked").map(function(i, radio) {
      return $(radio).val();
    }).toArray();
    
    console.log(choices)
    let count = {}

    choices.forEach(choice => {
        if(choice.substring(0,choice.length-1) in count) {
            count[choice.substring(0,choice.length-1)] += parseInt(choice.substring(choice.length-1,choice.length));
        }
        else {
            count[choice.substring(0,choice.length-1)]=parseInt(choice.substring(choice.length-1,choice.length));
        }
    })
    
    var sum =0;
    var max = 0;
    var max_name = null;

    console.log(count);

    Object.entries(count).forEach(([k,v]) => {
        sum += v;
        if(v>max)  {
            max = v;
            max_name = k;
        }
    })

    if(choices.length != 6) {
        alert("Please answer all questions!");
    } 
    else{
        document.getElementById("result-image").innerHTML += `<img src ="/pic/` + max_name + `.png" id = "result_pic">`;
        if(max_name=="Snow") {
            max_name= "Snow White"
        }
        // https://www.w3schools.com/howto/howto_css_modals.asp
        // Used this website to show and use the modal
        var query = $(`#result`);
        query.text(`${max_name}`);
        var result_modal=document.getElementById("result-modal");
        result_modal.style.display="flex";

        $('#modal-text').addClass('decorate');
        $('#result_pic').addClass('expand');
        $('#exit').on('click', function(e) {
            result_modal.style.display="none";
            document.getElementById("result-image").innerHTML=''
        })
        
        
    }


  });

  $.getJSON("data.json", function(data) {
    // now you can do something with this data.
    // remember you can only work with the data in this callback
    // data.title has the title
    // maybe you want to loop through data.questions?
    var ti = $(`#ti`);
    ti.text(`${data.title}`);

    var st = $(`#subtitle`);
    st.text(`${data.subtitle}`);

    var questions= document.getElementsByClassName("header2");
    for(let i =0; i < data.questions.length; i++) {
        questions[i].innerHTML =(`${data.questions[i].question_name}`);
    }

    // var pic= document.getElementsByClassName("question_pic");
    // console.log(pic);
    // const ind= [0,2,3,5];
    // for(let i =0; i < ind.length; i++) {
    //     let k=0;
    //     for(let j =0; j < pic.length; j++)  {
    //         pic[j].src =(`${data.questions[ind[i]].answers[k].img_url}`);
    //         if(k==7) {
    //             k =0;
    //         }
    //         else{
    //             k+=1;
    //         }
    //     }
    // }
  });