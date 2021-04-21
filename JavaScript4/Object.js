const target = { 
  foo: 'bar' 
 }; 
 const handler = { 
  // 捕获器在处理程序对象中以方法名为键
  get() { 
  return 'handler override'; 
  } 
 }; 
 const proxy = new Proxy(target, handler); 
 console.log(proxy.foo)