1. What is the function of the following technologies in your assignment:

HTML: HTML (Hyper text markup language) is used by the browser on the client side to create and render our webpage page. We only add the content in the HTML. The webbrowser receives the HTML document from a webserver and HTML describes the strucutre of the web page semantically.

CSS: In order to separate content from presentation and preserve the semantic meaning of the webpage we use CSS (cascading style sheets) to style the webpage. More particularly, CSS dictates how elements should be rendered on our screen. In this assignment the styling of all the HTML tags that we see on the client side is powered by the CSS (also run on the client side).

JavaScript: Javascript, is a high-level, dynamic, weakly typed, object-based, multi-paradigm, and interpreted programming language. It is used in order to add interactivity to our webpage that is created and styled though HTML and CSS. Javascript is another language that is being run on the client side. In this assignment we used Javascript in order to run/validate the various forms that we have and also to help create a comments section. Javascript has the additional capabilties of being integrated with external API's and we used it to help get the weather on our blog pages.

Python: Python is a widely used high-level programming language for general-purpose programming. In this assignment we used Python as a coding language to power our webserver.

Flask: Flask is a Python microframework that makes buliding web servers and API's easier. In this assignment we used Flask to create our own webserver. All of the static web pages were now converted into dynamic webpages (css and HTML are still static) by getting them hosted onto localhost:5000. We did this by setting up a route (the root "/"). We then defined functions such that if someone went to the root, our webserver would open up the home page of the blog (A bridge was setup between the client side and server side). Similarly we wrote various other functions to host the other pages of the blog on other routes. The flask app also continously hosts our server until is is exited.

HTTP: HTTP protocol is a request/response stateless protocol. In this assignment, A client (our browser) sends a request to the server in the form of a request method, URI, and protocol version, followed by a MIME-like message containing request modifiers, client information, and possible body content over a connection to the server that is being hosted with the help of flask. The server responds with a status line, including the message's protocol version and a success or error code, followed by a MIME-like message containing server information, entity metainformation, and possible entity-body content. 

GET and POST requests: Get is used to query arguments in the URL and POST is used to add data request in the body. In this assignment we used GET to query request data from the server side (open up a page of the blog) and we used POST to send submit requests to a third party api (mailgun) once the validation of a form was complete.


2. How does HTML, CSS, and JavaScript work together in the browser for this assignment?

HTML,CSS and Javascript work cohesively to provide the front end experience to the user, who is visiting the blog. HTML is used for content creation , CSS is used for presentation and Javascript is used for providing interactivity. (Additional details of each of these has been provided in question 1).


3. How does Python and Flask work together in the server for this assignment?

Flask, powered by the Python programming language is used to host our server and act a bridge between the static HTML and CSS files and the dynamic server.(Additional details have been provided in question 1)

4. List all of the possible GET and POST requests that your server returns a response for and describes what happens for each GET and POST request

10.0.2.2 - - [15/Oct/2017 04:53:38] "GET / HTTP/1.1" 200 - When the user navigates to the root location URL (http://localhost:5000/) a GET request is sent out to the server that displays the page in the browser by the routing that is curated in flask.

10.0.2.2 - - [15/Oct/2017 04:56:17] "GET /index HTTP/1.1" 200 - Similar to the above only difference is the /index is added in the URL.

10.0.2.2 - - [15/Oct/2017 04:56:49] "GET /blog/8-experiments-in-motivation HTTP/1.1" 200 - Similar to the above , URL used is http://localhost:5000/blog/8-experiments-in-motivation

10.0.2.2 - - [15/Oct/2017 04:57:24] "GET /blog/a-mindful-shift-of-focus HTTP/1.1" 200 - URL used - http://localhost:5000/blog/a-mindful-shift-of-focus

10.0.2.2 - - [15/Oct/2017 04:58:01] "GET /blog/how-to-develop-an-awesome-sense-of-direction HTTP/1.1" 200 - URL used - http://localhost:5000/blog/how-to-develop-an-awesome-sense-of-direction

10.0.2.2 - - [15/Oct/2017 04:58:27] "GET /blog/training-to-be-a-good-writer HTTP/1.1" 200 - URL used - http://localhost:5000/blog/training-to-be-a-good-writer

10.0.2.2 - - [15/Oct/2017 04:59:05] "GET /blog/what-productivity-systems-wont-solve HTTP/1.1" 200 - URL used -http://localhost:5000/blog/what-productivity-systems-wont-solve

10.0.2.2 - - [15/Oct/2017 04:59:31] "GET /contact HTTP/1.1" 200 - URL used - http://localhost:5000/contact

10.0.2.2 - - [15/Oct/2017 05:00:12] "POST /contact HTTP/1.1" 200 - When form validation of the contact page is passed this POST request interacts with mailgun api by sending out a data request in the body.

10.0.2.2 - - [15/Oct/2017 05:01:46] "GET /about HTTP/1.1" 200 - URL used - http://localhost:5000/about
