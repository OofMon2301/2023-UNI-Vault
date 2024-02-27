---
date: <% tp.date.now("DD-MM-YYYY") %>
type: Lecture
subject: <% tp.file.folder(true).split('/')[2] %>
tags: lecture
week: <% this.app.workspace.getActiveFile().parent.name %>
Topic: 
field: $SUBJECT
---
#<% tp.file.folder(true).split('/')[2] %>

