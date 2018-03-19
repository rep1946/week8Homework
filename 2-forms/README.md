# FORMS! FORMS! FORMS!

### Learning Objectives

- Understand the purpose of forms and how they work in web apps.
- Understand the major attributes of the tag.
- Go through common form components and what they are used for.

## What is a form?

We've all seen forms on internet websites: they have inputs that we can put values into to submit information to a website. Today we're going to talk about how to write them.

### The `form` tag

Every form _must_ be wrapped in a `<form></form>` tag. Like this:

```html
<form>
  <!-- form innards -->
</form>
```

The form tag has a couple of special attributes: `action` and `method`. These have to do with when you're using the form to send information to the backend of a site. For this class period, we are only dealing with front-end forms, but we may revisit this at the end.

### Input tags

There are _many, many, many_ form-specific elements. The one you will see the most is called `input`.

```html
<label for="firstname">First Name</label>
<input type="text" name="firstname" placeholder="First Name" />
```

Here are some observations we can make about input tags right off the bat:

- They have a special `type` attribute.
    - The default value of this attribute is `text`, but there are a lot of available options.
    - `number`, `password`, `email`, `date`, `time`, `submit`, and more!!!
- They have a special `name` attribute. The `name` attribute is **very** important; it helps us keep track of each of the inputs in the form.
- They have a special `placeholder` attribute. This will show up before the user starts typing in the box.
- There's another attribute that's not on this particular form element: `value`. This allows you to set the default value of a form field. This is different from placeholder text -- placeholder text is greyed out and will not get counted when the form is submitted, but `value` text is text that's actually in the input.

### Submit inputs

In order to submit a form, you need to have an `input` of `type="submit"`. Like this:

```html
<input type="submit" value="Submit the form" />
```

This input will show up looking like a button, with the text "Submit the Form" in the button. 

- "But J! Can't I have a button instead of an input?"
- No. It has to be an input of type submit.

### EXERCISE:

In a codepen, write a form with inputs for a user's name, a date, and a time. What do you notice about how the inputs look? How do they differ? Add a submit button and click it (after saving your work). What happens?

## Submitting a form

The default behavior when a form is submitted is to refresh the page. This has to do with the stuff that forms are built for, which is to send information to the backend of a site. We, however, are not using forms for this purpose in this class, so instead we are going to modify that default behavior... using Javascript!

First we need to grab the form on the page using jQuery:

```js
var $myForm = $('#my-form');
```

Then, we're going to use the submit method to attach a function to it. We want the function to run when the form is submitted.

```js
$myForm.submit(function() {
  console.log('it got submitted!');
});
```

At this point, the page will still refresh. We gotta make it stop doing that, it's very annoying. So, let's add a reference to the event into our function.

```js
$myForm.submit(function(event) {
  event.preventDefault()
  console.log('it got submitted!');
});
```

So, we're able pass in the _event_ -- the form submission -- into the function that handles the submission. Then, we use the method `preventDefault` to _prevent_ the _default_ behavior.

Then, to get the values out of the inputs, we can refer to `event.target`. (The target of the event is the form itself.)

If we say `event.target.firstname.value`, we get the value of the input with name "firstname".

### EXERCISE: Go to `forms-lab` and follow the instructions! Work in groups.

## Other form fields

Along with inputs, there are a number of other fields you can use for forms. Check out [W3Schools](https://www.w3schools.com/html/html_form_elements.asp) to see some of them.

