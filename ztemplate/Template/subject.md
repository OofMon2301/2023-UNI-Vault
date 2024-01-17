---
aliases:
type: subject
subject: subject
field:
period:
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
