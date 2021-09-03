<template>
  <div class="hello">
    <el-dialog
      title="sourceMap映射"
      :visible.sync="visible"
      width="500px"
      :before-close="handleClose"
    >
      <el-tabs v-model="activeTabName">
        <el-tab-pane label="本地上传" name="local">
          <el-upload
            style="width: 100%"
            class="upload-demo"
            drag
            action=""
            :before-upload="sourceMapUpload"
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或<em>点击上传</em>
            </div>
          </el-upload>
        </el-tab-pane>
        <el-tab-pane label="远程加载" name="request">远程加载</el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>

<script>
import sourceMap from "source-map-js";

export default {
  name: "errDailog",

  data() {
    return {
      visible: false,
      activeTabName: "local",
      stackFrame: {
        columnNumber: 3259,
        fileName: "chunk-0e0f98cc.3e37e607.js",
        lineNumber: 1,
      },
    };
  },
  methods: {
    handleClose(done) {
      done();
    },
    sourceMapUpload(file) {
      if (file.name.substring(file.name.lastIndexOf(".") + 1) !== "map") {
        this.$message.error(`请上传.js.map 文件！`);
        return;
      }
      console.log(file.name.substring(0, file.name.indexOf(".") - 1));
      if (
        file.name.substring(0, file.name.indexOf(".")) !==
        this.stackFrame.fileName
      ) {
        this.$message.error(`请上传对应的map文件`);
        return;
      }
      const reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = (event) => {
        const look_source = this.lookSource(
          event.target.result,
          this.stackFrame.lineNumber,
          this.stackFrame.columnNumber
        );
        console.log(look_source);
        this.$emit("lookSource", look_source);
        this.visible = false;
      };
      return false;
    },
    lookSource(source_map, line, column) {
      try {
        const consumer = new sourceMap.SourceMapConsumer(source_map);
        const lookUpRes = consumer.originalPositionFor({
          line: Number(line),
          column: Number(column),
        });
        const source = consumer.sourceContentFor(lookUpRes.source);
        return {
          source,
          column: lookUpRes.column,
          line: lookUpRes.line,
        };
      } catch (e) {
        this.$message.error(`未能解析出sourceMap！`);
        console.log(e);

        return {
          source: null,
        };
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 50%;
  margin: 0 auto;
}
</style>
