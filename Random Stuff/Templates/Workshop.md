---
date: <% tp.date.now("YYYY-MM-DD") %>
type: Workshop
subject: <% tp.file.folder(true).split('/')[2] %>
tags: workshop
week: <% this.app.workspace.getActiveFile().parent.name %>
topic: 
field: $SUBJECT
---

#<% tp.file.folder(true).split('/')[2] %>

