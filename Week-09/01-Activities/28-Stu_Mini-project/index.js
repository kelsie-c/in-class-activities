const inquirer = require('inquirer');
const fs = require('fs');
inquirer
  .prompt([
    {type: 'input', message: "What is your name?", name: 'inputName'},
    {type: 'input', message: "What is your GitHub URL?", name: 'github_url'},
    {type: 'input', message: "What is your LinkedIn URL?", name: 'linkedin_url'},
    {type: 'input', message: "Where are you located?", name: 'location'},
    {type: 'input', message: "What are your favorite colors?", name: 'faveColors'},
    {type: 'input', message: "What are your favorite foods?", name: 'faveFoods'},
    {type: 'input', message: "What is your one-sentence bio?", name: 'bio'},
  ])
  .then(answers => {
    const basehtml = createHTML(answers);
    fs.writeFile('./index.html', basehtml, (error) => { if (error) console.log("This didn't work.")});
  })
  .catch(error => {
    if(error.isTtyError) {
      console.log(error);
    } else {
      console.log(error);
    }
  });
const createHTML = ({inputName, github_url, linkedin_url, location, faveFoods, faveColors, bio}) =>
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <!--NORMALIZE CSS-->
        <link rel="stylesheet" href="assets/css/normalize.css" />
        <!--BOOTSTRAP 5-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <!--GOOGLE FONTS - CHANGE TO YOUR FONT STACK-->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet">
        <!--CUSTOM STYLES-->
        <link rel="stylesheet" href="./style.css" />
        <title>Page Title Here</title>
    </head>
    <body>
        <nav>
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact Me</a>
                </li>
            </ul>
        </nav>
        <div class="container">
            <div class="row justify-content-center">
                <div id="portfolio" class="col-8">
                    <h1 id="name" class="display-4">${inputName}</h1>
                    <p class="lead">This is a simple portfolio page for ${inputName} using Node.js for input.</p>
                    <h3>Links</h3>
                    <ul>
                    <li><a id="github-url" href="${github_url}">${github_url}</a></li>
                    <li><a id="linkedin-url" href="${linkedin_url}">${linkedin_url}</a></li>
                    </ul>
                    <h3>About Me</h3>
                    <p>Location: <span id="location">${location}</span></p><br>
                    <p>Favorite Colors: <span id="faveColors">${faveColors}</span></p>
                    <p>Favorite Foods: <span id="faveFoods">${faveFoods}</span></p><br>
                    <p>Short Bio:<br><span id="bio">${bio}</span></p>
                </div>
            </div>
        </div>
        <!--JQUERY & POPPER-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
            crossorigin="anonymous"></script>
        <!--BOOTSTRAP 5-->
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"
            integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/"
            crossorigin="anonymous"></script>
        <!--MOMENT DAY/TIME JS-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
        <!--CUSTOM SCRIPTS-->
        <script src="./script.js"></script>
    </body>
    </html>
    `;