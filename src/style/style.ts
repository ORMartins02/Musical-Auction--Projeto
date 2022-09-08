import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`


:root{
  --color-primary:rgba(215, 84, 19, 1) ;
  --color-negative:rgba(89, 50, 63, 1);
  --color-secondary:rgba(255, 254, 87, 1);

  
  --color-black:rgba(0, 0, 0, 1);
  --color-grey-8:rgba(18, 18, 20, 1);
  --color-grey-7:rgba(33, 37, 41, 1) ;
  --color-grey-6:rgba(33, 41, 46, 1) ;
  --color-grey-5:rgba(52, 59, 65, 1);
  --color-grey-4:rgba(61, 61, 61, 1);
  --color-grey-3:rgba(134, 142, 150, 1);
  --color-grey-2:rgba(224, 224, 224, 1);
  --color-grey-1:rgba(245, 245, 245, 1);
  --color-grey-0:rgba(248, 249, 250, 1);
  --color-white:rgba(255, 255, 255, 1);

  --color-sucess:rgba(63, 232, 100, 1); 
  --color-negative:rgba(232, 63, 91, 1); 

}

*,
*::after,
*::before {
  box-sizing: border-box;
}
html,
body, 
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video,
button,
select,
input {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-family: Montserrat;
}
button{
  cursor: pointer;
}
a {
  text-decoration: none;
}
html{
  background-color: rgba(237, 237, 237, 1);
  
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  font-family: var(--font-inter);
  line-height: 1;
  background-color: rgba(237, 237, 237, 1);
  margin: 0px;
  font-family: 'Montserrat', sans-serif;
  height: 100%;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0
}

`;
