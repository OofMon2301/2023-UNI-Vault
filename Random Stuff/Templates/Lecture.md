---
date: <% tp.date.now("DD-MM-YYYY") %>
type: Lecture
subject: <% tp.file.folder(true).split('/').pop() %>
tags: lecture
Topic:: 
---
# [[<% tp.file.title %>]]
#<% tp.file.folder(true).split('/').pop() %>
# Notes

<% tp.file.cursor(1) %>

