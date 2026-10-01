# Frontend - Backend
1.  create project folder (lab7)
2. create two folder fontend and backend
3. open terminal and split it into two
4. open frontend into left side terminal
5. open backend into right side terminal
6. in backend
a. initialize backend by `npm init -y`
b. install nodemon by `npm i nodemon`
c. open package.json from backend, update `type of module` and script
d. create app.js
7. in frontend
a. npm create vite@latest
b. enter . as project name 
c. select framework as react from arrow key
d. select variant as javascript from arrow key
e. select esList for linting from arrow key
f. select install and start the frontend

# jsx components
1. simple js function return html  directly.
2. it must start with a capital letter.
3. it should be treated as html tag.
4. it must br closed.

# object distructure
does not depends on order, if property is not available then it intialize with null.
const { rating, bname, price, quantity, picUrl } = props.book;
any components include styles:
 1. external css= create class in index.css and use in component
 2. internal css= create property as object
 '''
      const qtyStyle={
       fontSize:"1rem",
       color:"blue",
       textAlign:"center ",
       backgroundColor:"yellow",
       padding:"10px"
      }
      '''
       then apply with style attribute and pass the object.
 3. inline css= in this method we use two curly braces with style attribute all the css property must be single word for eg:- text-align becomes text-Align