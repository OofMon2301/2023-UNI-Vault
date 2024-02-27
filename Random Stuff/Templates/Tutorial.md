---
date: <% tp.date.now("DD-MM-YYYY") %>
type: Tutorial
subject: <% tp.file.folder(true).split('/')[2] %>
tags: tutorial
week: <% this.app.workspace.getActiveFile().parent.name %>
Topic: 
field: $SUBJECT
---
#<% tp.file.folder(true).split('/')[2] %>

