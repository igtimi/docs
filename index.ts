import Turndown from "turndown";
import turndownPluginGfm from "turndown-plugin-gfm";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const text = await Bun.file("Solutions.json").text();

let toFetch: { url: string; outPath: string }[] = [];


const getTurndown = () => {
  return new Turndown({}).use(turndownPluginGfm.gfm)
    .addRule("pre", {
      filter: ["pre"],
      replacement: function (content) {
        if (content.indexOf("\n") === -1) {
          return "```" + content + "```";
        }
        return "\n```\n" + content + "\n```\n";
      },
    })
    .addRule("img", {
      filter: ["img"],
      replacement: function (content, node) {
        // download and replace image
        const url = new URL(node.src);
        let filename = path.basename(url.pathname);
        if (path.extname(filename) === "") {
          filename += ".png";
        }

        // toFetch.push({ outPath: "assets/images/" + filename, url: node.src });
        let size = "";
        // console.log(node.style.width, node.style.height);
        // let widthMatch = /width:\s*([\d\.]+%?)\s*;/gm.exec(node.style);
        if (node.style.width) {
          size += `width="${node.style.width}"`;
        }
        if (node.style.height) {
          size += ` height="${node.style.height}"`;
        }
        let res = `<img src="../../../assets/images/${filename}" alt="${node.alt}" ${size} />`;
        // console.log(res);
        return res;
      },
    })
    .addRule("a", {
      filter: ["a"],
      replacement: function (content, node) {
        
        const link = encodeURI(convertLink(node.href));
        return `[${content}](${link})`;
      },
    });
};

const convertLink = (href: string) => {
  let url;
  if (!href.startsWith("http")){
    return href;
  }
  try{
  url = new URL(href);
  }catch(e){
    console.log("Invalid link", href);
    return href;
  }
  if (href.indexOf("/articles/") !== -1) {
    let id = path.basename(url.pathname).split("-").at(0);
    const link =links.articles[Number(id)]
    if (!link) {
      console.log("Could not find link for article", id, href);
      return href;
    }
    return "../../"+link.join("/");
  }
  if (href.indexOf("/folders/") !== -1) {
    let id = path.basename(url.pathname);
    const link = links.folders[Number(id)];
    if (!link) {
        console.log("Could not find link for folder", id, href);
      return href;
    }
    return "../../"+link.join("/");
  }
  if (href.indexOf("/solution/") !== -1 || href.indexOf("/solutions/") !== -1) {
    let id = path.basename(url.pathname);
    const link = links.solutions[Number(id)];
    if (!link) {
      console.log("Could not find link for solution", id, href);
      return href;
    }
    return "../../"+link.join("/");
  }
  return href;
}

// link database
const links = {
  solutions: {},
  articles: {},
  folders: {},
};

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}


let docsPath = "docs";

const formatSolution = async (solution) => {
  let turndown = getTurndown();

  for (const folder of solution.category.folders) {
    let folderPath = [docsPath, ...links.folders[folder.id]].join("/");
    await mkdir(folderPath, { recursive: true });
    for (const article of folder.articles) {
      let articlePath = [docsPath, ...links.articles[article.id]].join("/");
      const header = `---
title: "${article.title}"
date: ${article.updated_at.slice(0, 10)}
---
# ${article.title}\n\n`;
      const md =
        header + turndown.turndown(article.description);
      // console.log(article);
      await Bun.write(articlePath, md);
      // await Bun.write(
      //   folderPath + "/" + article.title + ".html",
      //   article.description
      // );
    }
  }
};

const findLinks=(solutions)=>{
  for (const solution of solutions) {
    let categoryPath =  [solution.category.name];
    links.solutions[solution.id] = categoryPath;
    for (const folder of solution.category.folders) {
      let folderPath =  [...categoryPath,folder.name];
      links.folders[folder.id] = folderPath
      for (const article of folder.articles) {
        links.articles[article.id] = [...folderPath,`${article.title}.md`];
      }
    }
  }
}

const solutions = JSON.parse(text);
findLinks(solutions);
for (const solution of solutions) {
  await formatSolution(solution);
}

for (const item of toFetch) {
  if (item.url.indexOf("support.yacht-bot.com/helpdesk/attachments") !== -1) {
    console.log("Skipping attachment, behind login", item.url);
    continue;
  }
  console.log("Writing", item.outPath, "from", item.url);
  const response = await fetch(item.url);
  const stream = await response.blob();
  await Bun.write(item.outPath, stream);
  await delay(250);
}

// console.log(markdown);
