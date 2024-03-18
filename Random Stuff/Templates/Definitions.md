---
date: <% tp.date.now("YYYY-MM-DD") %>
type: Definition
subject: <% this.app.vault.getAbstractFileByPath(this.app.workspace.getLastOpenFiles()[0]).parent.name %>
tags: definition
chapter: <% this.app.vault.getAbstractFileByPath(this.app.workspace.getLastOpenFiles()[0]).parent.name %>
---

# [[<% tp.file.title %>]]

# Definition of <% tp.file.title %>:
*Created on <% tp.file.creation_date("HH:mm DD-MM-YYYY") %>
<% await tp.file.move("/2024/Definitions/" + tp.file.title) %>

