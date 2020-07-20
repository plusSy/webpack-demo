const pluginName = "ConsoleLogOnBuildWebpackPlugin";

class ConsoleLogOnBuildWebpackPlugin {
  constructor(options) {
    console.log("参数--------", options)
  }

  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log("=====webpack  开始构建=====")
    })
  }
}


module.exports = ConsoleLogOnBuildWebpackPlugin;