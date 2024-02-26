---
date: <% tp.date.now("DD-MM-YYYY") %>
type: Workshop
subject: <% tp.file.folder(true).split('/')[2] %>
tags: workshop
week: <% this.app.workspace.getActiveFile().parent.name %>
Topic:
field: $SUBJECT
---
#<% tp.file.folder(true).split('/')[2] %>

