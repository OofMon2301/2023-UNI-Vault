---
subject: CSSE2310
week: "1"
type: lecture
topic: PrintF
date: 2024-07-31
---
#CSSE2310

# printf

A call to `printf` starts with a format string containing:
- Escape characters - start with `\` (eg `\n`,`\t`)
- Placeholders - start with `%` (Substitute an expression)
- Normal Characters

```c title:example
printf("Text here\n");	// Text + escape character
printf("3+5=%d\n", 8);
printf("3+5=%d\n", (3+5));
```
Placeholders must (correctly) describe the type of the expression being substituted.


