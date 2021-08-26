<template>
  <div class="hello">
    <el-form
      :model="stackFrame"
      ref="stackFrame"
      label-width="100px"
      size="small"
    >
      <el-form-item label="fileName" prop="fileName">
        <el-input v-model="stackFrame.fileName"></el-input>
      </el-form-item>
      <el-form-item label="lineNumber" prop="lineNumber">
        <el-input v-model="stackFrame.lineNumber" type="number"></el-input>
      </el-form-item>
      <el-form-item label="columnNumber" prop="columnNumber">
        <el-input v-model="stackFrame.columnNumber" type="number"> </el-input>
      </el-form-item>
    </el-form>
    <el-button @click="uploadFile" type="primary" style="margin-top: 20px"
      >上传map文件</el-button
    >
    <ErrDailog ref="err" @lookSource="lookSource" />
    <pre class="errCode" v-html="preLineStartEnd()"></pre>
  </div>
</template>

<script>
import ErrDailog from "@/components/ErrDailog.vue";

export default {
  name: "geterr",
  components: { ErrDailog },
  data() {
    return {
      stackFrame: {
        fileName: "",
        columnNumber: "",
        lineNumber: "",
      },
      errSource: {
        source: "",
        line: "",
      },
    };
  },
  methods: {
    uploadFile() {
      this.$refs.err.visible = true;
      this.$refs.err.stackFrame = this.stackFrame;
    },
    lookSource(obj) {
      this.errSource = obj;
    },
    preLineStartEnd() {
      // 先获取源码有多少行
      if (!this.errSource.source) return;
      const transformationLine = this.errSource.source.split("\n");
      const len = transformationLine.length - 1;
      const start = this.errSource.line - 3 >= 0 ? this.errSource.line - 3 : 0;
      const end = start + 5 >= len ? len : start + 5; // 最多展示6行
      const line = this.errSource.line;
      let newLines = [];
      for (var i = start; i <= end; i++) {
        const content =
          i + 1 + ".    " + this.encodeHTML(transformationLine[i]);
        newLines.push(
          `<div class='code-line ${
            i + 1 == line ? "heightlight" : ""
          }'>${content}</div>`
        );
      }
      return newLines.join("");
    },
    encodeHTML(str) {
      console.log(str);
      if (!str || str.length == 0) return "";
      return str;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.hello {
  width: 50%;
  margin: 0 auto;
}
.errCode {
  padding: 10px;
  overflow: hidden;
  font-family: consolas, monospace;
  word-wrap: normal;
}
.code-line {
  padding: 4px;
}

.heightlight {
  color: #fff;
  background-color: #6c5fc7;
}
</style>
