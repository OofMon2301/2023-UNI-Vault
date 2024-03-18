---
type: subject
subject: <% tp.file.title %>
degree: 
major: 
units: 2
year: 
date: <% tp.date.now("YYYY-MM-DD") %>
---

# Lecture Notes



# Lectures

```dataview
Table date as "Time Created", tags as "Tags"
from #<% tp.file.folder(true).split('/')[2] %>
```


# Definitions

```dataview
TABLE chronological as "Time Created"
WHERE contains(subject,"<% tp.file.title %>") and type = "Definition"
SORT difficulty DESC
```