---
date: <% tp.date.now("DD-MM-YYYY") %>
type: Definition
subject: <% tp.file.folder(true).split('/').pop() %>
tags: definition
---
# [[<% tp.file.title %>]]

# Definition of <% tp.file.title %>:
*Created on <% tp.file.creation_date("HH:mm DD-MM-YYYY") %>
<% await tp.file.move("/2023/Definitions/" + tp.file.title) %>

