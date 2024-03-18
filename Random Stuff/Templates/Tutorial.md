---
date: <% tp.date.now("YYYY-MM-DD") %>
type: Tutorial
subject: <% tp.file.folder(true).split('/')[2] %>
tags: tutorial
week: <% this.app.workspace.getActiveFile().parent.name %>
topic: 
field: $SUBJECT
---

#<% tp.file.folder(true).split('/')[2] %>

