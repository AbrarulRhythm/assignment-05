# ASSIGNMENT-005

#### ✅ Question 01: What is the difference between **getElementById**, getElementsByClassName, and querySelector / querySelectorAll?
**Answer:**
<br>
**getElementById()**
1. Selects an element by its id.
2. It returns a single element.
3. IDs in HTML should be unique, so this only returns one element.

**getElementsByClassName()**
1. Selects elements by class name.
2. It returns an HTMLCollection.
3. To access multiple elements need to loop through it.

**querySelector()**
1. Selects the first element that matches a CSS selector.
2. It returns a single element, the first element that matches.
3. Supports any CSS selector such as ID, class, attribute, pseudo-class, etc.

**querySelectorAll()**
1. Selects all elements that match a CSS selector.
2. This returns a NodeList.
3. NodeList supports forEach directly.

#### ✅ Question 02: How do you create and insert a new element into the DOM?
**Answer:**
1. **Create Element:** Create an element using **document.createElement("tagName")**,
2. **Add Content:** Add data or attributes using **.innerText** / **.innerHTML** / **.setAttribute()**.
3. **Insert Parent Div:** Insert into the DOM using **.appendChild()**, **.append()**, **.prepend()** etc. methods.

#### ✅ Question 03: What is Event Bubbling and how does it work?
**Answer:**
Event Bubbling is a process where when an event occurs on a child element, the event is first handled in that child element, then propagates upward through its parent → grandparent, thus propagating upward through the entire DOM tree.
<br>
<br>
**How does it work?**
1. There is a **div** in the html which contains a **button**.
2. If the button is clicked, the event will be triggered on the **button** first.
3. Then the event will go to the **div** then the **body** and then the **document** and finally to the **window**.

#### ✅ Question 04: What is Event Delegation in JavaScript? Why is it useful?
**Answer:**
Event Delegation is a technique or method where you can handle events of all child elements by placing a single event listener on the parent element, rather than providing separate event listeners for child elements.
<br>
<br>
**Why is it useful?**
1. No separate listener required for many child elements, which results in less memory required.
2. No separate listener required if new child elements are added to the DOM in the future.
3. Listener can be managed in one place. As a result, the code remains clean

#### ✅ Question 05: What is the difference between preventDefault() and stopPropagation() methods?
**Answer:**
<br>
**preventDefault()**
<br>
Prevents the browser’s default action.
<br>
Stops the browser from performing its default behavior for an event (like submitting a form, following a link)
<br>

**stopPropagation()**
<br>
Stops event bubbling.
<br>
Prevents the event from propagating to parent elements in the DOM