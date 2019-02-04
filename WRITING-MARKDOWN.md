<h3 align="center">How to markdown ⌨</h3>

---

## Headers

###### Heading 6
##### Heading 5
#### Heading 4
### Heading 3
## Heading 2
# Heading 1

```md

###### Heading 6
##### Heading 5
#### Heading 4
### Heading 3
## Heading 2
# Heading 1
```
---
## Emphasis

_This text will be italic_

**This text will be bold**

~~This text will be bold crossed out~~

_You **can** combine ~~them~~_



```md
_This text will be italic_

**This text will be bold**

~~This text will be bold crossed out~~

_You **can** combine ~~them~~_
```
---
## Images
```
<img class="[SIZE]" src="[Image location relative to the .md file]" />

```
### Large Image
Set the class name to **imgLarge**
```md
<img class="imgLarge" src="./Resources/M1/dev-tools.png" />

```
### Medium Image
Set the class name to **imgMedium**
```md
<img class="imgMedium" src="./Resources/M1/dev-tools.png" />

```
### Small Image
Set the class name to **imgSmall**
```md
<img class="imgSmall" src="./Resources/M1/dev-tools.png" />

```

---
## Lists

### Unordered

- Item 1
- Item 2
  - Item 2a
  - Item 2b

```md
- Item 1
- Item 2
  - Item 2a
  - Item 2b
```

### Ordered

```md
1. Item 1
2. Item 2
3. Item 3
   1. Item 3a
   2. Item 3b
```
---
## URLs / Links

[SRM-CARE](http://care.srmuniv.ac.in/)

```md
[SRM-CARE](http://care.srmuniv.ac.in/)
```
---
## Blockquotes

> This is a Blockquotes (Single Line)

> This is a Blockquotes (Multi Line) Lorem, ipsum dolor sit amet
> consectetur adipisicing elit. Quos a doloribus cupiditate repellendus
> sapiente dignissimos vitae! Qui, molestias, dolor cumque fugit
> repellat eveniet nesciunt eius sapiente assumenda, eos eligendi
> explicabo natus laboriosam! Ut ullam cupiditate voluptate enim harum.
> Quae impedit atque quam sit eos explicabo sed dolorum aliquam! Harum, error!

```md
> This is a Blockquotes (Single Line)

> This is a Blockquotes (Multi Line) Lorem, ipsum dolor sit amet
> consectetur adipisicing elit. Quos a doloribus cupiditate repellendus
> sapiente dignissimos vitae! Qui, molestias, dolor cumque fugit
> repellat eveniet nesciunt eius sapiente assumenda, eos eligendi
> explicabo natus laboriosam! Ut ullam cupiditate voluptate enim harum.
> Quae impedit atque quam sit eos explicabo sed dolorum aliquam! Harum, error!
```
---
## Code Snippet

The code snippet can be put between three backticks
**\``` code```**

To enable language based syntax highlightning append the language name just after the start of the \```

e.g. \```c , \```cpp , \```java

Sample C code with syntax highlighted

```c
#include <stdio.h>
int main(){
    printf("Hello World");
    return 0;
}

```
---
## Tables

| First Header        |    Second Header    |        Third Header |
| ------------------- | :-----------------: | ------------------: |
| Content from cell 1 | Content from cell 2 | Content from cell 3 |
| left-aligned        |      Centered       |       right-alignet |


```md
| First Header        |    Second Header    |        Third Header |
| ------------------- | :-----------------: | ------------------: |
| Content from cell 1 | Content from cell 2 | Content from cell 3 |
| left-aligned        |      Centered       |       right-alignet |

```
---
## Task Lists
- [x] @mentions, #refs, [links](), **formatting**, and ~~tags~~ supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item


```md
- [x] @mentions, #refs, [links](), **formatting**, and ~~tags~~ supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

```
---

>Other references-

- https://www.markdownguide.org/extended-syntax/
- https://learnxinyminutes.com/docs/markdown/