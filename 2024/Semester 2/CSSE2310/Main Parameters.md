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

```c
#include <stdio.h>

int main(int, argc, char** argv){
	for (int = 0; i < argc; ++i){
		printf("%s", argv[i]);
	}
	printf("/n");
	return 0;
}
```

