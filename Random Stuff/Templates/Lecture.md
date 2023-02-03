---
date: <% tp.date.now("DD-MM-YYYY") %>
type: Lecture
subject: <% tp.file.folder(true).split('/').pop() %>
tags: lecture
Topic:: 
---
# [[<% tp.file.title %>]]
#<% this.app.workspace.getActiveFile().parent.name %>
# Notes

<% tp.file.cursor(1) %>


