---
date: <% tp.date.now("DD-MM-YYYY") %>
type: Definition
subject: 
tags: definition
---
# [[<% tp.file.title %>]]

# Definition of <% tp.file.title %>:
*Updated as of <% tp.file.last_modified_date("HH:mm DD-MM-YYYY") %>*
<% await tp.file.move("/2023/Definitions/" + tp.file.title) %>

