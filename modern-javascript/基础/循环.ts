// <labelName:>for循环
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, "")
    // 如果是空字符串或被取消，则中断并跳出这两个循环。
    if (!input) break outer // (*)
    // 用得到的值做些事……
  }
}
alert("Done!")
// 注意:break 指令必须在代码块内
