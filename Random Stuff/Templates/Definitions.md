---
date: 2024-01-09
type: Definition
subject: <% this.app.vault.getAbstractFileByPath(this.app.workspace.getLastOpenFiles()[0]).parent.name %>
tags: definition
chapter: <% this.app.vault.getAbstractFileByPath(this.app.workspace.getLastOpenFiles()[0]).parent.name %>
date modified: 2024-03-18
---

# [[<% tp.file.title %>]]

# Definition of <% tp.file.title %>:
*Created on <% tp.file.creation_date("HH:mm DD-MM-YYYY") %>
<% await tp.file.move("/2024/Definitions/" + tp.file.title) %>

