/* eslint-disable quotes */
const startingText = `# The Markdown Previewer :)
## This is H2 element
This is a [link](https://konstanenonen.github.io/personal-website)

Here is some code: ${"`"}<div>Hello World</div>${"`"}
${"```"}
// this is multi-line code:

function helloWorld() {
  console.log(Small step for a man..);
  return "A GIANT LEAP FOR A MAN KIND!!!";
}
${"```"}
**This is some Bold text**

> This is a block Quote

- This is a list item

## And this is a picture of a dog

![A charming dog](https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`;

export default startingText;
