<%*
const fileName = await tp.system.prompt("File Name");
const subjectName = await tp.system.prompt("Subject");
const courseCode = subjectName.toUpperCase();
tp.file.rename(fileName);
tR += `---
subject: ${subjectName.toUpperCase()}
week: "${await tp.system.prompt("Week")}"
type: lecture
topic: ${await tp.system.prompt("Topic")}
date: ${tp.date.now("YYYY-MM-DD")}
---\n`
-%>
#<% courseCode %>

# <% tp.file.cursor() %>

