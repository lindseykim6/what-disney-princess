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

$.getJSON("data.json", function(data) {
    // now you can do something with this data.
    // remember you can only work with the data in this callback
    // data.title has the title
    // maybe you want to loop through data.questions?
    var ti = $(`#ti`);
    ti.text(`${data.title}`);

    var st = $(`#subtitle`);
    st.text(`${data.subtitle}`);

    var img = document.getElementById("princess_pic");
    img.src= (`${data.mainimg}`);

    var questions= document.getElementsByClassName("header2");
    for(let i =0; i < data.questions.length; i++) {
        questions[i].innerHTML =(`${data.questions[i].question_name}`);
        questions[i].style.backgroundImage =("url("+`${data.questions[i].question_img_url}`+")");
    }

    var pic= document.getElementsByClassName("question_pic");
    var caption= document.getElementsByClassName("caption");
    
    const ind= [0,2,3,5];
    let k=0;
    for(let i =0; i < ind.length; i++) {
        for(let j =0; j < data.questions[ind[i]].answers.length; j++)  {
            pic[k].src =(`${data.questions[ind[i]].answers[j].img_url}`);
            caption[k].innerHTML =(`${data.questions[ind[i]].answers[j].text}`);
            k++;
        }
    }

    var it= document.getElementsByClassName("individual_text");
    const ind2=[1,4];
    k=0;
    for(let i =0; i < ind2.length; i++) {
        for(let j =0; j < data.questions[ind2[i]].answers.length; j++)  {
            it[k].innerHTML =(`${data.questions[ind2[i]].answers[j].text}`);
            k++;
        }
    }

    var input= document.getElementsByClassName("input");
    k=0;
    for(let i =0; i < data.questions.length; i++) {
        for(let j =0; j < data.questions[i].answers.length; j++) {
            input[k].value =(`${data.questions[i].answers[j].outcome}`);
            k++;
        }
    }

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
            var query = $(`#result`);
            if(max_name=="outcome1") {
                document.getElementById("result-image").innerHTML += `<img src =` + data.outcomes.outcome1.img + ` id = "result_pic">`;
                query.text(`${data.outcomes.outcome1.text}`);
            }
            else if(max_name=="outcome2")  {
                document.getElementById("result-image").innerHTML += `<img src =` + data.outcomes.outcome2.img + ` id = "result_pic">`;
                query.text(`${data.outcomes.outcome2.text}`);
            }
            else if(max_name=="outcome3")  {
                document.getElementById("result-image").innerHTML += `<img src =` + data.outcomes.outcome3.img + ` id = "result_pic">`;
                query.text(`${data.outcomes.outcome3.text}`);
            }
            else if(max_name=="outcome4")  {
                document.getElementById("result-image").innerHTML += `<img src =` + data.outcomes.outcome4.img + ` id = "result_pic">`;
                query.text(`${data.outcomes.outcome4.text}`);
            }
            else if(max_name=="outcome5")  {
                document.getElementById("result-image").innerHTML += `<img src =` + data.outcomes.outcome5.img + ` id = "result_pic">`;
                query.text(`${data.outcomes.outcome5.text}`);
            }
            else if(max_name=="outcome6")  {
                document.getElementById("result-image").innerHTML += `<img src =` + data.outcomes.outcome6.img + ` id = "result_pic">`;
                query.text(`${data.outcomes.outcome6.text}`);
            }
            else if(max_name=="outcome7")  {
                document.getElementById("result-image").innerHTML += `<img src =` + data.outcomes.outcome7.img + ` id = "result_pic">`;
                query.text(`${data.outcomes.outcome7.text}`);
            }
            else if(max_name=="outcome8")  {
                document.getElementById("result-image").innerHTML += `<img src =` + data.outcomes.outcome8.img + ` id = "result_pic">`;
                query.text(`${data.outcomes.outcome8.text}`);
            }
            // https://www.w3schools.com/howto/howto_css_modals.asp
            // Used this website to show and use the modal
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


  });