# Calculator Project

A step-by-step roadmap for building the Calculator project from The Odin Project.

The goal of this project is to combine everything learned so far:

* HTML
* CSS
* JavaScript
* DOM manipulation
* Events
* Functions
* State management
* Problem solving

---

# Project Goals

Build an on-screen calculator that can:

* Add
* Subtract
* Multiply
* Divide
* Clear inputs
* Handle multiple operations
* Prevent invalid calculations

---

# Important Warning

Do **NOT** use:

* `eval()`
* `new Function()`

The purpose of this project is to build the calculator logic yourself.

---

# Step 1 — Project Setup

## Create Files

Create the following files:

* `index.html`
* `style.css`
* `script.js`

## Connect Files

* Link `style.css` inside the `<head>`
* Link `script.js` before the closing `</body>`

## Initialize Git

```bash
git init
```

Make your first commit.

---

# Step 2 — Build the HTML Layout

## Create:

* Calculator container
* Display screen
* Digit buttons (0–9)
* Operator buttons:

  * `+`
  * `-`
  * `×`
  * `÷`
* Equals button (`=`)
* Clear button (`C`)

## Focus

Do NOT worry about functionality yet.

Just build the structure first.

---

# Step 3 — Style the Calculator

## Goals

* Center calculator on the page
* Use CSS Grid for layout
* Make buttons evenly sized
* Style the display
* Add hover effects

## Tip

Keep the design simple first.
You can improve visuals later.

---

# Step 4 — Create Math Functions

Create functions for:

* `add`
* `subtract`
* `multiply`
* `divide`

## Test in Console

Before connecting them to the UI, test them in the browser console:

```js
add(2, 3)
```

## Important

Handle divide-by-zero cases.

---

# Step 5 — Create operate()

Create a function that:

* takes an operator
* takes two numbers
* runs the correct math function

## Example Idea

If the operator is `"+"`
→ call `add()`

---

# Step 6 — Plan Calculator State

You will need variables for:

* first number
* second number
* current operator
* current display value
* whether a result was just shown

## Important

This is the core logic of the calculator.

Take time to plan this carefully before coding.

---

# Step 7 — Make Number Buttons Work

## Goals

When a number button is clicked:

* update the display
* update the current number

## Important

Digits should append correctly.

Example:

`1 → 12 → 123`

NOT:

`1 → 2 → 3`

---

# Step 8 — Make Operator Buttons Work

When an operator is clicked:

* store the current number
* store the operator
* prepare for the second number

## Important

Do not evaluate yet unless:

* first number exists
* second number exists
* operator exists

---

# Step 9 — Implement Equals Logic

When `=` is clicked:

* verify all required values exist
* call `operate()`
* display the result

---

# Step 10 — Handle Sequential Operations

Your calculator should support:

`12 + 7 - 1 =`

## Expected Flow

1. `12 + 7`
2. evaluate → `19`
3. `19 - 1`
4. evaluate → `18`

## Tip

This is the hardest part.

Draw the logic on paper if needed.

---

# Step 11 — Implement Clear Functionality

Clear should reset:

* display
* numbers
* operator
* stored result

## Tip

Create a dedicated reset function.

---

# Step 12 — Handle Edge Cases

## Consecutive Operators

Prevent:

`2 + +`

Only keep the most recent operator.

---

## Equals Without Enough Data

Prevent:

`2 =`

---

## Divide By Zero

Show an error message instead of crashing.

---

## Long Decimals

Round long decimal values.

Look into:

```js
toFixed()
```

---

## New Calculation After Result

After:

`2 + 2 = 4`

Pressing:

`7`

should start a NEW calculation.

---

# Step 13 — Refactor

After everything works:

* clean up repeated code
* improve naming
* simplify logic
* organize functions

---

# Extra Credit Features

## Decimal Support

Add:

`.`

Prevent multiple decimals in one number.

---

## Backspace Button

Remove the last entered digit.

---

## Keyboard Support

Support:

* numbers
* operators
* Enter
* Backspace

Use:

```js
keydown
```

---

# Debugging Tips

When stuck:

1. Use `console.log()`
2. Check variable values after every click
3. Build one feature at a time
4. Test constantly

---

# Suggested Build Order

1. HTML layout
2. CSS styling
3. Math functions
4. Display updates
5. Number buttons
6. Operator buttons
7. Equals logic
8. Sequential calculations
9. Edge cases
10. Extra features

---

# Git Workflow

Commit often:

```bash
git add .
git commit -m "Add calculator display"
```

Suggested commits:

* setup
* layout
* styling
* math functions
* button functionality
* equals logic
* edge case fixes
* keyboard support

---

# Final Advice

Do not try to build the entire calculator at once.

Build:

1. one feature
2. test it
3. commit it
4. move on

Small steps make debugging much easier.
