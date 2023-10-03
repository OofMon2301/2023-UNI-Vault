---
date: <% tp.date.now("DD-MM-YYYY") %>
type: Lecture
subject: <% this.app.workspace.getActiveFile().parent.name %>
tags: lecture
Topic:: 
---
# [[<% tp.file.title %>]]
#<% tp.file.folder(true).split('/')[2] %>


