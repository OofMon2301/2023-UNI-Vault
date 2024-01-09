---
date: <% tp.date.now("DD-MM-YYYY") %>
type: Definition
subject: <% this.app.vault.getAbstractFileByPath(this.app.workspace.getLastOpenFiles()[0]).parent.name %>
tags: definition
---
# [[<% tp.file.title %>]]

# Definition of <% tp.file.title %>:
*Created on <% tp.file.creation_date("HH:mm DD-MM-YYYY") %>
<% await tp.file.move("/2024/Definitions/" + tp.file.title) %>

