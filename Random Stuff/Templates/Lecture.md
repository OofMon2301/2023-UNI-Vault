---
date: <% tp.date.now("YYYY-MM-DD") %>
type: Lecture
subject: <% tp.file.folder(true).split('/')[2] %>
tags: lecture
week: <% this.app.workspace.getActiveFile().parent.name %>
Topic: 
field: $SUBJECT
---

# <% tp.file.title %>
#<% tp.file.folder(true).split('/')[2] %>

