let playerName
let timer
let point = 100
let error = 0
let counter = 60
timeLeft = counter
score = point - error
let scoreBoard = []
const reset = () => {
// $('.input').off()
$('.scoreBoard').css("display","none")
$('#button2').css("display", "none")
$('#userName').val("")
$('#displayName').text("")
$('#timer').text(counter)
$('#hideInput').css ("display", "block")    
$('#displayName').css ("display", "none")
$('.point').css ("display", "none")//
$('.player').css ("display", "none")
$('.score').css ("display", "none")
$('.timer').css ("display", "none")
$('.quote').css("display", "none")
$('.input').css ("display", "none")
$('.container').css("display", "none")
$('.scoreBoard').css("display", "none")
$('#button').on('click', (event)=>{
playerName = $('#userName').val()
$('#displayName').text(playerName)
$('#displayName').css ("display", "block")
$('#hideInput').css ("display", "none")
$('.container').css("display", "block")
$('.player').css ("display", "block")
$('.point').css ("display", "block")
$('.timer').css ("display", "block")
$('.input').css ("display", "block")
$('.quote').css ("display", "block")
$('.score').css ("display", "block")
$('.player2').css('display', "none")
$('.scoreBoard').css("display", "none")
$('#button2').css("display", "block")
})
}
$('#button2').on('click',(event)=> {
    $('.input').val("")
    $('.letter').remove()
    $("span").html("")
    $('#displayName').text("")
    $('#point').html("")
    //$('.input').on()
    $('.input').unbind()
    reset()
})

$(() => {
    $('#button2').css("display", "none")
    $('.point').css ("display", "none")
    $('.player').css ("display", "none")
    $('.score').css ("display", "none")
    $('.timer').css ("display", "none")
    $('.quote').css("display", "none")
    $('.input').css ("display", "none")
    $('.container').css("display", "none")
    $('.scoreBoard').css("display", "none")
    $('#button').on('click', (event)=>{
    playerName = $('#userName').val()
    $('#displayName').text(playerName)
    $('#hideInput').css ("display", "none")
    $('.container').css("display", "block")
    $('.player').css ("display", "block")
    $('.point').css ("display", "block")
    $('.timer').css ("display", "block")
    $('.input').css ("display", "block")
    $('.quote').css ("display", "block")
    $('.score').css ("display", "block")
    $('.player2').css('display', "none")
    $('.scoreBoard').css("display", "block")
    $('#button2').css("display", "block")
    $('.scoreBoard').css("display", "block")
    
    const quote = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.'
    quote.split('').forEach((character, index)=> {
    let characterSpan = $(`<span class="letter" id=${index}>`).text(character)
    $('.quote').append(characterSpan)  
    })
    $('.input').focus()  
    
    
    let timer
    counter = 60
    timeLeft = counter
    error = 0
    point = 100
    
    function initTimer() {
        if(timeLeft > 0) {
            timeLeft--
            $('#timer').text(timeLeft)
        } else {
            clearInterval(timer);
        }
    }
    //one time event
    $('.input').one('keydown', function(){
    //startTimer()
        timer = setInterval(initTimer, 1000);
    })    
    //input value
    $('.input').on('input' ,  () =>{ 
       const arrayQuote = $('.letter').text().split('')
       const arrayValue = $('.input').val().split('')
       let correct = true
       let error = 0
       arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index]
        if (character) {
            console.log(character)
            if (character == null){
                $(`#${index}`).removeClass('correct')
                $(`#${index}`).removeClass('incorrect')
                correct = false
                
            } else if (character === characterSpan){
            
                $(`#${index}`).addClass('correct')
                $(`#${index}`).removeClass('incorrect')
            
            } else {
                $(`#${index}`).addClass('incorrect')
                $(`#${index}`).removeClass('correct')
                correct = false
                error++
            }
        }
        
    })
    point -= error
    score = point
            $('#point').text(score)
    if (correct){
        
        clearInterval(timer)
        
        
        scoreBoard.push({Name: playerName, Point: score})
        let sortedScore = scoreBoard.sort((a, b) => b.Point - a.Point)
        console.log(sortedScore)
        
        //let topTenScores = $("li")
        // console.log(topTenScores)
        // console.log(sortedScore[0])
        // topTenScores.each((index, Name) => {
        // if (sortedScore[index]) {
        //     $("li").text(sortedScore[Name])
        // }else {
        //       $("li").text("---") 
        // }
        // //     if (sortedScore[index]) {
        // //         Point = `${sortedScore[index]}`;
        // //     } else {
        // //         Point = `---`;
        // //     }
        
        let topTenScores = $("li") //array
        topTenScores.each((index, element) => {
            // console.log(args)
            if(sortedScore[index]){
                // console.log(Object.prototype(element))
                element.innerText(sortedScore[index].Name) 
            }
            // else{
            //     $(Name).text(`---`)
            // }
        })
     

    }
    
   
    
})    
   




}) 

})