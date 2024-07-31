---
date: 2024-07-29
type: Lecture
subject: CSSE2310
tags: lecture
week: CSSE2310
Topic: 
field: $SUBJECT
---

# Main Parameters
#CSSE2310

Main takes 2 parameters - together, they describe an array of strings.
```c
int args: // The number of strings in the array
char** argsv // The array itself
argv[0] // The program being run
%s // A placeholder for a string
```
C arrays are not range checked
Generally you can't reliably ask how big an array is (hence argc).

```c icon

#include <stdio.h>

int main(int, argc, char** argv){
	for (int = 0; i < argc; ++i){
		printf("%s", argv[i]);
	}
	printf("/n");
	return 0;
}
```

```js icon title:testing
let f = 3;
console.log(f)
```

```js icon title:tesing2
console.log(f)
```

```c icon
#include <stdio.h>

/*
** Prints an extended format of the sum of arg1 and arg2 provided.
*/
// Expected format: 10 + 20 = 30
void print_sum(int arg1, int arg2) {
    // Add your print statement here
    printf("%d + %d = %d\n", arg1, arg2, arg1 + arg2);
}

int main(void) {
    print_sum(10, 20);
    print_sum(0, 0);
    print_sum(-1, -10);
    print_sum(-1, 10);
    print_sum(4096, -4096);

    return 0;
}
```