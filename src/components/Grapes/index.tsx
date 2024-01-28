import "grapesjs/dist/css/grapes.min.css";
import { GrapesjsReact } from "grapesjs-react";
import gjspresetwebpage from "grapesjs-preset-webpage";
import gjsblockbasic from "grapesjs-blocks-basic";
import gjspresetnewsletter from "grapesjs-preset-newsletter";
//@ts-ignore
import grapestailwind from "grapesjs-tailwind";
import grapesCkeditor from "grapesjs-plugin-ckeditor";
import CodeModal from "../Modals/CodeModal";
import { useState } from "react";

export const GrapesJsComponent = (): JSX.Element => {
  const [code, setCode] = useState<any>(null);
  const [open, setOpen] = useState<boolean>(false);
  const handleSave = (editor: any) => {
    const comps = editor.getHtml();
    const styles = editor.getCss();
    localStorage.setItem("gjs-html", comps);
    localStorage.setItem("gjs-css", styles);
  };
  return (
    <>
      <GrapesjsReact
        id="grapesjs-react"
        height="100vh"
        width="auto"
        headless={false}
        plugins={[
          gjspresetwebpage,
          gjsblockbasic,
          gjspresetnewsletter,
          grapestailwind,
          grapesCkeditor,
        ]}
        onInit={(editor: any) => {
          editor.Panels.removeButton("options", "fullscreen");
          editor.Panels.removeButton("options", "gjs-open-tm");

          // Save on demand
          editor.Panels.addButton("options", [
            {
              id: "save-db",
              className: "fa fa-floppy-o icon-blank",
              command: "save-db",
              attributes: { title: "Save DB" },
            },
          ]);
          editor.Commands.add("save-db", {
            run: (editor: any, sender: any) => {
              sender && sender.set("active");
              handleSave(editor);
            },
          });

          // Preview on demand
          editor.Commands.add("preview", {
            run: (editor: any, sender: any) => {
              sender && sender.set("active");
              handleSave(editor);
              window.open("/preview", "_blank");
            },
          });

          // Downlaod on demand
          editor.Panels.addButton("options", [
            {
              id: "download",
              className: "fa fa-download",
              command: "download",
              attributes: { title: "Download" },
            },
          ]);
          editor.Commands.add("download", {
            run: (editor: any, sender: any) => {
              sender && sender.set("active");

              const html = editor.getHtml();
              const css = editor.getCss();

              const template = `
                <!doctype html>
                <html lang="en">
                  <head>
                    <meta charset="utf-8">
                    <title>Template</title>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <script src="https://cdn.tailwindcss.com"></script>
                    <style>${css}</style>
                  </head>
                    ${html.split(">").join(">\n")}
                </html>
              `;

              const blob = new Blob([template], {
                type: "text/html",
              });

              // create a link for our script to 'click'
              const url = window.URL.createObjectURL(blob);
              const link = document.createElement("a");
              link.setAttribute("href", url);
              link.setAttribute("download", "index.html");
              // append the link to the document body
              document.body.appendChild(link);
              // dispatch a click event on the link
              link.click();
              // remove the link from the DOM
              document.body.removeChild(link);
            },
          });

          //   editor.Commands.add("export-template", {
          //     run: (editor: any, sender: any) => {
          //       const html = editor.getHtml();
          //       const css = editor.getCss();

          //       const template = `
          //         <!doctype html>
          //         <html lang="en">
          //           <head>
          //             <meta charset="utf-8">
          //             <title>Template</title>
          //             <meta charset="UTF-8">
          //             <meta name="viewport" content="width=device-width, initial-scale=1.0">
          //             <script src="https://cdn.tailwindcss.com"></script>
          //             <style>${css}</style>
          //           </head>
          //             ${html.split(">").join(">\n")}
          //         </html>
          //       `;
          //       setCode(template.split(">").join(">\n"));
          //       setOpen(true);
          //     },
          //   });
        }}
      />
      <CodeModal code={code} setOpen={setOpen} open={open} />;
    </>
  );
};
