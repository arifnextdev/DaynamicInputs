# addinputs

A reusable React component for adding input fields dynamically.

## Installation

You can install the `addinputs` package via npm:

```bash
npm install addinputs

```

# Usage

```bash

import { AddInput } from 'addinputs';

```

# Example Usage

```bash

import React from 'react';
import { AddInput } from 'addinputs';

const MyComponent = () => {
  return (
    <div>
      <h1>Add Inputs</h1>
      <AddInput
        btnName="Add Field"
        label="Input"
        type="text"
        btnStyle="your-button-style-class"
        inputStyle="your-input-style-class"
      />
    </div>
  );
};

export default MyComponent;
```

# Props

btnName (string): The label for the button that adds input fields.
label (string): The label for each input field.
type (string): The type of input field (e.g., 'text', 'number', 'email').
btnStyle (string, optional): CSS class for styling the button.
inputStyle (string, optional): CSS class for styling the input fields.
