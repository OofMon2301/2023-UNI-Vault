<%*
const fileName = await tp.system.prompt("File Name");
tp.file.rename(fileName);
tR += `---\ntest: ${fileName}\n---`
-%>

<% tp.file.cursor() %>

