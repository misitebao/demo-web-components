// 定义Button类
class Button extends HTMLElement {
  constructor() {
    super();
    // 隐藏内部代码
    var shadow = this.attachShadow({ mode: 'closed' });

    // 获取模板内容
    // 因为复用（多实例）所以此处使用clone
    var templateElem = document.getElementById('buttonTemplate');
    var content = templateElem.content.cloneNode(true);

    // 参数传入
    content.querySelector('.button').innerText = this.getAttribute('text')

    // 将模板内容挂在到当前类
    shadow.appendChild(content);
  }
}
// 实现web components的核心API 
window.customElements.define('custom-button', Button);