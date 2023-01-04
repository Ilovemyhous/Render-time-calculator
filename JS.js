console.info("Script loaded!");

function calculate() {
    //This variable will be used later to check if there aren't errors in the code, it'll calculate the render time
    var check = 2

    //Get's the numbers from the input fields, and convert them into numbers.
    let amount_input = parseInt(document.getElementById("amount").value);
    let time_input = parseInt(document.getElementById("time").value);

    //And display's them in the console.
    console.log("Amount: "+amount_input);
    console.log("Time: "+time_input);

    //Prints an error if fields are empty.
    if (isNaN(amount_input)) {
        alert("Please fill out the amount of frames.")
        check --;
    }

    else if (isNaN(time_input)) {
        alert("Please fill out the time per frame.")
        check --;
    }
    
    else if (isNaN(amount_input) && isNaN(time_input)){
        alert("Please fill the forms out.")
        check --;
    }

    //Now, check if the fields are positive, and above zero
    if (amount_input == 0 || time_input == 0) {
        alert("Please put a number above 0.")
        check --;
    }

    else if (amount_input < 0 || time_input < 0) {
        alert("Please put only positive numbers.")
        check --;
    }

    //Calculates the render time if everything's ok.
    //console.info(check);
    if (check !== 2) {
        console.error("An error occured, please check the fields.");
    }

    else {
        console.info("Everything's okay.");
        let render_time = amount_input * time_input
        console.log("Render time: "+render_time+" minutes.");

        //Convert minutes into hours (if it is above 60 minutes)
        if (render_time >= 60) {
            let hours = Math.floor(render_time / 60);
            let minutes = render_time % 60;
            console.log(hours+ " hour(s) and "+minutes+" minutes.");

            //This will be used for correct speeling
            if (hours !== 1 && minutes !== 0) {
                document.getElementById("output_render_time").innerHTML = hours+ " hours and "+minutes+" minutes"
            }

            else if (hours !== 1 &&  minutes == 0) {
                document.getElementById("output_render_time").innerHTML = hours+ " hours"
            }

            else if (minutes == 0) {
                document.getElementById("output_render_time").innerHTML = hours+ " hour"
            }

            else {
                document.getElementById("output_render_time").innerHTML = hours+ " hour and "+minutes+" minutes"
            }
        }

        else if (render_time == 1) {
            document.getElementById("output_render_time").innerHTML = render_time+ " minute. But honestly, the time you'll spend on this is way more than that."
        }

        else {
            document.getElementById("output_render_time").innerHTML = render_time+ " minutes"
        }
    }
}