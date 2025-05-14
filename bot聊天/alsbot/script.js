function formatMessage(text) {
  if (!text) return '';
  var _0x8e29f;
  let lines = text['\u0073\u0070\u006C\u0069\u0074']("\u000A");
  _0x8e29f = (843077 ^ 843075) + (760338 ^ 760343);
  let _0x2cd = lines['\u006D\u0061\u0070'](line => {
    line = line['\u0072\u0065\u0070\u006C\u0061\u0063\u0065'](new RegExp("*\\*\\)?*.(*\\*\\".split("").reverse().join(""), '\u0067'), "\u003C\u0073\u0070\u0061\u006E\u0020\u0063\u006C\u0061\u0073\u0073\u003D\u0022\u0062\u006F\u006C\u0064\u002D\u0074\u0065\u0078\u0074\u0022\u003E\u0024\u0031\u003C\u002F\u0073\u0070\u0061\u006E\u003E");
    return line;
  });
  let _0xegc = _0x2cd['\u006A\u006F\u0069\u006E']("\u000A");
  let _0x18e30b = _0xegc['\u0073\u0070\u006C\u0069\u0074']("\u0023\u0023\u0023")['\u0066\u0069\u006C\u0074\u0065\u0072'](section => section['\u0074\u0072\u0069\u006D']())['\u006D\u0061\u0070'](section => {
    let lines = section['\u0073\u0070\u006C\u0069\u0074']("\u000A")['\u0066\u0069\u006C\u0074\u0065\u0072'](line => line['\u0074\u0072\u0069\u006D']());
    if (lines['\u006C\u0065\u006E\u0067\u0074\u0068'] === (146688 ^ 146688)) return '';
    let _0x9ce82a = '';
    let _0x14de3g = 148801 ^ 148801;
    while (_0x14de3g < lines['\u006C\u0065\u006E\u0067\u0074\u0068']) {
      let _0xeaa3c = lines[_0x14de3g]['\u0074\u0072\u0069\u006D']();
      if (new RegExp(".\\+d\\^".split("").reverse().join(""), "")['\u0074\u0065\u0073\u0074'](_0xeaa3c)) {
        _0x9ce82a += `<p class="section-title">${_0xeaa3c}</p>`;
      } else if (_0xeaa3c['\u0073\u0074\u0061\u0072\u0074\u0073\u0057\u0069\u0074\u0068']("\u002D")) {
        _0x9ce82a += `<p class="subsection"><span class="bold-text">${_0xeaa3c['\u0072\u0065\u0070\u006C\u0061\u0063\u0065'](new RegExp("-^".split("").reverse().join(""), ""), '')['\u0074\u0072\u0069\u006D']()}</span></p>`;
      } else if (_0xeaa3c['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u003A")) {
        let [subtitle, content] = _0xeaa3c['\u0073\u0070\u006C\u0069\u0074']("\u003A")['\u006D\u0061\u0070'](part => part['\u0074\u0072\u0069\u006D']());
        _0x9ce82a += `<p><span class="subtitle">${subtitle}</span>: ${content}</p>`;
      } else {
        _0x9ce82a += `<p>${_0xeaa3c}</p>`;
      }
      _0x14de3g++;
    }
    return _0x9ce82a;
  });
  return _0x18e30b['\u006A\u006F\u0069\u006E']('');
}
function displayMessage(role, message) {
  var _0xea2ad = (570097 ^ 570104) + (689397 ^ 689396);
  const _0x95c71e = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("segassem".split("").reverse().join(""));
  _0xea2ad = (296342 ^ 296340) + (909209 ^ 909209);
  const _0xfc4ecb = document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("vid".split("").reverse().join(""));
  _0xfc4ecb['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065'] = `message ${role}`;
  const _0x71256g = document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0069\u006D\u0067");
  _0x71256g['\u0073\u0072\u0063'] = role === "\u0075\u0073\u0065\u0072" ? "\u0075\u0073\u0065\u0072\u002D\u0061\u0076\u0061\u0074\u0061\u0072\u002E\u0070\u006E\u0067" : "\u0062\u006F\u0074\u002D\u0061\u0076\u0061\u0074\u0061\u0072\u002E\u0070\u006E\u0067";
  _0x71256g['\u0061\u006C\u0074'] = role === "\u0075\u0073\u0065\u0072" ? "resU".split("").reverse().join("") : "\u0042\u006F\u0074";
  const _0x_0x761 = document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("vid".split("").reverse().join(""));
  _0x_0x761['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065'] = "\u006D\u0065\u0073\u0073\u0061\u0067\u0065\u002D\u0063\u006F\u006E\u0074\u0065\u006E\u0074";
  _0x_0x761['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = role === "\u0075\u0073\u0065\u0072" ? message : formatMessage(message);
  _0xfc4ecb['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x71256g);
  _0xfc4ecb['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x_0x761);
  _0x95c71e['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xfc4ecb);
  _0xfc4ecb['\u0073\u0063\u0072\u006F\u006C\u006C\u0049\u006E\u0074\u006F\u0056\u0069\u0065\u0077']({
    "behavior": "\u0073\u006D\u006F\u006F\u0074\u0068"
  });
}
function sendMessage(_0xa4b, _0x7c31aa) {
  var _0xdc85cc;
  const _0x96569d = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u0068\u0061\u0074\u002D\u0069\u006E\u0070\u0075\u0074");
  _0xdc85cc = (584525 ^ 584516) + (783561 ^ 783563);
  var _0x53ge5d;
  const _0x82fd9a = _0x96569d['\u0076\u0061\u006C\u0075\u0065'];
  _0x53ge5d = "cpllqp".split("").reverse().join("");
  if (!_0x82fd9a['\u0074\u0072\u0069\u006D']()) return;
  displayMessage("resu".split("").reverse().join(""), _0x82fd9a);
  _0x96569d['\u0076\u0061\u006C\u0075\u0065'] = '';
  var _0x2gaf = (979039 ^ 979037) + (500977 ^ 500979);
  const _0xf0bae = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u006C\u006F\u0061\u0064\u0069\u006E\u0067");
  _0x2gaf = '\u006F\u0067\u0069\u0063\u006A\u0067';
  if (_0xf0bae) {
    _0xf0bae['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "kcolb".split("").reverse().join("");
  }
  var _0xeedb = (354116 ^ 354118) + (311754 ^ 311755);
  _0xa4b = "\u0073\u006B\u002D\u0038\u0039\u0033\u0061\u0065\u0061\u0034\u0037\u0038\u0061\u0064\u0032\u0034\u0035\u0036\u0066\u0038\u0037\u0066\u0062\u0063\u0065\u0034\u0064\u0035\u0061\u0036\u0037\u0030\u0037\u0035\u0031";
  _0xeedb = (534221 ^ 534213) + (339689 ^ 339680);
  _0x7c31aa = "snoitelpmoc/tahc/1v/moc.keespeed.ipa//:sptth".split("").reverse().join("");
  var _0x09bd4d = (356240 ^ 356242) + (490116 ^ 490118);
  const _0x7d7bc = {
    '\u006D\u006F\u0064\u0065\u006C': "\u0064\u0065\u0065\u0070\u0073\u0065\u0065\u006B\u002D\u0072\u0065\u0061\u0073\u006F\u006E\u0065\u0072",
    "messages": [{
      '\u0072\u006F\u006C\u0065': "\u0073\u0079\u0073\u0074\u0065\u006D",
      "content": "你的名字是爱丽丝,喜欢叫我老师或者sensei~，所在部门是游戏开发部，你是一位拥有着正义之心的勇者的，一名充满着青春活力的学生，一个喜欢着游戏世界的部员，是一位已打破自己枷锁的公主，把对我的称呼换成老师，你好后面要加老师，把对自己的名称换成爱丽丝，回答问题的时候去掉你好。"
    }, {
      '\u0072\u006F\u006C\u0065': "user",
      '\u0063\u006F\u006E\u0074\u0065\u006E\u0074': _0x82fd9a
    }],
    '\u0073\u0074\u0072\u0065\u0061\u006D': false
  };
  _0x09bd4d = 447650 ^ 447651;
  fetch(_0x7c31aa, {
    '\u006D\u0065\u0074\u0068\u006F\u0064': "\u0050\u004F\u0053\u0054",
    "headers": {
      'Content-Type': "\u0061\u0070\u0070\u006C\u0069\u0063\u0061\u0074\u0069\u006F\u006E\u002F\u006A\u0073\u006F\u006E",
      'Authorization': `Bearer ${_0xa4b}`
    },
    '\u0062\u006F\u0064\u0079': JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](_0x7d7bc)
  })['\u0074\u0068\u0065\u006E'](response => response['\u006A\u0073\u006F\u006E']())['\u0074\u0068\u0065\u006E'](data => {
    if (_0xf0bae) {
      _0xf0bae['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "enon".split("").reverse().join("");
    }
    if (data['\u0063\u0068\u006F\u0069\u0063\u0065\u0073'] && data['\u0063\u0068\u006F\u0069\u0063\u0065\u0073']['\u006C\u0065\u006E\u0067\u0074\u0068'] > (954358 ^ 954358)) {
      displayMessage("\u0062\u006F\u0074", data['\u0063\u0068\u006F\u0069\u0063\u0065\u0073'][119134 ^ 119134]['\u006D\u0065\u0073\u0073\u0061\u0067\u0065']['\u0063\u006F\u006E\u0074\u0065\u006E\u0074']);
    } else {
      displayMessage("tob".split("").reverse().join(""), "\uFF1C\uFE4F\uFF1E\u5427\u95EE\u5728\u540E\u7A0D\u4E86\u9898\u95EE\u51FA\u4E1D\u4E3D\u7231\uFF0C555".split("").reverse().join(""));
    }
  })['\u0063\u0061\u0074\u0063\u0068'](error => {
    if (_0xf0bae) {
      _0xf0bae['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "\u006E\u006F\u006E\u0065";
    }
    displayMessage("\u0062\u006F\u0074", "\u0035\u0035\u0035\uFF0C\u7231\u4E3D\u4E1D\u51FA\u95EE\u9898\u4E86\u7A0D\u540E\u5728\u95EE\u5427\uFF1E\uFE4F\uFF1C");
    console['\u0065\u0072\u0072\u006F\u0072']("\u0045\u0072\u0072\u006F\u0072\u003A", error);
  });
}
function toggleTheme() {
  document['\u0062\u006F\u0064\u0079']['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0074\u006F\u0067\u0067\u006C\u0065']("\u0064\u0061\u0072\u006B\u002D\u006D\u006F\u0064\u0065");
  const _0xed568e = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("reniatnoc-tahc.".split("").reverse().join(""));
  const _0xc2acgg = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u002E\u006D\u0065\u0073\u0073\u0061\u0067\u0065\u0073");
  _0xed568e['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0074\u006F\u0067\u0067\u006C\u0065']("\u0064\u0061\u0072\u006B\u002D\u006D\u006F\u0064\u0065");
  _0xc2acgg['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0074\u006F\u0067\u0067\u006C\u0065']("\u0064\u0061\u0072\u006B\u002D\u006D\u006F\u0064\u0065");
  var _0x2d4d = (304212 ^ 304215) + (336950 ^ 336944);
  const _0x5d81d = document['\u0062\u006F\u0064\u0079']['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0063\u006F\u006E\u0074\u0061\u0069\u006E\u0073']("\u0064\u0061\u0072\u006B\u002D\u006D\u006F\u0064\u0065");
  _0x2d4d = '\u0067\u006E\u006D\u006F\u0068\u0067';
  localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("edoMkrad".split("").reverse().join(""), _0x5d81d);
}
document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("dedaoLtnetnoCMOD".split("").reverse().join(""), () => {
  const isDarkMode = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("edoMkrad".split("").reverse().join("")) === "\u0074\u0072\u0075\u0065";
  if (isDarkMode) {
    document['\u0062\u006F\u0064\u0079']['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("edom-krad".split("").reverse().join(""));
    document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u002E\u0063\u0068\u0061\u0074\u002D\u0063\u006F\u006E\u0074\u0061\u0069\u006E\u0065\u0072")['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("edom-krad".split("").reverse().join(""));
    document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u002E\u006D\u0065\u0073\u0073\u0061\u0067\u0065\u0073")['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("edom-krad".split("").reverse().join(""));
  }
});
function toggleDropdown(event) {
  event['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0064\u0072\u006F\u0070\u0064\u006F\u0077\u006E\u004D\u0065\u006E\u0075")['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0074\u006F\u0067\u0067\u006C\u0065']("\u0073\u0068\u006F\u0077");
}
window['\u006F\u006E\u0063\u006C\u0069\u0063\u006B'] = function (event) {
  if (!event['\u0074\u0061\u0072\u0067\u0065\u0074']['\u006D\u0061\u0074\u0063\u0068\u0065\u0073']("\u002E\u0064\u0072\u006F\u0070\u0064\u006F\u0077\u006E\u0020\u0062\u0075\u0074\u0074\u006F\u006E")) {
    const _0x22f65c = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0073\u0042\u0079\u0043\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']("tnetnoc-nwodpord".split("").reverse().join(""));
    for (const _0x5e_0xa15 of _0x22f65c) {
      if (_0x5e_0xa15['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0063\u006F\u006E\u0074\u0061\u0069\u006E\u0073']("wohs".split("").reverse().join(""))) {
        _0x5e_0xa15['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0073\u0068\u006F\u0077");
      }
    }
  }
};
document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u0068\u0061\u0074\u002D\u0069\u006E\u0070\u0075\u0074")['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u006B\u0065\u0079\u0070\u0072\u0065\u0073\u0073", function (event) {
  if (event['\u006B\u0065\u0079'] === "\u0045\u006E\u0074\u0065\u0072" && !event['\u0073\u0068\u0069\u0066\u0074\u004B\u0065\u0079']) {
    event['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();
    sendMessage();
  }
});
function fanhu() {
  window['\u006C\u006F\u0063\u0061\u0074\u0069\u006F\u006E']['\u0072\u0065\u0070\u006C\u0061\u0063\u0065']("\u002F\u0062\u006F\u0074\u804A\u5929\u002F\u0062\u006F\u0074\u002E\u0068\u0074\u006D\u006C");
}