/**
 * 字符串的扩展
 */

/**
 *  1、字符串的 Unicode 表示法。
 * 
 * 单字节表示法：允许使用 \uxxxx 形式表示一个字符，xxxx 表示字符的码点。范围： \u0000 ~ \uFFFF 。
 * 双字节表示法：在单字节表示法的基础上加上 {} 即：\u{xxxx...} 将码点使用 {} 包裹起来。
 * JavaScript 共有六种表示一个字符：
 *  '\z' === 'z'  // true
    '\172' === 'z' // true
    '\x7A' === 'z' // true
    '\u007A' === 'z' // true
    '\u{7A}' === 'z' // true
 */


/**
 * 2、字符串的遍历器接口 iterator
 * 
 * ES6 默认给字符串添加了 iterator 接口，使得字符串能够被 for...of 遍历。所以也能被 ... 扩展符遍历，输出由每一个字符组成的数组。
 * 
 * 遍历器最大的有点事可以识别大于 0xFFFF 的码点。
 * 
 * 
 */
let unicodeText = String.fromCodePoint(0x20BB7);
for (let i = 0; i < unicodeText.length; i++) {
  console.log('for: ', unicodeText[i])
}
for (const i of unicodeText) {
  console.log('for...of: ', i);
}

/**
 * 3、直接输入 U+2028 和 U+2029
 * 字符串的两种表达方式：直接输入字符 和 字符的转义形式
 * 字符串中规定5个字符必须使用转义形式
 *  U+005C：反斜杠（reverse solidus)
    U+000D：回车（carriage return）
    U+2028：行分隔符（line separator）
    U+2029：段分隔符（paragraph separator）
    U+000A：换行符（line feed）
    JSON 格式中允许使用 U+2028 和 U+2029 但是 JSON.parse() 在解析的时候会报错
    模板字符串 eval() 中不会报错，但正则表达是中不允许直接输入 U+2028 和 U+2029 
    没有问题 因为 JSON 中本身就不允许直接包含正则表达式。
 */
console.log('\u2028');
// console.log(JSON.parse('\u2028')); // 会报错。
console.log(eval('\u2028'));  // 不会 报错但输出是 undefined。

/**
 * 4、JSON.stringify() 的改造
 * 原因：根据标准，JSON 数据必须是 UTF-8 编码，但现在 JSON.stringify() 方法有可能返回不符合 UTF-8 标准的字符串。
 * UTF-8 标准规定，0xD800 到 0xDFFF 之间的码点，不能单独使用，必须配对使用。
 * JSON.stringify() 的问题在于可能返回 0xD800 到 0xDFFF 之间的单个码点。
 * 为了保证返回的都是合法的 UTF-8 字符 ES2019 改变了 JSON.stringify() 的行为，如果遇到 0xD800 到 0xDFFF 之间的单码点，或者不存在的配对形式，他会返回转义字符串，让应用自己决定下一步的处理。
 */
console.log(JSON.stringify('\u{D834}'));

/**
 * 5、模板字符串（ template string）
 * 增强版的字符串，用反引号（`）(capslock + ~ 触发)，1、可当做普通的字符串，2、可定义多行字符串，内部可换行，3、字符串中可嵌入变量，使用  ${} 大括号内可以任意放置 JavaScript 表达式。
 * 注意：模板字符串就是字符串，可调用字符串的方法。模板字符串是使用反引号的，如果模板字符串内部要使用反引号，需要 \ 进行转义。
 */

/**
 * 6、标签模板
 * 作用：1、过滤 HTML 字符串，防止用户输入恶意内容。2、多语言转换（国际化处理）
 */



/**
 * 字符串的新增方法
 */


/**
 * 1、String.fromCodePoint()
 * ES5 提供的 String.fromCharCode() 方法，用于从 Unicode 码点返回对应的字符，但这个方法不能识别码点大于 0xFFFF 的字符。
 * ES6 提供的 String.fromCodePoint() 方法，用于弥补 String.fromCharCode() 方法上的不足。作用上与 codePointAt() 方法相反。
 * 如果 String.fromCodePoit 方法有多个参数，则他们被合并成一个字符串返回。
 * 注意：String.fromCodePoint 方法定义在 String 对象上，而 codePointAt 方法定义在字符串的实例对象上。
 */

/**
 * 2、String.raw() 
 * 该方法返回一个斜杠都被转义的字符串，往往用于模板字符串的处理方法。
 */
console.log(String.raw`hi\\n${2+3}`);

