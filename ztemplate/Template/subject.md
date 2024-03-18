---
type: subject
subject: subject
field:
period:
date: 2024-01-17
date modified: 2024-03-18
---

# Lecture Notes



# To-Do's

```dataview
TASK
WHERE contains(subject,"subject")
```


# Definitions

```dataview
TABLE difficulty as "Difficulty"
WHERE contains(subject,"subject") and type = "definition"
SORT difficulty DESC
```
