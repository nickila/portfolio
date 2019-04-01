import React from "react";
import "./Portfolio.css"

function Portfolio() {
    return (
        <div className="container-fluid section" id="portfolio">
            <div className="row">
                <div className="col-md-8 mx-auto siteDiv">
                    <div className="card">
                        <div className="card-header">
                            <h2 className="display-4 portfolioHeader">GREEN STREET</h2>
                        </div>
                        <div className="card-body">
                            <a target="blank" href="http://green-street.herokuapp.com/"><img className="sites" src="images/green-street.png" alt="Green Street" /></a>
                            <p className="siteInfo">Green Street is dedicated to solving the complex crisis of food deserts around
                                the world by thinking small. If every city block had a collection of backyard gardeners growing
                                fresh fruits, vegetables, honey and eggs, access to fresh food would be everywhere. Green Street
                                provides the network and space to establish connections between gardeners and the neighbors that
                                surround them. Front yard markets provide a community with fresh food, economic opportunity and
                                a strong social structure. Front yard markets provide a safe space for neighbors to interact and
                                share ideas and for families to see where their food comes from. We believe in these values. If
                                you do too, please search for a Green Street market in your neighborhood or JOIN Green Street
                                and start a revolution today.</p>

                            <p className="siteInfo roles"><a href="https://github.com/shilpipawar">Shilpa Pawar</a>:
                            Login, register, routing, googlemap coords</p>

                            <p className="siteInfo roles"><a href="https://github.com/prajbhandary">Pranab Rajbhandary</a>:
                                Models, logout, form validation, testing and bug fixing</p>

                            <p className="siteInfo roles"><a href="https://github.com/MoChips2">Simone Medhanie</a>:
                                Controls, Google Maps, Google Geocoding</p>

                            <p className="siteInfo roles"><a href="https://github.com/nickila">Brian Nickila</a>:
                                Original concept, visuals, controls, UI/UX, layout, React components and pages</p>
                            <p className="siteInfo roles">Please visit our website at <a
                                href="http://green-street.herokuapp.com/">http://green-street.herokuapp.com/</a></p>
                            <p className="siteInfo roles">Technologies used for this app: React, MongoDB, Express, Node.js, Bootstrap, CSS, react-router-dom, Google Maps API, Google Geocoding, Bcryptjs, Body-parser, JSON Webtoken, Axios, jwt-decode, react-redux, passport</p>

                            <a href="https://github.com/MoChips2/garden-market" className="githubLink">GitHub Repo.</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h2 className="display-4 portfolioHeader">CLICKY GAME</h2>
                        </div>
                        <div className="card-body">
                            <a target="blank" href="https://nickila.github.io/clicky/"><img className="sites"
                                src="images/clicky.png" alt="Clicky Game" /></a>
                            <p className="siteInfo">This game challenges a player to click each image only once. The challenge is
                                that every time you click an image, they shuffle randomly. A point is scored for every image
                                clicked, but if you click one twice, it resets your score to 0. A high score is saved. The
                                images used were from Ultraman, a popular Japanese sci-fi television series from the 1960s.</p>
                            <p className="siteInfo">This game was developed by Brian Nickila, following very specific instructions by the University
                                of Minnesota BootCamp Full-Stack Web Development course.</p>
                            <p className="siteInfo">Programs used: React, JavaScript, HTML, Bootstrap and CSS.</p>
                            <a href="https://github.com/nickila/clicky" className="githubLink">GitHub Repo.</a>

                        </div>
                    </div>




                    <div className="card">
                        <div className="card-header">
                            <h2 className="display-4 portfolioHeader">NYTIMES SCRAPER</h2>
                        </div>
                        <div className="card-body">
                            <a target="blank" href="https://pure-anchorage-12886.herokuapp.com/"><img className="sites"
                                src="images/nytimes_scraper.png" alt="News Scraper" /></a>
                            <p className="siteInfo">This site was created using Express, Node.js, Mongodb, Mongoose, Handlebars,
                                JavaScript, jQuery, Bootstrap and Cheerio by Brian Nickila, following specific instructions by
                                University of Minnesota BootCamp course for Full-Stack Development.

                                The site allows a user to scrape headlines from New York Times website by clicking the 'scrape'
                                button. The site then renders several articles from the current nytimes.com. It shows the
                                headline, a summary and a link to the full article. It then allows the user to save articles, by
                                switching a saved value from false (default) to true. When the user goes to the saved page, they
                                can see all the articles they've saved. They can then delete them from their saved page if they
                                choose to do so. They can also submit a note to be saved alongside that article.</p>
                            <a href="https://github.com/nickila/news-scraper" className="githubLink">GitHub Repo.</a>

                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h2 className="display-4 portfolioHeader">WHERE MY DOUGH GO?</h2>
                        </div>
                        <div className="card-body">
                            <a target="blank" href="https://aqueous-reef-17353.herokuapp.com/"><img className="sites"
                                src="images/dogo2.png" alt="Where My Dough Go?" /></a>
                            <p className="siteInfo">Where My Dough Go? allows a user to signup/login and add expenses by category.
                                The total amounts get stored and totaled into the category total space to allow the user where
                    all their respective dough go. I worked in collaboration with three talented students: <a
                                    href="https://github.com/shilpipawar">Shilpa
                        Pawar</a>, <a href="https://github.com/MoChips2">Simone Medhanie</a> and <a
                                    href="https://github.com/prajbhandary">Pranab
                        Rajbhandary.</a></p>
                            <a href="https://github.com/shilpipawar/CRUDMonster" className="githubLink">GitHub Repo.</a>

                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h2 className="display-4 portfolioHeader">EAT-DA-BURGER</h2>
                        </div>
                        <div className="card-body">

                            <a target="blank" href="https://calm-waters-23102.herokuapp.com/"><img className="sites"
                                src="images/burger.png" alt="Eat-da-Burger" /></a>
                            <p className="siteInfo">Eat-da-Burger uses MySQL for the database, Heroku for deployment,
                                jQuery, Bootstrap, HTML, CSS, Handlebars and Node.js. This app was created by Brian
                                Nickila with specific instruction by the Coding Boot Camp of the University of
                    Minnesota.</p>

                            <a href="https://github.com/nickila/burger" className="githubLink">GitHub Repo.</a>


                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h2 className="display-4 portfolioHeader">BAMAZON</h2>
                        </div>
                        <div className="card-body">
                            <a target="blank" href="https://youtu.be/wDEec8nOevU"><img className="sites"
                                src="images/bamazon.png" alt="Bamazon" /></a>
                            <p className="siteInfo">Bamazon allows users to purchase products, adjusting database on hands
                                and tracking sales. It also allows a user to act as the manager adding new items,
                                tracking sales and checking low inventory. It also allows a user to act as a supervisor
                                and track sales by department and add new departments. This app was developed following
                    instructions for a Boot Camp Coding course, using MySQL, Node.JS and JavaScript.</p>

                            <a href="https://github.com/nickila/bamazon" className="githubLink">GitHub Repo.</a>

                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h2 className="display-4 portfolioHeader">OUR HOUSE</h2>
                        </div>
                        <div className="card-body">


                            <a target="blank" href="https://nickila.github.io/Project_1/"><img className="sites"
                                src="images/our_house.png" alt="Our House" /></a>
                            <p className="siteInfo">My group and I created this website to help people find their local
                                representatives and contact information. My contributions consisted of HTML,
                                CSS/Bootstrap, Animate.css, JavaScript, jQuery and some of the Google Civics API.
                                Other
                    contributors: Erik Jackson & Mark SperleWeiler</p>

                            <a href="https://github.com/nickila/Project_1" className="githubLink">GitHub Repo.</a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h2 className="display-4 portfolioHeader">DOODLE POOTS</h2>
                        </div>
                        <div className="card-body">
                            <a target="blank" href="https://nickila.github.io/unit-4-game/"><img className="sites"
                                src="images/doodle_poots.png" alt="Doodle Poots" /></a>
                            <p className="siteInfo">This role-playing game was created during an intensive bootcamp
                                coding
                                course. I used HTML, CSS/Bootstrap, JavaScript and jQuery. The user chooses a
                                player
                    and an opponent. Each player can win or lose depending on the user's strategy.</p>

                            <a href="https://github.com/nickila/unit-4-game" className="githubLink">GitHub Repo.</a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h2 className="display-4 portfolioHeader">WORD GUESS GAME</h2>
                        </div>
                        <div className="card-body">
                            <a target="blank" href="https://nickila.github.io/Word-Guess-Game/"><img className="sites"
                                src="images/hangman.png" alt="Hangman" /></a>
                            <p className="siteInfo">This classic hangman game was created with arcade-style games in
                                mind.
                                Bright colors agains a black background and large simple fonts make for a simple,
                    comfortable experience. I used HTML, CSS, JavaScript to create this game.</p>

                            <a href="https://github.com/nickila/Word-Guess-Game" className="githubLink">GitHub Repo.</a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h2 className="display-4 portfolioHeader">GIF-TASTIC</h2>
                        </div>
                        <div className="card-body">
                            <a target="blank" href="https://nickila.github.io/GifTastic/"><img className="sites"
                                src="images/giftastic.png" alt="Gif Tastic" /></a>
                            <p className="siteInfo">Who doesn't like GIFs? This site lets users see ten GIFs from a
                                group
                                of themes or to create their own theme button and watch those GIFs instead. For
                                this
                    site, I used HTML, CSS/Bootstrap, Javascript, jQuery and the Giphy API.</p>

                            <a href="https://github.com/nickila/GifTastic" className="githubLink">GitHub Repo.</a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h2 className="display-4 portfolioHeader">TRAIN SCHEDULER</h2>
                        </div>
                        <div className="card-body">
                            <a target="blank" href="https://nickila.github.io/train-scheduler/"><img className="sites"
                                src="images/train_sched.png" alt="Train Scheduler" /></a>
                            <p className="siteInfo">This train scheduler allows a user to create a unique login and
                                password in order to add trains, destinations, start times and frequency. Using
                                Firebase, the next arrival time is calculated and displayed to the viewer. Train
                                Scheduler was created using HTML, CSS/Bootstrap, JavaScript, jQuery, Firebase and
                    Moment.js.</p>

                            <a href="https://github.com/nickila/train-scheduler" className="githubLink">GitHub Repo.</a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h2 className="display-4 portfolioHeader">TRIVIA GAME</h2>
                        </div>
                        <div className="card-body">
                            <a target="blank" href="https://nickila.github.io/TriviaGame/"><img className="sites"
                                src="images/trivia_game.png" alt="Trivia Game" /></a>
                            <p className="siteInfo">Using a theme of the popular cartoon Adventure Time, I created this
                                classic trivia game. Users are asked a series of questions with multiple-choice
                                answers. Correct, incorrect and timed-out answers are all logged and displayed at
                                the
                    end. I used HTML, CSS/Bootstrap and JavaScript for this trivia game.</p>

                            <a href="https://github.com/nickila/TriviaGame" className="githubLink">GitHub Repo.</a>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div>


    )
}

export default Portfolio;