---
type: subject
subject: <% tp.file.title %>
degree:
major:
units: 2
year:
---
# Lecture Notes



# Lectures

```dataview
Table date as "Time Created", tags as "Tags"
from #SUBJECT
```


# Definitions

```dataview
TABLE chronological as "Time Created"
WHERE contains(subject,"<% tp.file.title %>") and type = "Definition"
SORT difficulty DESC
```