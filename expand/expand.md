1. Some JavaScript developers believe that most of the issues with JavaScript stem from its asynchronous nature, its loose typing, and the web platform it runs on. For each of the three reasons listed, explain in your own words why a developer might believe that it is a pain point.

   - Asynchronous code is hard to understand as most people learn to think synchronously when learning to program. As a result its hard to shift mindsets. Additionally, it requires that the developer keep track of more processes and how they interact with one another.
   - The loose typing of javascript can lead to a lot of unintended bugs. For example, if a user is coming from another language like Java == is assumed to be strict typing. There would be no error message indicating the need for a == vs ===. Additionally, functions can accept unintended inputs requiring lots of type checking on the developer end.
   - The web platform doesn't stop when a critical error occurs. As a result when bugs occur they may not be obvious as the browser doesn't crash.

2. Related to the first question, why do you believe that the developer(s) who created JavaScript made it loosely typed? Why do you think they added asynchronous features?

   - Javascript being loosely typed makes it so the browser can more flexibly handle when unexpected types get used. Additionally, it makes it so code is often less verbose. However, I actually still think this is a mistake at least on the developer end. 
   - Asynchronous features were necessary to handle time consuming requests to external servers without pausing the entire browser.

3. What are the key differences between a compiled language and an interpreted one? Which one is JavaScript? What are the benefits & drawbacks of JavaScript being made that way?

   - Javascript is interpreted. I would assume the main reason is because javascript needs to very portable and consistent across all machines. As a result having the code interpreted instead of being translated to machine code would probably lead to more consistent behavior across platforms. The drawback is that its slow. Compiled languages are translated to machine code then run. Interpreted languages are just parsed as is with no translation. 

4. The professor believes that, though sometimes misused, JavaScript frameworks are incredibly powerful tools that can help teams work more efficiently and effectively. Given that, why do you believe he is focusing more on vanilla JavaScript for this course? What are the benefits of mastering vanilla JS first? What are the drawbacks of not learning a framework?

   - Because people don't learn how to use frameworks properly if they don't learn how to code in the base technologies properly. Furthermore, frameworks are often replaced and become outdated. Better to learn the fundamentals first to fall back on and have a good foundation to build off of. 

5. Explain, in your own words, how you think this lab relates to your project. How might you be able to use this information in your own project?

   - Our code is going to use javascript. So understanding the fundamental quirks of javascript are good to know. 
