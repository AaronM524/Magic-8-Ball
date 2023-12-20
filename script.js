function shakeMagic8Ball() {
    const question = prompt(`Ask the Magic 8-ball a question:`);
    if (question === null) {
        document.getElementById('response-text').innerText = `MUST ASK A QUESTION`
        document.getElementById('response-text').classList = `lead text-danger`
        document.getElementById('response-image').src = "images/Angry-Man.webp"
    }
    if (!question.trim()) {
        alert(`Enter a Valid Question`)
        return
    }

    const randomNumber = Math.floor(Math.random() * 8);
    let answer, image, color;


    switch (randomNumber) {
        case 0:
            answer = "Yes"
            image = "images/440px-Thumbs_up_icon.svg.png"
            color = "text-success"
            break

        case 1:
            answer = "No"
            image = "images/pngtree-finger-cartoon-hand-showing-thumbs-down-png-image_6231374.png"
            color = "text-danger"
            break

        case 2:
            answer = "Reply hazy try again"
            image = "images/I-dont-know.jpg"
            color = "text-warning"
            break

        case 3:
            answer = "It is certain"
            image = "images/How-to-be-confident.jpg"
            color = "text-success"
            break

        case 3:
            answer = "Cannot predict now"
            image = "images/2061563-Stephen-Hawking-Quote-You-cannot-predict-the-future.jpg"
            color = "text-warning"
            break

        case 4:
            answer = "Do not count on it"
            image = "images/1_ASwOspasPrML_zbtPyOhJw.jpg"
            color = "text-danger"
            break

        case 5:
            answer = "My sources say no"
            image = "images/download (1).png"
            color = "text-danger"
            break

        case 6:
            answer = "Signs point to yes"
            image = "images/download (5).jpg"
            color = "text-success"
            break

        case 7:
            answer = "Outlook not so good"
            image = "images/1610370371_16483.jpg"
            color = "text-danger"
            break
    }
    const responseText = document.getElementById(`response-text`)
    responseText.innerText = answer;
    responseText.classList = `display-4 ${color}`;
    document.getElementById(`response-image`).src = image;

}