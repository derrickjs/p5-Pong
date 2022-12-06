var instruct = ["1.) Use the left and right arrow to move the paddle OR use the mouse to move the paddle.", "2.) Every paddle hit is a point.", "3.) Every paddle hit will slightly increase the speed of the ball." , "4.) If the ball passes the paddle game over.", "5.) Try and get as many points as possible."]

for ( let i in instruct) {

    document.querySelector("#list").innerHTML += `<li class = 'listItem'>` + instruct[i] + `</li>`

}

