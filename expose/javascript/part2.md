1. line 12 will print 3 as that was the last value assigned to i in the for loop and i uses var which is function scoped. 
2. line 13 will print 150 as that was the last assignment to discountedPrice is defined with var meaning its given function scope. 
3. line 14 will print 150 as that was the last assignment to finalPrice and it has function scope.
4. The function will return array [50, 100, 150]. In the for loop the numbers are halved and rounded then pushed to the discounted array which is function scoped.
5. There will be an error as i is now local scoped to the for loop and we are not able to access it on line 12.
6.  There will be an error as discountedPrice is now local scoped to the for loop and we are not able to access it on line 13.
7. line 14 will print 150 as that was the last assignment to finalPrice and it has block scope but is defined outside of the for loop meaning that its within scope of line 14.
8. The function will return array [50, 100, 150]. In the for loop the numbers are halved and rounded then pushed to the discounted array which has block scope but is defined outside of the for loop meaning that its within scope of the return statement.
9. There will be an error as i is local scoped to the for loop and we are not able to access it on line 11.
10. line 12 will print 3 as it is a const that is within block scope of line 12 and is defined as 3 at the beginning and not reassigned.
11. The function will return array [50, 100, 150]. In the for loop the numbers are halved then pushed to the discounted array which has block scope but is defined outside of the for loop meaning that its within scope of the return statement. Also the array is being mutated not reassigned. Since arrays are mutable in javascript we have no issues. 
12. 
    - a: student.name
    - b: student["Grad Year"]
    - c: student.greeting()
    - d: student["Favorite Teacher"].name
    - e: student.courseLoad[0]
13. 
    - a: '32' converted 2 to a string and concatenated the strings
    - b: 1 converted the '3' to an number and subtracted the numbers
    - c: '3null' converted null to the string 'null' and concatenated the strings
    - d: 3 converted the null to a zero and added the numbers
    - e: 4 converted true to a one and added the numbers
    - f: 0 converted both false and null to zeros and added the numbers
    - g: '3undefined' converted undefined to the string 'undefined' and concatenated the strings
    - h: NaN converted '3' to a number subtracted by NaN which is NaN
14. 
    - a: true convert '2' to the number 2 and 2 > 1 is true.
    - b: false '2' is greater than '1' in dictionary order.
    - c: true convert '2' to 2 and the numbers are equal
    - d: false strict equality considers the types and doesn't convert so a number 2 is not the same as a string 2
    - e: false the int conversion of true is 1 and 1 is not equal to 2
    - f: true Boolean(val) will only return false for specific values and 2 is not one of them thus true === true is true
15. == is equality returning true if two values are equal even after a conversion. === is strictly equals, this means that the values and types need to match and no conversions will take place.
16. part2-question16.js
17. The result will be [2, 4, 6]. We pass in an array with some callback function into modifyArray. modifyArray creates newArray. For every values in array modifyArray passes the value in callback, where callback returns the value multiplied by 2. modifyArray then pushes back value to the end of newArray and return newArray.
18. part2-question18.js
19. 
1
4
3
2