# ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. What are the HTTP verbs? Which CRUD action corresponds to each verb?

  Your answer: Post => Create; Get => Read ; Put => Update; Delete => Delete ; 

  Researched answer:
  Post - Create
  Get - Read
  Put - Update / Replace. 
  Patch - Update / Modify
  Delete - Delete


2. Why would you use object destructuring?

  Your answer: To simply code structure. Allows data from an object to be called from multiple places by storing to a variable rather than repetitively repeating code throughout. Also allows for greater readability if the object is deeply nested.

  Researched answer: It’s a JavaScript expression that allows us to extract data from arrays, objects, maps and sets into their own variable. It allows us to extract properties from an object or items from an array, multiple at a time.



3. Why is testing important?

  Your answer: Find out if the code performs as expected. Does it function correctly for all cases, including edge cases that may not have been originally designed for.

  Researched answer:
    Break down problems into smaller pieces
    Avoid feature creep - stay focused on essential piece of the program
    Keeps focus on the current objective
    Tests can save you lots of time bug fixing a new feature


4. What is the difference between a class and an object?

  Your answer: In JavaScript, Classes act in a simliar manner to functions where something happens within the class then returns a value when complete. But each instance of the class would be considered an object

  Researched answer: A class is a construct that defines a collection of properties and methods. An object is an instance or variable.


5. What did you learn during the group project this week? Please include any additional feedback you may have.

  Your answer: I learned a whole lot about React and what is meant by a framework. 



### HTML/CSS Review questions: First, try to answer each question on your own then Google the answer to further your knowledge.

1. How do you link a CSS file to your HTML page?

  Your answer: Link to the CSS file in the head section of the HTML file. 

  Researched answer: <link> tag within the <head> section of the HTML file. Can also use in-line styling rather than a separate CSS file.


2. What is the difference between a div and a span?

  Your answer: THey both define a section of the page but not sure when I would use span instead of div

  Researched answer:The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.


3. What is a CSS class? When should you use an id instead of a class?

  Your answer: Creates a group of elements together so that they can all be styled with the same CSS. id would be used to point to a singular element rather than multiple

  Researched answer: Use a class when you want to consistently style multiple elements throughout the page/site. Classes are useful when you have, or possibly will have in the future, more than one element that shares the same style. An example may be a div of "comments" or a certain list style to use for related links. Additionally, a given element can have more than one class associated with it, while an element can only have one id. For example, you can give a div two classes whose styles will both take effect.Use the ID when you have a single element on the page that will take the style. IDs must be unique.


4. Name 4 semantic HTML tags.

  Your answer: A tag that communicates its purpose to humans as well as computers. Ex. <form> , <table> , <header> , <footer>

  Researched answer: A semantic element clearly describes its meaning to both the browser and the developer. <section> , <summary> , <article> , <aside>


5. What are three options for creating responsive design?

  Your answer: It is designing to make sure that the site displays properly on all devices. 
  -use percentages rather than fixed pixel sizes

  Researched answer:
  -Set the viewport with the <meta> tag which will give the browser instructions on how to control the page's dimensions and scaling.
  -Responsive images with the width and max-width CSS tags. Use the <picture> tag to display different images depending on browser window size.
  -Resonsive text size with the vw tag (viewport width)


### STRETCH: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

  Your answer: The front end is everything on a website that a user interacts with. The pace of change both in the tools to create websites and technologies for users to display means that a developer must keep up with a large list of technologies to support and never stop learning. They need to understand how design impacts the user experience.

  Researched answer: Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing.


2. What is block scope in JavaScript?

  Your answer: Limits the scope of a variable to a single block.

  Researched answer: A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block. In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block.


3. How would you explain the idea of "inheritance" in object oriented programming?

  Your answer: It is how the properties of an object flow between different sections of code. e.g. a child element inheriting from a parent.

  Researched answer:Inheritance in most class-based object-oriented languages is a mechanism in which one object acquires all the properties and behaviors of another object. JavaScript is not a class-based language although class keyword is introduced in ES2015, it is just syntactical layer. JavaScript still works on prototypical inheritance.
