# ZenLite 计数器页面示例

ZenLite 框架的简单计数器页面的示例。

```html
<column
  align-items="center"
  justify-content="center"
  width="100vw"
  height="100vh"
>
  <script>
    // 在这里定义全局变量 counter，初始值为 0
    window.counter = 0;
  </script>
  You have pushed the button this many times:
  <!-- 使用:content绑定动态内容 -->
  <span :content="counter" text-align="center"></span>
  <!-- 点击按钮触发事件，更新 counter 并调用 build 函数 -->
  <button
    width="48px"
    @click="(e)=>{
          counter++;
          build('span');
        }"
  >
    +
  </button>
</column>
```

## 描述

这个页面是一个简单的计数器，以下是主要功能的说明：

- `<column>` 组件：这是一个竖向的布局组件。

- `<script>` 标签：在这里定义了一个全局变量 `counter`，初始值为 0。这个变量将用于跟踪按钮点击次数。

- `<span>` 元素：用于显示按钮点击的次数，通过ZenLite的动态数据绑定:content来实现。`text-align` 样式属性用于水平居中显示。

- `<button>` 元素：一个点击按钮，点击时触发内联函数，该函数会将 `counter` 值递增，并调用 `build` 函数。按钮的宽度通过 `width` 属性设置为 48 像素。

每次点击按钮，`counter` 的值都会递增，并且 `span` 元素中显示的值也会相应更新。这个示例演示了简单的 数据绑定和事件处理。
