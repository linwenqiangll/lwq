<template>
  <h1>小目标列表</h1>
  <h3 style="margin: 20px 0">添加小目标</h3>
  <input
    @keyup.enter="handleAdd"
    class="inputCss"
    type="text"
    placeholder="输入小目标后，按回车确认"
  />
  <div style="margin: 20px 0">
    <span>共有{{ todoList.length }}个小目标，</span>
    <span>已完成{{ completedLength }}，还有{{ todoList.length - completedLength }}条未完成</span>
  </div>
  <ul class="ulBtn">
    <li
      v-for="(item, index) in tabs"
      :key="index"
      :class="{ active: checkStatus === item.value }"
      @click="tabChange(item)"
    >
      {{ item.label }}
    </li>
  </ul>
  <ul style="width: 500px">
    <li
      style="margin: 20px 0; display: flex; align-items: center; justify-content: space-between"
      v-for="(item, index) in showList"
      :key="index"
    >
      <div style="display: flex" v-if="!item.edit">
        <input
          type="checkbox"
          style="margin-right: 10px"
          @change="statusChange(item)"
          :checked="item.done === 'completed'"
        />
        <span @dblclick="editChange(item)">{{ item.text }}</span>
      </div>
      <input
        v-else
        @keyup.enter="handleEdit($event, item)"
        @blur="handleEdit($event, item)"
        class="inputCss"
        type="text"
        ref="editInput"
        style="width: 300px"
        :value="item.text"
        placeholder="输入小目标后，按回车确认"
      />
      <button @click="handelDel(item)">删除</button>
    </li>
  </ul>
</template>

<script>
import { reactive, toRefs, computed, ref, nextTick, onMounted } from 'vue'
export default {
  name: 'HelloWorld',
  setup() {
    const tabs = [
      {
        label: '全部',
        value: 'all'
      },
      {
        label: '已完成',
        value: 'completed'
      },
      {
        label: '未完成',
        value: 'unCompleted'
      },
    ]
    const editInput = ref(null)
    const checkStatus = ref('all')
    const todoList = reactive([])
    const showList = computed(() => {
      if (checkStatus.value === 'all') {
        return todoList
      }
      return todoList.filter(item => item.done === checkStatus.value)
    })
    let completedLength = computed(() => {
      return todoList.filter(item => item.done === 'completed').length
    })
    const handleAdd = (e) => {
      if (!e.target.value) {
        alert('请输入小目标')
        return
      }

      todoList.push({
        text: e.target.value,
        done: 'unCompleted',
        edit: false
      })
      e.target.value = ''
    }
    const handleEdit = (e, item) => {
      item.text = e.target.value
      item.edit = !item.edit
    }
    const handelDel = (item) => {
      const index = todoList.indexOf(item)
      todoList.splice(index, 1)
    }
    const statusChange = (item) => {
      if (item.done === 'completed') {
        item.done = 'unCompleted'
      } else {
        item.done = 'completed'
      }

    }
    const tabChange = (item) => {
      checkStatus.value = item.value
    }

    const editChange = (item) => {
      item.edit = !item.edit
      nextTick(() => {
        editInput.value?.focus(); // 获取焦点
      })
    }
    return toRefs({
      todoList,
      handleAdd,
      statusChange,
      tabs,
      tabChange,
      checkStatus,
      showList,
      completedLength,
      handelDel,
      handleEdit,
      editInput,
      editChange
    })
  }
}
</script>
<style scoped>
.inputCss {
  width: 500px;
  height: 30px;
  border: none;
  border: 1px solid #000000;
  border-radius: 6px;
  outline: none;
  padding-left: 10px;
}
.inputCss:focus {
  border-color: #66afe9;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(102, 175, 233, 0.6);
}
.ulBtn {
  display: flex;
}
.ulBtn > li {
  margin: 0 10px;
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
}
.ulBtn > li.active {
  user-select: none;
  color: #66afe9;
}
</style>
