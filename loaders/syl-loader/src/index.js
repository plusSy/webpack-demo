import { getOptions } from "loader-utils";
import validateOptions from "schema-utils";

import schema from './options.json';


export default function (source) {
  const options = getOptions(this);

  console.log("==============", options);

  validateOptions(schema, options, {
    name: "SYL Loader"
  })

  // 对应资源应用一些转换...

  return `export default ${ JSON.stringify(source) }`

}