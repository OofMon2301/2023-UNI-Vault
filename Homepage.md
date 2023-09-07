---
cssclass: dashboard
banner: "![[wallhaven-57o619.png]]"
banner_y: 0.44133
obsidianUIMode: preview
banner_x: 0.5
---
#Homepage 

---
# Engg1100
```dataview
Table file.name, file.size, Topic
from "2023/ENGG1100" and #ENGG1100
where file.size>1
```

- Lectures `$=dv.list(dv.pages('"2023/ENGG1100"').sort(f=>f.file.mtime.ts,"desc").limit(5).file.link)`
- Definitions `$=dv.list(dv.pages('"2023/Definitions"').sort(f=>f.file.mtime.ts,"desc").limit(10).file.link)`


# Math1050
```dataview
Table file.name, file.size, Topic
from #MATH1050
where file.size>500
```
- Lectures `$=dv.list(dv.pages('"2023/MATH1050"').sort(f=>f.file.mtime.ts,"desc").limit(5).file.link)`
- Definitions `$=dv.list(dv.pages('"2023/Definitions"and"#MATH1050"').sort(f=>f.file.mtime.ts,"desc").limit(10).file.link)`

# Math1051
```dataview
Table file.name, file.size, Topic
from #MATH1051
where file.size>500
```
- Lectures `$=dv.list(dv.pages('"2023/MATH1051"').sort(f=>f.file.mtime.ts,"desc").limit(5).file.link)`
- Definitions `$=dv.list(dv.pages('"2023/Definitions"and"#MATH1051"').sort(f=>f.file.mtime.ts,"desc").limit(10).file.link)`

# Math1061
```dataview
Table file.name, file.size, Topic
from #MATH1061
where file.size>500
```
- Lectures `$=dv.list(dv.pages('"2023/MATH1061"').sort(f=>f.file.mtime.ts,"desc").limit(5).file.link)`
- Definitions `$=dv.list(dv.pages('"2023/Definitions"and"#MATH1061"').sort(f=>f.file.mtime.ts,"desc").limit(10).file.link)`

# Vault Info

-   🗄️ Recent file updates `$=dv.list(dv.pages('').sort(f=>f.file.mtime.ts,"desc").limit(5).file.link)`
-   🔖 Tagged: favorite `$=dv.list(dv.pages('#favorite').sort(f=>f.file.name,"desc").limit(4).file.link)`
-   〽️ Stats
    -   File Count: `$=dv.pages().length`
    -   Word Count: 