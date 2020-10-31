elem.lastChild.nextSibling == null
// да, всегда равно null, так как elem.lastChild всегда последний, у него нет ссылки nextSibling.
elem.children[0].previousSibling == null
// в данном случае не всегда, так как перед elem.children[0] могут быть другие узлы. Например, previousSibling может быть текстовым узлом.
