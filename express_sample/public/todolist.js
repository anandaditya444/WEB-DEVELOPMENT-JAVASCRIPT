   //$ is a jquery function which gets called when page is completely loaded
   // hence we can write all the UI code inside $ body because we are fully
  //confident about that our page is completely loaded and all html elements are provided

$(function(){
    let todobox = $('#newtodo')
    let todobtn = $('#addtodo')
    let todolists = $('#todolist')
    
    todobtn.click(function(){
        let newtodo = todobox.val()
        $.post(                            //jquery request for AJAX requests
            '/todos',
            {Task:newtodo},
            function(data){
                todolists.empty()
                for(todo of data){
                    todolists.append('<li>' + todo.Task + '</li>')
                }

            }
        )
    })
})

