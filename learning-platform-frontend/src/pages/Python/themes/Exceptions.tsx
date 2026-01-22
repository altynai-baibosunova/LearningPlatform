import React from "react";

const Exceptions: React.FC = () => {
  return (
    <div>
      <h2>Exception Handling in Python</h2>
      <p>
        Exceptions are errors that occur during the execution of a program. Python provides
        a way to handle exceptions using <code>try</code> and <code>except</code> blocks.
      </p>
      <p>Example:</p>
      <pre>
        {`try:
    x = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")`}
      </pre>
      <p>
        You can also use <code>finally</code> to run code regardless of exceptions, and
        <code>else</code> to run code only if no exception occurs.
      </p>
    </div>
  );
};

export default Exceptions;
