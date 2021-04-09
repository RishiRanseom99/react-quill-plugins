import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import ReactDOMServer from "react-dom/server";
import ImageResize from "./quillplugin/Image-Resize/ImageResize";
// import { ImageResize } from 'quill-image-resize-module';
import ProductsWithGrid from "./ProductCollection";
import ProductCollectionWidget from './ProductCollectionWidget';
import "./Quill1.css";
// const { convertHtmlToDelta } = require('node-quill-converter');
let Inline = Quill.import("blots/inline");
let Block = Quill.import("blots/block");
let BlockEmbed = Quill.import("blots/block/embed");
const products = [
  {
    image: "https://picsum.photos/200",
  },
  {
    image: "https://picsum.photos/200",
  },
  {
    image: "https://picsum.photos/200",
  },
  {
    image: "https://picsum.photos/200",
  },
  {
    image: "https://picsum.photos/200",
  },
  {
    image: "https://picsum.photos/200",
  },
  {
    image: "https://picsum.photos/200",
  },
  {
    image: "https://picsum.photos/200",
  },
  {
    image: "https://picsum.photos/200",
  },
  {
    image: "https://picsum.photos/200",
  },
  {
    image: "https://picsum.photos/200",
  },
  {
    image: "https://picsum.photos/200",
  },
  {
    image: "https://picsum.photos/200",
  },
  {
    image: "https://picsum.photos/200",
  },
  {
    image: "https://picsum.photos/200",
  },
  {
    image: "https://picsum.photos/200",
  },
  {
    image: "https://picsum.photos/200",
  },
  {
    image: "https://picsum.photos/200",
  },
];
Quill.register("modules/ImageResize", ImageResize);
class ProductCollection extends BlockEmbed {
  static create(value) {
    var node = super.create();

    node.innerHTML = `
      ${ReactDOMServer.renderToString(<ProductsWithGrid product={products} />)}
      `;
    return node;
  }
}
ProductCollection.blotName = "ProductCollection";
ProductCollection.className = "container";
ProductCollection.tagName = "DIV";
Quill.register(ProductCollection, true);

class ImageGrid extends BlockEmbed {
  static create(value) {
    let node = super.create();
    node.setAttribute("alt", value.alt);
    node.setAttribute("src", value.url);
    return node;
  }

  static value(node) {
    return {
      alt: node.getAttribute("alt"),
      url: node.getAttribute("src"),
    };
  }
}
ImageGrid.blotName = "image";
ImageGrid.tagName = "img";
Quill.register(ImageGrid);

function Quill1() {
  const editorHtml = useRef(0);
  let editor;
  const text = ReactDOMServer.renderToString(
    <ProductsWithGrid product={products} />
  );
  console.log(text);
  const handleProductCollection = () => {
    let range = editor.getSelection(true);
    editor.insertEmbed(
      range.index + 1,
      "ProductCollection",
      "",
      Quill.sources.USER
    );
  };
  const [
    productCollectionWidgetState,
    setProductCollectionWidgetState,
  ] = useState(true);
  useEffect(() => {
    let options = {
      debug: "info",
      modules: {
        toolbar: {
          container: "#toolbar",
        },
        ImageResize: {
          modules: ["Resize"],
        },
      },
      placeholder: "Compose an epic...",
      readOnly: false,
      theme: "snow",
    };
    editor = new Quill(".editor", options);
  }, [productCollectionWidgetState]);
  var Block = Quill.import("blots/block");
  Block.tagName = "div";
  Quill.register(Block);
  return (
    <div className="quill-container">
      <h1 className="heading">Quill</h1>
      {productCollectionWidgetState ? (
        <>
          <div id="toolbar">
            <button
              className="product_collection-btn"
              onClick={handleProductCollection}
            >
              PC{" "}
            </button>
            <select class="ql-size">
              <option value="small"></option>
              <option selected></option>
              <option value="large"></option>
              <option value="huge"></option>
            </select>

            <button class="ql-bold"></button>
            <button class="ql-script" value="sub"></button>
            <button class="ql-script" value="super"></button>
            <button class="ql-indent" value="+1"></button>
            <button class="ql-indent" value="-1"></button>
          </div>
          <div className="editor" ref={editorHtml}></div>
          <button
            onClick={() => {
                setProductCollectionWidgetState(false)
              console.log(editorHtml.current);
              console.log(editor.getContents());
            }}
          >
            Create product collection
          </button>
        </>
      ) : (
          <ProductCollectionWidget widgetToggler={setProductCollectionWidgetState}/>
        
      )}
    </div>
  );
}

export default Quill1;
