document.addEventListener("DOMContentLoaded", function() {
    var footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="footer-content">
            <span>Illuminate | </span>
            <a href="https://github.com/xlluminate/Illuminate" target="_blank">GitHub</a>
        </div>
    `;

    document.body.appendChild(footer);

    var style = document.createElement('style');
    style.innerHTML = `
        footer {
            position: fixed;
            bottom: 0;
            width: 100%;
            background-color: #333;
            color: white;
            text-align: center;
            padding: 10px 0;
            font-family: Arial, sans-serif;
            font-size: 14px;
        }

        .footer-content a {
            color: lightblue;
            text-decoration: none;
            margin-left: 5px;
        }

        .footer-content a:hover {
            text-decoration: underline;
        }
    `;
    
    document.head.appendChild(style);
});
console.log('This file should be linked to every file. If this is not the case, then it is considered a bug.');
