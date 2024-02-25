---
date: <% tp.date.now("DD-MM-YYYY") %>
type: Lecture
subject: <% this.app.workspace.getActiveFile().parent.name %>
tags: lecture
Topic:
field: $SUBJECT
---
#<% tp.file.folder(true).split('/')[2] %>[[Lecture 1 - Binary Arithmetic]]

