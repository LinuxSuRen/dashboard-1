import { getSqlResult } from '@/api/editor'
import { Message } from '@arco-design/web-vue'
import { defineStore } from 'pinia'

const useCodeRunStore = defineStore('codeRun', {
  // state： data
  state: () => ({
    usedCode: <any>[],
    runResult: <any>[],
    resultTabIndex: <any>[],
    activeTabKey: <number>0,
    activeTabData: <any>{},
  }),
  // getters: computed
  getters: {},
  // actions: methods

  actions: {
    async fetchSqlResult(runCode: any) {
      try {
        const res = await getSqlResult(runCode)
        Message.success({
          content: 'success',
        })
        if (runCode.toLocaleLowerCase().substring(0, 6) === 'select') {
          this.usedCode.push(runCode)
          this.runResult.push(res)
          this.resultTabIndex.push(this.resultTabIndex.length)
          this.activeTabKey = this.resultTabIndex.length - 1
        }
        // todo: log info into logs.
      } catch (error) {
        // todo: log error into logs.
        console.log(error)
      }
    },
  },
})
export default useCodeRunStore
