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
TASK
WHERE contains(subject,"<% tp.file.title %>")
```


# Definitions

```dataview
TABLE chronological as "Time Created"
WHERE contains(subject,"<% tp.file.title %>") and type = "Definition"
SORT difficulty DESC
```