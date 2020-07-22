function MyExampleWebpackPlugin (options) {
  console.log("====options====", options)
}

MyExampleWebpackPlugin.prototype.apply = function (compiler) {
  compiler.hooks.run.tap("compilation", function (compilation) {
    console.log("hello world!")
    // compilation.plugin("optiomize", function () {
    //   console.log("Assets are being optimized.")
    // })
  })

  compiler.hooks.run.tap("emit", function (compilation, callback) {
    

    setTimeout(() => {
      console.log("Done with async work...")

      console.log("=======================")
    }, 1000)

  })
}

module.exports = MyExampleWebpackPlugin;
