document.addEventListener("DOMContentLoaded", function() {
    var messageDiv = document.createElement('div');
    messageDiv.innerHTML = `
        <div class="body-message">
            <span>Illuminate | </span>
            <a href="https://github.com/xlluminate/Illuminate" target="_blank">GitHub</a>
        </div>
    `;

    document.body.appendChild(messageDiv);

    // CSS
    var style = document.createElement('style');
    style.innerHTML = `
        .body-message {
            position: relative;
            bottom: 0;
            width: 100%;
            background-color: #333;
            color: white;
            text-align: center;
            padding: 10px 0;
            font-family: Arial, sans-serif;
            font-size: 14px;
            margin-top: 20px; /* Pushes the content above slightly */
        }

        .body-message a {
            color: lightblue;
            text-decoration: none;
            margin-left: 5px;
        }

        .body-message a:hover {
            text-decoration: underline;
        }
    `;

    document.head.appendChild(style);
});

console.log('This file should be linked to every file. If this is not the case, then it is considered a bug.');
