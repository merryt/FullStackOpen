
# Chapter 0 notes 
## general info
https://fullstackopen.com/en/part0/general_info#studying-the-course-in-a-nutshell

> You can discuss the course and related topics in our dedicated group on Discord [https://study.cs.helsinki.fi/discord/join/fullstack](https://study.cs.helsinki.fi/discord/join/fullstack) and on Telegram: [https://t.me/fullstackcourse](https://t.me/fullstackcourse). Discord has fullstack_general and part-specific (channel names with fullstack prefix) channels for course-related discussion. Note that Discord's _chat channel is not suitable for the course-related discussion_. Please join the conversation!


Looks like its 20 hours a week for 13 weeks. to submit exersises use https://studies.cs.helsinki.fi/stats/courses/fullstackopen


instructions use node 16.13 - https://fullstackopen.com/en/part0/general_info#before-you-start

## Fundamentals of HTML
https://fullstackopen.com/en/part0/fundamentals_of_web_apps
A lot of this is stuff I already understand, so my notes might be a bit brief

Web browsers and servers communicate to eachother wise HTTP. There are a few types of HTTP calls, one is GET. This is used to GET data from a server.

All network calls are made up of a few parts. A header, a body, and they get a response which contains a header and a body.

The folow of a normal call goes
Client -- HTTP GET call for the page --> Server
Client <-- html code -- Server
Client -- Asks for image (or css or other items) --> Server
Client <-- image -- Server

#### Servers
Servers return HTML that the clients can render, clients render HTML into webpages. Servers can use a wide variety of languages and frameworks, but they typically (in modern times) return either HTML, or JSON. All responses from servers include a status code. These codes are 3 digits like 404 or 201

#### Clients 
Web clients (typicaly browsers) are the application users browse the internet with. a URL bar can be used to kick off requests. They can read HTML and concert it to something more similar to what we are use to when we think of a website. They can also run some application logic using javascript. When ever loading HTML they reload the entire page, but when using javascript they can make GET, and POST requests with out reloading the page. You can also submit "forms" which allows you to make POST and GET calls, but this will cause a page refresh

#### Dev console
The developer console is really usefull for watching the HTTP calls go back and forth and examine what data is inside of them. For modern web applications this reviewing process is essentail for debugging

#### Javascript
Javascript can run on the server and the client, because of that it is a popular choice. In the javascript ecosystem there are server libraries and client librarys. Some of these are standard (including in the evironment you are working with) other are 3rd party and are explicitly included.

#### CSS
CSS is used to style the html. The browser renders the HTML then applies the styling of the CSS to the page.

#### AJAX
AJAX is the tech we trigger with javascript to communicate with the client and the server after the initial page reload. AJAX stands for asycronous Javascript and XML












